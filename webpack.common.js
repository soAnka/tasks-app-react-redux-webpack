const WebpackMerge = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: "./src/app.js",
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].bundle.min.css" }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
