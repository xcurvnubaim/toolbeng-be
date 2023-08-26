const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.FE_BASE_URL,
  })
);

const server = app.listen(3000, () => {
  console.log("Listening http://localhost:5000");
});

const socketIo = require("socket.io");
const io = socketIo(server, {
  cors: {
    origin: process.env.FE_BASE_URL,
    methods: ["GET", "POST"],
    transports: ["websocket", "polling"],
    credentials: true,
  },
  allowEIO3: true
});

io.on("connection", (socket) => {
  // console.log("A user connected");

  socket.on("send message", (data) => {
    // console.log(data)
    socket.to(data.room).emit("chat message", data.msg);
  });

  socket.on("join-room", (room) => {
    // console.log(room);
    socket.join(room);
  });

  // socket.on("disconnect", () => {
  //   console.log("User disconnected");
  // });
});

const routes = require("./routes");
app.use("/", routes);
