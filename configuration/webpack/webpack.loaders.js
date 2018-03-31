const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
  // {
  //   enforce: "pre",
  //   test: /\.tsx$/,
  //   loader: "tslint-loader",
  //   options: {
  //     configFile: "tslint.json",
  //     emitErrors: true,
  //     failOnHint: true
  //   }
  // },
  // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
  {
    enforce: "pre",
    test: /\.js$/,
    loader: "source-map-loader"
  },
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: "awesome-typescript-loader"
  },
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
  },
  {
    test: /\.scss/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: ["css-loader", "sass-loader"]
    })
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loader: "file-loader",
    options: {
      name: "images/[name].[ext]"
    }
  }
];
