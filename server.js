var express = require("express");
var app     = express();
var path    = require("path");
app.use(express.static(__dirname + '/client'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/client/index.html'));
});

app.get('/play',function(req,res){
  res.sendFile(path.join(__dirname+'/client/play.html'));
});

app.get('/blue',function(req,res){
  res.sendFile(path.join(__dirname+'/client/blue.html'));
});

app.get('/blue',function(req,res){
  res.sendFile(path.join(__dirname+'/client/red.html'));
});


// สำหรับ คนเล่น
app.get('/mobile', function(req, res) {
	res.sendFile(path.join(__dirname) + '/client/mobile.html'));
});


// สำหรับ control หลังบ้าน
app.get('/control', function(req, res) {
	res.sendFile(path.join(__dirname) + '/client/control.html'));
});

app.listen(3000);

console.log("Running at Port 3000");