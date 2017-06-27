const print                = require("./print");
const rotations            = require("./rotations");
const getRotationFromSwipe = require("./swipe");
const init                 = require("./init");
const makeSong             = require("./song");
const calculateSolvedness  = require("./solvedness");
const exec                 = require("child_process").execSync;

const IS_SILENT = process.env.SILENT;
const SWIPE_INTERVAL = 500;

const cube = init();
updateState();

function updateState () {
  print(cube);
  if (!IS_SILENT) {
    const scores = calculateSolvedness(cube);
    const song = makeSong(scores);
    exec(`echo "${song}" | sonic_pi`);
  }
}

let lastSwipePart;
let lastSwipePartTime = 0;
exports.handleInput = function(input) {
  const now = Date.now();

  // Validate input
  if (cube[input] == null) {
    console.log("Bad square:", input);
    return;
  }

  console.log("Received square:", input)

  // If swipe in progress, and not too long since last swipe...
  if (lastSwipePart != null && now - lastSwipePartTime < SWIPE_INTERVAL) {
    const rotation = getRotationFromSwipe(lastSwipePart, input);
    if (rotation) {
      rotation(cube);
      updateState();
    }
    lastSwipePart = null;
    lastSwipePartTime = now;

  // Otherwise, as long as we haven't just finished swiping...
  } else if (now - lastSwipePartTime > SWIPE_INTERVAL) {
    lastSwipePart = input;
    lastSwipePartTime = now;
  }
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
  if (!IS_SILENT) {
    exec("sonic_pi stop");
  }
  process.exit(0);
}


process.on("SIGINT", exit);
process.on("SIGTERM", exit);