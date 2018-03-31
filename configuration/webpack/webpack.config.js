const path = require('path');
const loadersConfig = require('./webpack.loaders.js');
const pluginsConfig = require('./webpack.plugins.js');

module.exports = function() {
    return {
        entry: "./src/index.tsx",
        output: {
            filename: "bundle.js",
            path: __dirname + "/dist"
        },
        plugins: pluginsConfig,
        module: {
            rules: loadersConfig
        },
        // Enable sourcemaps for debugging webpack's output.
        devtool: 'inline-source-map',
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", "min.js", ".json"],
            modules: ['node_modules'],
            alias : {
                environment: path.join(__dirname, '../src/environment', (process.env.NODE_ENV || 'local'))
            }
        },
        devServer: {
            stats: 'minimal',
            port: 3000, // most common port
            contentBase: './dist',
            inline: true
          },
    };
};