const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].bundle.min.js",
    path: path.join(__dirname, "public"),
    clean: true,
  },
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
      new TerserPlugin({ terserOptions: { compress: {} } }),
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
});
