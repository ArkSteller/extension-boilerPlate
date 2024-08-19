const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    popup: path.resolve("./src/popup/App.tsx"),
    background: path.resolve("./src/background_scripts/background.ts"),
    content: path.resolve("./src/content_scripts/content.js"),
    pageWorld: "@inboxsdk/core/pageWorld.js",
  },
  module: {
    rules: [
      // For packaging typescript files except the onces in node_models
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node_modules/,
      },
      // For packaging css files
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/i,
      },
    ],
  },
  plugins: [
    // To copy the files directly from public directory
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/public"),
          to: path.resolve("dist"),
        },
      ],
    }),
    // converts all html files
    new HtmlPlugin({
      title: "Web Summarizer Ai",
      filename: "popup.html",
      chunks: ["popup"],
    }),
  ],
  // Type of files to work on
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // How to rename the file in the /dist directory
  output: {
    filename: "[name].js",
  },
};
