var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pick a Title',
      hash: true,
      template: './src/index.pug'
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader'
      }
    ]
  }
}
