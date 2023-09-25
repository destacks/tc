import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/twcn.ts",
    output: {
      file: "dist/cjs/twcn.js",
      format: "cjs",
    },
    plugins: [
      typescript({ tsconfig: "tsconfig.cjs.json" }),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: "src/twcn.ts",
    output: {
      file: "dist/esm/twcn.js",
      format: "esm",
    },
    plugins: [
      typescript({ tsconfig: "tsconfig.esm.json" }),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: "src/twcn.ts",
    output: {
      file: "dist/umd/twcn.js",
      format: "umd",
      name: "twcn",
      sourcemap: true,
    },
    plugins: [typescript(), resolve(), commonjs(), terser()],
  },
];
