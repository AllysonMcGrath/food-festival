const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// main configuration object
// entry is root of bundle, relative path to code
// output is where to put bundled code, best practice put in 'dis'tribution folder
// mode in which we want webpack to run, default is production
module.exports = {
    entry: {
        app: './assets/js/script.js',
        events: './assets/js/events.js',
        schedule: './assets/js/schedule.js',
        tickets: './assets/js/tickets.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.jpg$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  esModule: false,
                  name(file) {
                    return '[path][name].[ext]';
                  },
                  publicPath: function(url) {
                    return url.replace('../', '/assets/');
                  }
                }
              },
              {
                loader: 'image-webpack-loader'
              }
            ]
          }
        ]
      },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static", //the report outputs to an HTML file in the dist folder 
        })
    ],
    mode: 'development'
};