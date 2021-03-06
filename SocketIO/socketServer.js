const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "../public/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.conn.id);
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.conn.id);
  });
  socket.on("Oh yea", () => {
    console.log("Fuck yea!")
  })
});


server.listen(3001, () => {
  console.log("listening on *:3001");
});
