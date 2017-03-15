const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
var WebpackChunkHash = require("webpack-chunk-hash");
var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

const commonConfig = require('./base.js');

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
    devtool: 'hidden-source-map',
    output: {
      path: path.join(__dirname, '../dist'),
      filename: "[name].[chunkhash].js",
      chunkFilename: "[name].[chunkhash].js"
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
        },
        comments: false
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: ["vendor", "manifest"], // vendor libs + extracted manifest
        minChunks: Infinity
      }),
      new webpack.HashedModuleIdsPlugin(),
      new WebpackChunkHash(),
      new ChunkManifestPlugin({
        filename: "chunk-manifest.json",
        manifestVariable: "webpackManifest"
      }),
      new InlineManifestWebpackPlugin({
        name: 'webpackManifest'
      })
    ]
  })
}
