const dgram = require("dgram");
const cube  = require("../cube");

const PORT = Number(process.argv[2]) || 12345;

const server = dgram.createSocket("udp4");

server.on("listening", () => {
  console.log(`UDP Server opened on port`, PORT);
})

server.on("message", (msg) => {
  cube.rotate(msg.toString().trim());
});


server.on("error", (err) => {
  console.error("Server errored", err)
});


function exit () {
  cube.stop(() => {
    console.log("Closing serial connection...");
    server.close(() => {
      console.log("Exiting...");
      process.exit(0)
    });
  })
}

server.bind(PORT)


process.on("SIGINT", exit);
process.on("SIGTERM", exit);