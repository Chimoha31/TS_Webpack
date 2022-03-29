module.exports = {
  entry: {
    bundle: "./src/index.ts",
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  mode: "development",
  resolve: {
    // importした時の拡張子を省いてもokなように記載。import 〇〇 from "./index"だけでokと言うことindex.jsとかしなくて良い。
    extensions: [".ts", ".js"],
  },

};
