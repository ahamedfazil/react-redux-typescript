const path = require('path');
const config = require('./webpack.config.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(config(), {
  output: {
    path: path.resolve('dist'),
    filename: 'js/[name].min.[hash].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin({filename: 'css/[name].[hash].css'}),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      sourceMap: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false
    })
  ]
});
