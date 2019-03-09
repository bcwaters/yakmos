const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path')

module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    plugins: [
        new CopyPlugin([
            {from: './public/manifest.json', to: './manifest.json' },
            {from: './public/chromeApp/background.js', to: './background.js' },
    
        ]),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
      ],
    output: {
        path: __dirname + '/chromeExtensionBuild',
        publicPath: '/',
        filename: 'chromeContent-bundle.js'
  },
    entry: {
        app: './src/chromeContent.js',
     
},
};