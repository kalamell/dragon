var express = require("express");
var app     = express();
var path    = require("path");

var io = require('socket.io').listen(app.listen(8888));

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

app.get('/red',function(req,res){
  res.sendFile(path.join(__dirname+'/client/red.html'));
});


// สำหรับ คนเล่น
app.get('/mobile', function(req, res) {
	res.sendFile(path.join(__dirname + '/client/mobile.html'));
});


// สำหรับ control หลังบ้าน
app.get('/control', function(req, res) {
	res.sendFile(path.join(__dirname + '/client/control.html'));
});


var totalUsers = {
  left: 0,
  right: 0,
}



io.sockets.on('connection', function (socket) {

	console.log('connection');

	socket.on('reset', function() {
		totalUsers.left = 0;
		totalUsers.right= 0;
		socket.emit('totalUsers', totalUsers);
	    socket.broadcast.emit('totalUsers', totalUsers);
	});

	socket.on('shake', function(side, score) {
	    if (side=='left') {
	        totalUsers.left = parseInt(totalUsers.left) + 0.1;
	    }
	     if (side=='right') {
	      totalUsers.right = parseInt(totalUsers.right) + 0.1;
	    }
		socket.emit('totalUsers', totalUsers);
	    socket.broadcast.emit('totalUsers', totalUsers);

	    console.log(totalUsers); 
	});

});

console.log("Running at Port 8888");