var express = require('express');
var path = require('path');
var compression = require('compression');
var proxy = require('http-proxy-middleware');

/* eslint-disable no-console */

var port = 3000;
var app = express();

app.use('/api', proxy({
  target: 'http://ec2-34-195-147-72.compute-1.amazonaws.com:3001',
  changeOrigin: true
}));
app.use('/static', proxy({
  target: 'http://ec2-34-195-147-72.compute-1.amazonaws.com:3001',
  changeOrigin: true
}));
app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Express static server running on http://localhost:3000");
  }
});
