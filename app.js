var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var path = require("path");
var favicon = require('serve-favicon');

app.use(express.static(path.join(__dirname, 'public')));

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.get('/',function(req, res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/exposition',function(req, res){
  res.sendFile(path.join(__dirname+'/public/exposition.html'));
});

app.get('/test',function(req, res){
  res.sendFile(path.join(__dirname+'/public/test_page.html'));
});


var listener = server.listen(process.env.PORT || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});
