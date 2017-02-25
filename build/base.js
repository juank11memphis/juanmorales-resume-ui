const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  return {
    entry: {
      main: './src/index.js',
      vendor: [
        'react',
        'react-dom',
        'react-redux',
        'react-router',
        'redux',
        'redux-thunk',
        'semantic-ui-react'
      ]
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loaders: ['eslint-loader'],
          enforce: "pre",
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.(png|gif|jpg|svg)$/,
          loader: 'file-loader'
        },
        {
          test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=100000'
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        }
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new HtmlWebpackPlugin({
        template: './src/index.ejs'
      })
    ]
  };
}
