import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Disable React Compiler rules — this project does not use the React Compiler.
  // These rules fire on idiomatic useState-in-useEffect patterns (hydration, etc.)
  // that are perfectly valid in non-Compiler codebases.
  {
    rules: {
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/set-state-in-render": "off",
    },
  },
]);

export default eslintConfig;
