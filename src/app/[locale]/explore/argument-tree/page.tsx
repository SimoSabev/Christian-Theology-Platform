'use client';

import { useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  BackgroundVariant,
  Handle,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { kalamTree } from '@/data/trees';
import type { TreeNode } from '@/data/arguments/types';
import { ArrowLeft, TreePine } from 'lucide-react';

const nodeColors: Record<string, { bg: string; border: string; text: string }> = {
  argument: { bg: '#1a2035', border: '#d4a853', text: '#f1f5f9' },
  premise: { bg: '#1e293b', border: '#3b82f6', text: '#93c5fd' },
  support: { bg: '#1a2e1a', border: '#22c55e', text: '#86efac' },
  objection: { bg: '#2e1a1a', border: '#ef4444', text: '#fca5a5' },
  response: { bg: '#1a2e2e', border: '#14b8a6', text: '#5eead4' },
  conclusion: { bg: '#2e2a1a', border: '#d4a853', text: '#fcd34d' },
};

function CustomNode({ data }: { data: { label: string; nodeType: string; sources?: string[] } }) {
  const colors = nodeColors[data.nodeType] || nodeColors.argument;
  const typeLabel = data.nodeType.charAt(0).toUpperCase() + data.nodeType.slice(1);

  return (
    <div
      className="rounded-xl shadow-lg max-w-[280px] transition-shadow hover:shadow-xl"
      style={{ background: colors.bg, border: `2px solid ${colors.border}`, padding: '12px 16px' }}
    >
      <Handle type="target" position={Position.Top} className="!bg-transparent !border-0" />
      <p className="text-[10px] uppercase tracking-wider font-semibold mb-1" style={{ color: colors.border }}>{typeLabel}</p>
      <p className="text-sm leading-relaxed" style={{ color: colors.text }}>{data.label}</p>
      {data.sources && data.sources.length > 0 && (
        <div className="mt-2 pt-2 border-t border-white/10">
          {data.sources.map((s: string) => (
            <p key={s} className="text-[10px] text-gray-500">{s}</p>
          ))}
        </div>
      )}
      <Handle type="source" position={Position.Bottom} className="!bg-transparent !border-0" />
    </div>
  );
}

const nodeTypes = { custom: CustomNode };

function flattenTree(node: TreeNode, parentId: string | null, x: number, y: number, depth: number): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  const currentId = node.id;

  nodes.push({
    id: currentId,
    type: 'custom',
    position: { x, y },
    data: { label: node.text, nodeType: node.type, sources: node.sources },
  });

  if (parentId) {
    edges.push({
      id: `${parentId}-${currentId}`,
      source: parentId,
      target: currentId,
      style: { stroke: nodeColors[node.type]?.border || '#555', strokeWidth: 2 },
      animated: node.type === 'objection',
    });
  }

  if (node.children) {
    const childCount = node.children.length;
    const totalWidth = (childCount - 1) * 320;
    const startX = x - totalWidth / 2;

    node.children.forEach((child, i) => {
      const childX = startX + i * 320;
      const childY = y + 180;
      const result = flattenTree(child, currentId, childX, childY, depth + 1);
      nodes.push(...result.nodes);
      edges.push(...result.edges);
    });
  }

  return { nodes, edges };
}

export default function ArgumentTreePage() {
  const { nodes: initialNodes, edges: initialEdges } = useMemo(
    () => flattenTree(kalamTree, null, 600, 50, 0),
    []
  );

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 border-b border-border bg-bg-secondary/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/explore" className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-glass transition-colors">
            <ArrowLeft size={18} />
          </Link>
          <TreePine size={20} className="text-accent-green" />
          <div>
            <h1 className="font-bold text-lg">Argument Tree</h1>
            <p className="text-xs text-text-muted">Kalam Cosmological Argument</p>
          </div>
        </div>
        {/* Legend */}
        <div className="hidden md:flex items-center gap-4 text-xs">
          {Object.entries(nodeColors).map(([type, colors]) => (
            <span key={type} className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded" style={{ background: colors.border }} />
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          ))}
        </div>
      </div>

      {/* React Flow Canvas */}
      <div className="flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.3 }}
          minZoom={0.2}
          maxZoom={2}
          proOptions={{ hideAttribution: true }}
        >
          <Controls className="!bg-bg-elevated !border-border !rounded-xl !shadow-lg [&>button]:!bg-bg-elevated [&>button]:!border-border [&>button]:!text-text-secondary [&>button:hover]:!bg-surface-glass" />
          <Background variant={BackgroundVariant.Dots} color="#1e293b" gap={24} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
}
