const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");

module.exports = merge(config, {
  mode: "development",
  devtool: "cheap-module-source-map", // feel free to use whichever devtool you prefer
});
