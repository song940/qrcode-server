var express = require('express');
var qr      = require('qr-image');

var app = express();

app.get('/',function(req, res){
  res.set('Content-Type', 'image/png');
  qr.image(req.query.text, { type: 'png' }).pipe(res);
});

module.exports = app;
