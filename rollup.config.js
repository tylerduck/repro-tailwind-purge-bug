import excludeDeps from "rollup-plugin-exclude-dependencies-from-bundle";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-ts";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: {
    format: "esm",
    sourcemap: true,
    dir: "lib",
  },
  plugins: [typescript(), excludeDeps(), resolve(), commonjs(), postcss()],
};
