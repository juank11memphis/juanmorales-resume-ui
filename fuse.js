const fsbx = require('fuse-box');

let fuseBox = new fsbx.FuseBox({
  homeDir: 'src/',
  sourceMap: {
    bundleReference: 'sourcemaps.js.map',
    outFile: './build/sourcemaps.js.map',
  },
  outFile: './build/out.js',
  plugins: [
    fsbx.SVGPlugin(),
    fsbx.CSSPlugin(),
    fsbx.BabelPlugin()
  ]
});

fuseBox.devServer('>index.js');
