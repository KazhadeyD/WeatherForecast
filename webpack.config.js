const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  devServer: {
    watchFiles: ["src/**"],
    compress: true,
    port: 9000,
  },
  devtool: process.env.NODE_ENV === "development" ? "eval-source-map" : "source-map",
  plugins: [new HtmlWebpackPlugin(
      {
        template: "index.html",
      })],
};
