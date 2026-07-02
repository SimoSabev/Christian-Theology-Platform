'use client';

import { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  type Node,
  type Edge,
  type NodeMouseHandler,
  BackgroundVariant,
  Handle,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useSearchParams } from 'next/navigation';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { allTrees } from '@/data/trees';
import { allDebates } from '@/data/debates';
import type { TreeNode } from '@/data/arguments/types';
import { ArrowLeft, TreePine, Swords } from 'lucide-react';
import { Eyebrow } from '@/components/ornament';

const DEFAULT_TREE = 'kalam';

const nodeColors: Record<string, { bg: string; border: string; text: string }> = {
  argument: { bg: '#1a2035', border: '#d4a853', text: '#f1f5f9' },
  premise: { bg: '#1e293b', border: '#3b82f6', text: '#93c5fd' },
  support: { bg: '#1a2e1a', border: '#22c55e', text: '#86efac' },
  objection: { bg: '#2e1a1a', border: '#ef4444', text: '#fca5a5' },
  response: { bg: '#1a2e2e', border: '#14b8a6', text: '#5eead4' },
  conclusion: { bg: '#2e2a1a', border: '#d4a853', text: '#fcd34d' },
};

const statusStyles: Record<string, { label: string; color: string; bg: string }> = {
  defended: { label: 'DEFENDED', color: '#d4a853', bg: 'rgba(212,168,83,0.12)' },
  granted: { label: 'GRANTED', color: '#94a3b8', bg: 'rgba(148,163,184,0.12)' },
  contested: { label: 'CONTESTED', color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
};

type CustomNodeData = {
  label: string;
  nodeType: string;
  status?: string;
  sources?: string[];
  hiddenChildCount: number;
};

function CustomNode({ data }: { data: CustomNodeData }) {
  const colors = nodeColors[data.nodeType] || nodeColors.argument;
  const typeLabel = data.nodeType.charAt(0).toUpperCase() + data.nodeType.slice(1);
  const status = data.status ? statusStyles[data.status] : undefined;

  return (
    <div
      className="rounded-xl shadow-lg max-w-[280px] transition-shadow hover:shadow-xl cursor-pointer"
      style={{ background: colors.bg, border: `2px solid ${colors.border}`, padding: '12px 16px' }}
    >
      <Handle type="target" position={Position.Top} className="!bg-transparent !border-0" />
      <div className="flex items-center justify-between gap-2 mb-1">
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.border }}>{typeLabel}</p>
        {status && (
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.5rem',
              letterSpacing: '0.15em',
              padding: '2px 6px',
              borderRadius: '4px',
              color: status.color,
              background: status.bg,
            }}
          >
            {status.label}
          </span>
        )}
      </div>
      <p className="text-sm leading-relaxed" style={{ color: colors.text }}>{data.label}</p>
      {data.sources && data.sources.length > 0 && (
        <div className="mt-2 pt-2 border-t border-white/10">
          {data.sources.map((s: string) => (
            <p key={s} className="text-[10px] text-gray-500">{s}</p>
          ))}
        </div>
      )}
      {data.hiddenChildCount > 0 && (
        <div className="mt-2 flex justify-center">
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.55rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '3px 10px',
              borderRadius: '9999px',
              color: colors.border,
              border: `1px solid ${colors.border}`,
              background: 'rgba(0,0,0,0.2)',
            }}
          >
            + {data.hiddenChildCount} more
          </span>
        </div>
      )}
      <Handle type="source" position={Position.Bottom} className="!bg-transparent !border-0" />
    </div>
  );
}

const nodeTypes = { custom: CustomNode };

/** Collect the ids that should be expanded initially: root + first-level children. */
function initialExpanded(root: TreeNode): Set<string> {
  const set = new Set<string>();
  set.add(root.id);
  root.children?.forEach((c) => set.add(c.id));
  return set;
}

/**
 * Build visible nodes/edges from an expanded set. A node's children are only
 * laid out when the node itself is in `expanded`. Every node reports how many
 * direct children are currently hidden so the card can show a "+ N more" badge.
 */
function buildVisible(
  node: TreeNode,
  parentId: string | null,
  x: number,
  y: number,
  expanded: Set<string>
): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  const currentId = node.id;
  const childCount = node.children?.length ?? 0;
  const isExpanded = expanded.has(currentId);

  nodes.push({
    id: currentId,
    type: 'custom',
    position: { x, y },
    data: {
      label: node.text,
      nodeType: node.type,
      status: node.status,
      sources: node.sources,
      hiddenChildCount: isExpanded ? 0 : childCount,
    },
  });

  if (parentId) {
    edges.push({
      id: `${parentId}-${currentId}`,
      source: parentId,
      target: currentId,
      style: { stroke: 'rgba(212,168,83,0.5)', strokeWidth: 1.5 },
      animated: node.type === 'objection',
    });
  }

  if (isExpanded && node.children && childCount > 0) {
    const totalWidth = (childCount - 1) * 320;
    const startX = x - totalWidth / 2;
    node.children.forEach((child, i) => {
      const childX = startX + i * 320;
      const childY = y + 180;
      const result = buildVisible(child, currentId, childX, childY, expanded);
      nodes.push(...result.nodes);
      edges.push(...result.edges);
    });
  }

  return { nodes, edges };
}

/** Does a node (by id) have any children, so a click can toggle it? */
function findNode(node: TreeNode, id: string): TreeNode | null {
  if (node.id === id) return node;
  if (!node.children) return null;
  for (const child of node.children) {
    const found = findNode(child, id);
    if (found) return found;
  }
  return null;
}

/** All descendant ids of a node (excluding itself). */
function collectDescendants(node: TreeNode): string[] {
  const ids: string[] = [];
  node.children?.forEach((c) => {
    ids.push(c.id);
    ids.push(...collectDescendants(c));
  });
  return ids;
}

