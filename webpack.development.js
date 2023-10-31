const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [new MiniCssExtractPlugin({ filename: "[name].bundle.min.css" })],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.m?s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    compress: true,
    port: 9000,
    open: true,
    historyApiFallback: true,
  },
});
