const path = require("path");
const webpack = require("webpack");
// main configuration object
// entry is root of bundle, relative path to code
// output is where to put bundled code, best practice put in 'dis'tribution folder
// mode in which we want webpack to run, default is production
module.exports = {
    entry:'./assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    mode: 'development'
};