function ArgumentTreeInner() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const { fitView } = useReactFlow();

  const treeKeys = useMemo(() => Object.keys(allTrees), []);
  const paramTree = searchParams.get('tree');
  const activeKey = paramTree && allTrees[paramTree] ? paramTree : DEFAULT_TREE;
  const tree = allTrees[activeKey];

  const [expanded, setExpanded] = useState<Set<string>>(() => initialExpanded(tree));

  // Reset expansion when the active tree changes.
  useEffect(() => {
    setExpanded(initialExpanded(tree));
  }, [tree]);

  const { nodes: computedNodes, edges: computedEdges } = useMemo(
    () => buildVisible(tree, null, 600, 50, expanded),
    [tree, expanded]
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(computedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(computedEdges);

  // Sync computed nodes/edges into React Flow state whenever they change.
  useEffect(() => {
    setNodes(computedNodes);
    setEdges(computedEdges);
  }, [computedNodes, computedEdges, setNodes, setEdges]);

  // Fit view only on tree switch, not on every expand/collapse toggle.
  useEffect(() => {
    const id = setTimeout(() => fitView({ padding: 0.3, duration: 400 }), 60);
    return () => clearTimeout(id);
  }, [tree, fitView]);

  const onNodeClick: NodeMouseHandler = useCallback(
    (_event, node) => {
      const treeNode = findNode(tree, node.id);
      if (!treeNode || !treeNode.children || treeNode.children.length === 0) return;
      setExpanded((prev) => {
        const next = new Set(prev);
        if (next.has(node.id)) {
          // Collapse: hide this node's entire subtree.
          collectDescendants(treeNode).forEach((id) => next.delete(id));
          next.delete(node.id);
        } else {
          next.add(node.id);
        }
        return next;
      });
    },
    [tree]
  );

  const handleSelectTree = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('tree', key);
      router.replace(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams]
  );

  // Cross-link to a matching debate, if one exists for this tree key.
  const matchingDebate = allDebates[activeKey];

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 border-b border-border bg-bg-secondary/50 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <Link href="/explore" className="p-2 text-text-muted hover:text-text-primary transition-colors">
            <ArrowLeft size={18} />
          </Link>
          <TreePine size={20} style={{ color: 'var(--color-accent-gold)' }} />
          <div>
            <Eyebrow className="mb-2">EXPLORE · ARGUMENT TREE</Eyebrow>
            <h1 className="t-h1" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>Argument Structure</h1>
          </div>
        </div>
        {/* Legend */}
        <div className="hidden lg:flex items-center gap-4 text-xs">
          {Object.entries(nodeColors).map(([type, colors]) => (
            <span key={type} className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded" style={{ background: colors.border }} />
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          ))}
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded" style={{ background: statusStyles.defended.color }} />
            Defended
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded" style={{ background: statusStyles.granted.color }} />
            Granted
          </span>
        </div>
      </div>

      {/* Tree selector + cross-link */}
      <div className="px-4 sm:px-6 lg:px-8 py-3 border-b border-border bg-bg-primary flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          {treeKeys.map((key) => {
            const isActive = key === activeKey;
            return (
              <button
                key={key}
                onClick={() => handleSelectTree(key)}
                aria-pressed={isActive}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  border: `1px solid ${isActive ? 'var(--color-accent-gold)' : 'var(--color-border)'}`,
                  color: isActive ? 'var(--color-bg-primary)' : 'var(--color-text-muted)',
                  background: isActive ? 'var(--color-accent-gold)' : 'transparent',
                  transition: 'all 150ms',
                }}
              >
                {allTrees[key].text}
              </button>
            );
          })}
        </div>
        {matchingDebate && (
          <Link
            href={`/explore/debate-mode?debate=${activeKey}`}
            className="flex items-center gap-2 text-xs hover:opacity-80 transition-opacity"
            style={{
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-gold)',
            }}
          >
            <Swords size={14} />
            Watch this argument debated →
          </Link>
        )}
      </div>

      {/* React Flow Canvas */}
      <div className="flex-1 relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.3 }}
          minZoom={0.2}
          maxZoom={2.5}
          panOnScroll
          zoomOnPinch
          panOnDrag
          proOptions={{ hideAttribution: true }}
        >
          <Controls
            showInteractive={false}
            className="!bg-bg-elevated !border-border !rounded-xl !shadow-lg [&>button]:!bg-bg-elevated [&>button]:!border-border [&>button]:!text-text-secondary [&>button:hover]:!bg-surface-glass"
          />
          <MiniMap
            style={{ bottom: 80, right: 16 }}
            zoomable
            pannable
            nodeColor={(n) => {
              const t = (n.data as { nodeType?: string }).nodeType ?? 'argument';
              return nodeColors[t]?.border ?? '#d4a853';
            }}
          />
          <Background variant={BackgroundVariant.Dots} color="#1e293b" gap={24} size={1} />
        </ReactFlow>

        {/* Reset View button — visible on mobile */}
        <button
          className="fixed bottom-20 left-4 z-50 md:hidden"
          onClick={() => fitView({ padding: 0.2, duration: 400 })}
          style={{
            background: 'var(--color-bg-elevated)',
            border: '1px solid var(--color-accent-gold)',
            color: 'var(--color-accent-gold)',
            borderRadius: '9999px',
            padding: '8px 14px',
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          Reset View
        </button>
      </div>
    </div>
  );
}

export default function ArgumentTreePage() {
  return (
    <Suspense fallback={null}>
      <ReactFlowProvider>
        <ArgumentTreeInner />
      </ReactFlowProvider>
    </Suspense>
  );
}
