const SerialPort = require("serialport");
const cube       = require("../cube");

const BAUD = 9600;

var port = new SerialPort("/dev/tty.usbmodem1411", {
  baudRate: BAUD,
  parser: SerialPort.parsers.readline("\n"),
});

port.on("open", () => {
  console.log(`Serial connection opened with baud`, BAUD);
})

port.on("data", (msg) => {
  cube.rotate(msg.toString().trim());
});


port.on("error", (err) => {
  console.error("Port errored", err)
});

