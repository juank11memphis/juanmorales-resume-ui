const fsbx = require('fuse-box');

let fuseBox = new fsbx.FuseBox({
  cache: false,
  homeDir: 'src/',
  sourceMap: {
    bundleReference: 'sourcemaps.js.map',
    outFile: './dist/sourcemaps.js.map',
  },
  outFile: './dist/main.js',
  plugins: [
    fsbx.EnvPlugin({ NODE_ENV: "development" }),
    [
      fsbx.CSSResourcePlugin({ inline: true }),
      fsbx.CSSPlugin()
    ],
    fsbx.SVGPlugin(),
    fsbx.BabelPlugin()
  ]
});

fuseBox.devServer('>index.js');
