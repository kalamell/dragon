var express = require("express");
var app     = express();
var path    = require("path");
app.use(express.static(__dirname + '/client'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/client/index.html'));
  //__dirname : It will resolve to your project folder.
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

app.listen(3000);

console.log("Running at Port 3000");