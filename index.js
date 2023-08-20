const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config()

app.use(express.json());
app.use(cors({
    origin : "*"
}))

const server = app.listen(5000, () => {
    console.log("Listening http://localhost:5000");
});

const socketIo = require('socket.io');
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (message) => {
    io.emit('chat message', message); 
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const routes = require('./routes');
app.use('/', routes);
