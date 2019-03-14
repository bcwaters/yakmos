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
            },
            {
            test: /\.css$/,
            loader:'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ],
    },
    plugins: [
        new CopyPlugin([
            {from: './public/chromeApp/manifest.json', to: './manifest.json' },
            {from: './public/chromeApp/background.js', to: './background.js' },
            {from: './public/chromeApp/directions.txt', to: './directions.txt' },
            {from: './public/chromeApp/yakmosIcon16.png', to: './yakmosIcon16.png' },
            {from: './public/chromeApp/yakmosIcon48.png', to: './yakmosIcon48.png' },
            {from: './public/chromeApp/yakmosIcon128.png', to: './yakmosIcon128.png' },
            {from: './public/chromeApp/Draft.css', to: './Draft.css' },
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
        app: './public/chromeApp/chromeContent.js',
     
},
};