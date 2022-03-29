module.exports = {
  entry: {
    bundle: "./src/index.ts",
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  mode: "production",
  resolve: {
    // importした時の拡張子を省いてもokなように記載。import 〇〇 from "./index"だけでokと言うこと。index.jsとしなくて良い。
    extensions: [".ts", ".js"],
  },
  // local serverを立ち上げる時に何を見にいくか、どこをweb serverとして立ち上げるか
  // つまり、tsをコンパイルし終わったjsを見に行ってくださいね、という事＝jsからindex.htmlを見てください。
  devServer: {
    static: {
      directory: `${__dirname}/dist`,
    },
    open: true,
  },
  module: {
    rules: [
      {
        // 拡張子.tsをコンパイルしている
        test: /\.ts$/,
        // installしたloaderに対し、.tsと付いている拡張子をts-loaderを使ってコンパイルして下さいと命令
        loader: "ts-loader",
      },
    ],
  },
};
