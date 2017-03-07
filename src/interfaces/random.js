const cube = require("../cube");

const INTERVAL = Number(process.argv[2]) || 4000;

setInterval(() => cube.rotate("?"), INTERVAL);