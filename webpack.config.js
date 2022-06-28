const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  devtool: process.env.NODE_ENV === "development" ? "eval-source-map" : "source-map",
  plugins: [new HtmlWebpackPlugin()],
  watch: true,
};
