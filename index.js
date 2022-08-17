const express = require("express");
const app = express();

const server = require("http").createServer(app);

const io = require("socket.io")(server);

app.use(express.static(__dirname + "/public"));

io.on("connection", () => {
  console.log("Cliente conectado");
});

server.listen(8080, () => {
  console.log("Puerto: 8080");
});
