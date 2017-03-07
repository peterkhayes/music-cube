function reverse (cycles) {
  return cycles.map((cycle) => {
    return cycle.slice().reverse();
  });
}

const F = [
  ["fnw", "fne", "fse", "fsw"],
  ["fn", "fe", "fs", "fw"],
  ["usw", "rnw", "dne", "lse"],
  ["us", "rw", "dn", "le"],
  ["use", "rsw", "dnw", "lne"],
];
const f = reverse(F);

const B = [
  ["bnw", "bne", "bse", "bsw"],
  ["bn", "be", "bs", "bw"],
  ["une", "lnw", "dsw", "rse"],
  ["un", "lw", "ds", "re"],
  ["unw", "lsw", "dse", "rne"],
];
const b = reverse(B);

const U = [
  ["unw", "une", "use", "usw"],
  ["un", "ue", "us", "uw"],
  ["fnw", "lnw", "bnw", "rnw"],
  ["fn", "ln", "bn", "rn"],
  ["fne", "lne", "bne", "rne"],
];
const u = reverse(U);

const D = [
  ["dnw", "dne", "dse", "dsw"],
  ["dn", "de", "ds", "dw"],
  ["fsw", "lsw", "bsw", "rsw"],
  ["fs", "ls", "bs", "rs"],
  ["fse", "lse", "bse", "rse"],
];
const d = reverse(D);

const L = [
  ["lnw", "lne", "lse", "lsw"],
  ["ln", "le", "ls", "lw"],
  ["unw", "fnw", "dnw", "bse"],
  ["uw", "fw", "dw", "be"],
  ["usw", "fsw", "dsw", "bne"],
];
const l = reverse(L);

const R = [
  ["rnw", "rne", "rse", "rsw"],
  ["rn", "re", "rs", "rw"],
  ["use", "bnw", "dse", "fse"],
  ["ue", "bw", "de", "fe"],
  ["une", "bsw", "dne", "fne"],
];
const r = reverse(R);

function makeRotationFn (rotation) {
  return function(cube) {
    rotation.forEach((cycle) => {
      const tmp = cube[cycle[3]];
      cube[cycle[3]] = cube[cycle[2]];
      cube[cycle[2]] = cube[cycle[1]];
      cube[cycle[1]] = cube[cycle[0]];
      cube[cycle[0]] = tmp;
    });
  };
}

const baseRotations = {
  F: makeRotationFn(F),
  f: makeRotationFn(f),
  B: makeRotationFn(B),
  b: makeRotationFn(b),
  U: makeRotationFn(U),
  u: makeRotationFn(u),
  D: makeRotationFn(D),
  d: makeRotationFn(d),
  L: makeRotationFn(L),
  l: makeRotationFn(l),
  R: makeRotationFn(R),
  r: makeRotationFn(r),
};

module.exports = Object.assign({}, baseRotations, {

  "?" (cube) {
    const keys = Object.keys(baseRotations);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return baseRotations[randomKey](cube);
  },

});