const geometry = require("./geometry");

function getCycles (side) {
  const cycles = [];

  // corners and sides of face
  cycles.push(side.face.slice(1).filter((_, i) => i % 2 === 0));
  cycles.push(side.face.slice(1).filter((_, i) => i % 2 === 1));

  // three adjacent cycles
  cycles.push(side.ring.filter((_, i) => i % 3 === 0));
  cycles.push(side.ring.filter((_, i) => i % 3 === 1));
  cycles.push(side.ring.filter((_, i) => i % 3 === 2));

  return cycles;
}

function makeRotationFn (cycles) {
  return function(cube) {
    cycles.forEach((cycle) => {
      const tmp = cube[cycle[3]];
      cube[cycle[3]] = cube[cycle[2]];
      cube[cycle[2]] = cube[cycle[1]];
      cube[cycle[1]] = cube[cycle[0]];
      cube[cycle[0]] = tmp;
    });
  };
}

function makeClockwiseRotationFn (side) {
  const cycles = getCycles(side);
  return makeRotationFn(cycles);
}

function makeCounterclockwiseRotationFn (side) {
  const cycles = getCycles(side);
  const reversedCycles = cycles.map((cycle) => cycle.slice().reverse());
  return makeRotationFn(reversedCycles);
}

const baseRotations = {
  F: makeClockwiseRotationFn(geometry.frontSide),
  f: makeCounterclockwiseRotationFn(geometry.frontSide),

  B: makeClockwiseRotationFn(geometry.backSide),
  b: makeCounterclockwiseRotationFn(geometry.backSide),

  U: makeClockwiseRotationFn(geometry.upSide),
  u: makeCounterclockwiseRotationFn(geometry.upSide),

  D: makeClockwiseRotationFn(geometry.downSide),
  d: makeCounterclockwiseRotationFn(geometry.downSide),

  L: makeClockwiseRotationFn(geometry.leftSide),
  l: makeCounterclockwiseRotationFn(geometry.leftSide),

  R: makeClockwiseRotationFn(geometry.rightSide),
  r: makeCounterclockwiseRotationFn(geometry.rightSide),
};

module.exports = Object.assign({}, baseRotations, {

  "?" (cube) {
    const keys = Object.keys(baseRotations);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return baseRotations[randomKey](cube);
  },

});

