const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

const commonConfig = require('./base.js');

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
    devtool: 'eval-source-map',
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[name].bundle.js',
      chunkFilename: "[name].bundle.js"
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        }
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: path.join(__dirname, '../dist'),
      publicPath: '/',
      historyApiFallback: true,
      port: 3000,
      inline: true,
      hot: true,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m'
        }
      }
    }
  })
}
