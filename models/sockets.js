class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      socket.on("mensaje-to-server", (data) => {
        this.io.emit("mensaje-from-server", data);
      });
      // socket.on("mensaje-cliente", (data) => {
      //   console.log(data);
      // });
      // socket.emit("mensaje-bienvenida", {
      //   msg: "Bienvenido",
      //   fecha: new Date(),
      // });
    });
  }
}

module.exports = Sockets;
