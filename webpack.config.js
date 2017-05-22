var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var isProd = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader', 'css-loader'];
var cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  loader: ['css-loader', 'sass-loader'],
  publicPath: '/dist'
});
var cssConfig = isProd ? cssProd : cssDev;
var bootstrapEntryPoints = require('./webpack.bootstrap.config.js');
var bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {
  entry: [bootstrapConfig, './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssConfig
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|eot)$/i,
        use: 'file-loader'
      },
      {
        test: /\.(woff2?|svg)$/,
        use: 'url-loader?limit=10000' }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 8000,
    stats: 'errors-only'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Your-Title-Here",
      hash: true,
      template: './src/example.pug'
    }),
    new ExtractTextPlugin({
      filename: 'main.css',
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
