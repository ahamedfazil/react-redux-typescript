const path = require('path');
const config = require('./webpack.config.js');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(config(), {
  output: {
    path: path.resolve('src'),
    filename: 'bundle.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader', exclude: /node_modules/ }
    ]
  },
  devServer: {
    stats: 'minimal',
    contentBase: './src',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
});
