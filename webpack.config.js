const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/app.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    clean: true,
  },
  module: {
    rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
          test: /\.m?s?css$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        open: true,
        historyApiFallback: true
    }
};