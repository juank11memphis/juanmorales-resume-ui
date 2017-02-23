const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

function getCommonPlugins(){
  return [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ];
}

function getDevelopmentPlugins(){
  const commonsPlugins = getCommonPlugins();
  return [
    ...commonsPlugins,
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ];
}

function getProductionPlugins(){
  const commonsPlugins = getCommonPlugins();
  return [
    ...commonsPlugins,
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
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
      output: {
        comments: false,
      }
    })
  ];
}

function getPlugins(){
  if (process.env.NODE_ENV === 'development') {
    return getDevelopmentPlugins();
  }
  return getProductionPlugins();
}

function getDevServerConfig(){
  const isProd = process.env.NODE_ENV === 'production';
  return {
    contentBase: path.join(__dirname, './dist'),
    publicPath: '/',
    historyApiFallback: true,
    port: 3000,
    compress: isProd,
    inline: !isProd,
    hot: !isProd,
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
  };
}

function getModuleConfig(){
  return {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: 'url-loader?limit=20480&name=assets/[name].[ext]',
      },
      {
        test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=20480&name=assets/[name].[ext]'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  };
}

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? 'cheap-module-source-map' : 'source-map',
  plugins: getPlugins(),
  devServer: getDevServerConfig(),
  module: getModuleConfig()
};
