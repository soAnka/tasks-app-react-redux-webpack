const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new TerserPlugin({ terserOptions: { compress: {} } }),
    new MiniCssExtractPlugin({ filename: "[name].bundle.css" }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new ImageMinimizerPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /\node_modules/,
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            encodeOptions: {
              mozjpeg: {
                quality: 70,
              },
            },
            plugins: [
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
            ],
          },
        },
      }),
    ],
  },
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
        test: /\.(jpe?g|png)$/i,
        exclude: /\node_modules/,
        type: "asset",
      },
    ],
  },
  devtool: false,
});
