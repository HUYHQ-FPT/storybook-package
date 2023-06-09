import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

import packageJson from "./package.json" assert { type: "json" };
const extensions = [".mjs", ".js", ".ts", ".json"];

export default {
  input: "src/index.ts",
  external: ["react-dom"],
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs({ extensions }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: [".css"],
    }),
  ],
};
