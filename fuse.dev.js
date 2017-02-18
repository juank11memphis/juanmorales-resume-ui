const fsbx = require('fuse-box');

let fuseBox = new fsbx.FuseBox({
  homeDir: 'src/',
  sourceMap: {
    bundleReference: 'sourcemaps.js.map',
    outFile: './dist/sourcemaps.js.map',
  },
  outFile: './dist/main.js',
  plugins: [
    fsbx.EnvPlugin({ NODE_ENV: "development" }),
    fsbx.SVGPlugin(),
    fsbx.CSSPlugin(),
    fsbx.BabelPlugin()
  ]
});

fuseBox.devServer('>index.js');
