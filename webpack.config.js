const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
      plugins: [
    new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  })
],
     output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  }
};