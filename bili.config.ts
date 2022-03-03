import { Config } from "bili";

const config: Config = {
  plugins: {
    typescript2: {
      tsconfigOverride: {
        include: ["src"],
      },
    },
    terser: {},
  },

  input: "src/index.ts",
  output: {
    format: ["cjs", "esm"],
  },
};

export default config;
