function buildConfig(env) {
  return require('./build/' + env + '.js')({ env: env })
}

module.exports = buildConfig;


// const webpack = require('webpack');
// const path = require('path');
//
// const webpackUtil = require('./build/webpackUtil');
//
// module.exports = function (env) {
//
//   return {
//     entry: {
//       js: './src/index.js',
//       vendor: [
//         'react',
//         'react-dom',
//         'react-redux',
//         'react-router',
//         'redux',
//         'redux-thunk',
//         'semantic-ui-react'
//       ]
//     },
//
//     output: {
//       path: path.join(__dirname, './dist'),
//       filename: '[name].bundle.js',
//     },
//
//     devtool: webpackUtil.devtool,
//
//     module: webpackUtil.module,
//
//     plugins: webpackUtil.plugins,
//
//     devServer: webpackUtil.devServer
//   };
// };
