const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('a user connected');

  // Handle username change
  socket.on('change_username', (data) => {
    socket.username = data.username;
  });

  // Handle new messages
  socket.on('new_message', (data) => {
    io.sockets.emit('new_message', { message: data.message, username: socket.username });
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
