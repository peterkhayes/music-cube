const print               = require("./print");
const rotations           = require("./rotations");
const init                = require("./init");
const makeSong            = require("./song");
const calculateSolvedness = require("./solvedness");
const exec                = require("child_process").execSync;

const cube = init();
updateState();

function updateState () {
  print(cube);
  const scores = calculateSolvedness(cube);
  const song = makeSong(scores);
  exec(`echo "${song}" | sonic_pi`);
}

exports.rotate = function(type) {
  const fn = rotations[type];
  if (fn) {
    console.log("Received command:", type)
    fn(cube);
    updateState();
  } else {
    console.log("Bad command:", type);
  }
}

function exit () {
  console.log("Stopping Sonic Pi...");
  exec("sonic_pi stop");
  process.exit(0);
}


process.on("SIGINT", exit);
process.on("SIGTERM", exit);