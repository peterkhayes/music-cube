const cube = require("../cube");

const INTERVAL = Number(process.argv[2]) || 2000;

setInterval(() => cube.rotate("?"), INTERVAL);