const express = require("express");
const app = express();

const server = require("http").createServer(app);

const io = require("socket.io")(server);

app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  socket.on("mensaje-to-server", (data) => {
    //TODO: Duvan, nota: se cambia socket por io, ya que io es para enviar a todos los usuarios
    io.emit("mensaje-from-server", data);
  });
  // socket.on("mensaje-cliente", (data) => {
  //   console.log(data);
  // });
  // socket.emit("mensaje-bienvenida", {
  //   msg: "Bienvenido",
  //   fecha: new Date(),
  // });
});

server.listen(8080, () => {
  console.log("Puerto: 8080");
});
