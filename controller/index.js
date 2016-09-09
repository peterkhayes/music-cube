const print     = require("./print");
const rotations = require("./rotations");

let cube = require("./initial");
print(cube);
cube = rotations.rightCW(cube);
cube = rotations.leftCCW(cube);
cube = rotations.upCCW(cube);
cube = rotations.frontCCW(cube);
print(cube);
