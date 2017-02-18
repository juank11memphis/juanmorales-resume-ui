const fsbx = require('fuse-box');

let fuseBox = new fsbx.FuseBox({
  homeDir: 'src/',
  outFile: './dist/main.js',
  plugins: [
    fsbx.EnvPlugin({ NODE_ENV: "production" }),
    [
      fsbx.CSSResourcePlugin({ inline: true }),
      fsbx.CSSPlugin({minify: true})
    ],
    fsbx.UglifyJSPlugin(),
    fsbx.SVGPlugin(),
    fsbx.BabelPlugin()
  ]
});

fuseBox.devServer('>index.js');
