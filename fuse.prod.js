const fsbx = require('fuse-box');

let fuseBox = new fsbx.FuseBox({
  homeDir: 'src/',
  outFile: './build/out.js',
  plugins: [
    fsbx.EnvPlugin({ NODE_ENV: "production" }),
    fsbx.SVGPlugin(),
    fsbx.CSSPlugin(),
    fsbx.BabelPlugin()
  ]
});

fuseBox.devServer('>index.js');
