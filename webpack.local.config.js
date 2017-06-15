var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var config = require('./webpack.base.config.js')

config.devtool = 'inline-source-map'

var ip = 'localhost'

config.entry = {
  index: [
    'webpack-dev-server/client?http://' + ip + ':3000',
    'webpack/hot/dev-server',
    './assets/js/index.js',
  ],
}

config.output.publicPath = 'http://' + ip + ':3000' + '/assets/bundles/'

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new BundleTracker({filename: './webpack-stats.json'}),
])

module.exports = config