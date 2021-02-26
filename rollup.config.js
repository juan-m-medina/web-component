import { babel } from "@rollup/plugin-babel";

const config = {
  input: "test-component.js",
  output: {
    compact: true,
    dir: "output",
    format: "es",
    minifyInternalExports: false,
  },
  plugins: [babel({ babelHelpers: "bundled" })],
};

export default config;
