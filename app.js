var express = require('express'),
	app=express(),
	server = require('http').createServer(app),
	io=require('socket.io').listen(server);


server.listen(5000);


app.get('/',function(req,res){
res.sendFile(__dirname + '/index.html');
});


app.get('/receiver',function(req,res){
res.sendFile(__dirname + '/receiver.html');
});


io.sockets.on('connection',function(socket){
socket.on('send message',function(data){
io.sockets.emit('new message',data);

});

});
