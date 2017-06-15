var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,

    entry: { 
        index: './assets/js/index.js',
        'vendor': ['react'],
    },

    externals: [
    ], 

    output: {
        path: path.resolve('./assets/bundles/'),
        filename: "[name]-[hash].js"
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new BundleTracker({filename: './webpack-stats.json'})
    ],

    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader',
                query:{
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    resolve: {
        modules: ['node_modules', 'bower_components'],
        extensions: ['.js', '.jsx']
    },
};