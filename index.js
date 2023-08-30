const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

const server = app.listen(3000, () => {
  console.log("Listening http://localhost:3000");
});

const socketIo = require("socket.io");
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
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
