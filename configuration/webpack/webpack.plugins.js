const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  new webpack.ProvidePlugin({
    React: "react"
  }),
  new HtmlWebpackPlugin({
    template: "src/index.html",
    favicon: "src/favicon.ico"
  }),
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
    //NODE_ENV: 'production'
  })  
  // new webpack.DefinePlugin({
  //   "process.env": {
  //     NODE_ENV: JSON.stringify("production")
  //   }
  // })  
];
