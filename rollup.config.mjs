import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json" assert { type: "json" };
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import image from "@rollup/plugin-image";

import preserveDirectives from "rollup-plugin-preserve-directives";

const config = [
  {
    input: "./src/index.ts",
    watch: {
      include: "src/**",
    },
    output: [
      {
        dir: pkg.module,
        format: "esm",
        sourcemap: false,
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    ],

    external: [...Object.keys(pkg.dependencies || {})],
    plugins: [
      image(),
      peerDepsExternal(),
      babel({
        babelHelpers: "bundled",
        exclude: [
          "node_modules/**",
          "stories/**",
          "src/**/*.stories.tsx",
          "src/**/*.stories.ts",
          "src/components/**/*.stories.tsx",
          "src/components/**/*.stories.ts",
        ],
      }),
      typescript({
        declarationDir: "dist",
        exclude: [
          "**/__tests__",
          "**/*.test.ts",
          "src/**/*.stories.tsx",
          "src/**/*.stories.ts",
          "src/components/**/*.stories.tsx",
          "src/components/**/*.stories.ts",
        ],
      }),
      terser({ compress: { directives: false } }),
      preserveDirectives(),

      // minifies generated bundles
    ],
    onwarn(warning, warn) {
      if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
        return;
      }
      warn(warning);
    },
  },
];

export default config;
