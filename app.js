var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
  console.log('a user connected');

socket.on('user', function(data){
  io.emit('user', data);
  console.log('name: ' + data);
});

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });

  socket.on('disconnect', function(socket){
    console.log('a user disconnected');

  });
});
