function reverse (cycles) {
  return cycles.map((cycle) => {
    return cycle.slice().reverse();
  });
}

const frontCW = [
  ["fnw", "fne", "fse", "fsw"],
  ["fn", "fe", "fs", "fw"],
  ["usw", "rnw", "dne", "lse"],
  ["us", "rw", "dn", "le"],
  ["use", "rsw", "dnw", "lne"],
];
const frontCCW = reverse(frontCW);

const backCW = [
  ["bnw", "bne", "bse", "bsw"],
  ["bn", "be", "bs", "bw"],
  ["une", "lnw", "dsw", "rse"],
  ["un", "lw", "ds", "re"],
  ["unw", "lsw", "dse", "rne"],
];
const backCCW = reverse(backCW);

const upCW = [
  ["unw", "une", "use", "usw"],
  ["un", "ue", "us", "uw"],
  ["fnw", "lnw", "bnw", "rnw"],
  ["fn", "ln", "bn", "rn"],
  ["fne", "lne", "bne", "rne"],
];
const upCCW = reverse(upCW);

const downCW = [
  ["dnw", "dne", "dse", "dsw"],
  ["dn", "de", "ds", "dw"],
  ["fsw", "lsw", "bsw", "rsw"],
  ["fs", "ls", "bs", "rs"],
  ["fse", "lse", "bse", "rse"],
];
const downCCW = reverse(downCW);

const leftCW = [
  ["lnw", "lne", "lse", "lsw"],
  ["ln", "le", "ls", "lw"],
  ["unw", "fnw", "dnw", "bse"],
  ["uw", "fw", "dw", "be"],
  ["usw", "fsw", "dsw", "bne"],
];
const leftCCW = reverse(leftCW);

const rightCW = [
  ["rnw", "rne", "rse", "rsw"],
  ["rn", "re", "rs", "rw"],
  ["use", "bnw", "dse", "fse"],
  ["ue", "bw", "de", "fe"],
  ["une", "bsw", "dne", "fne"],
];
const rightCCW = reverse(rightCW);

function makeRotationFn (rotation) {
  return function(cube) {
    const copy = JSON.parse(JSON.stringify(cube));
    rotation.forEach((cycle) => {
      copy[cycle[1]] = cube[cycle[0]];
      copy[cycle[2]] = cube[cycle[1]];
      copy[cycle[3]] = cube[cycle[2]];
      copy[cycle[0]] = cube[cycle[3]];
    });
    return copy;
  };
}

module.exports = {
  frontCW: makeRotationFn(frontCW),
  frontCCW: makeRotationFn(frontCCW),
  backCW: makeRotationFn(backCW),
  backCCW: makeRotationFn(backCCW),
  upCW: makeRotationFn(upCW),
  upCCW: makeRotationFn(upCCW),
  downCW: makeRotationFn(downCW),
  downCCW: makeRotationFn(downCCW),
  leftCW: makeRotationFn(leftCW),
  leftCCW: makeRotationFn(leftCCW),
  rightCW: makeRotationFn(rightCW),
  rightCC: makeRotationFn(rightCCW)
};