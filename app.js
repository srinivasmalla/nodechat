var express = require('express'),
	app=express(),
	server = require('http').createServer(app),
	io=require('socket.io').listen(server);

var port = process.env.PORT || 3000;

server.listen(port);


app.get('/admin',function(req,res){
res.sendFile(__dirname + '/admin.html');
});


app.get('/',function(req,res){
res.sendFile(__dirname + '/score.html');
});


io.sockets.on('connection',function(socket){
socket.on('send message',function(data){
io.sockets.emit('new message',data);

});

});
