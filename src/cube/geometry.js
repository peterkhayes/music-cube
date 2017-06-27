/*
  ORIENTATION:
  front, back, left, and right all face up.
  the "top" of up is adjacent to back
  the "top" of down is adjacent to front

  FACE:
  contains the squares on this side

  RING:
  contains the squares adjacent to this side

  COLOR:
  solved color for this side

  NOTE:
  The order should not be messed with. Apart from the center square,
  it should go in traversal order
*/

exports.frontSide = {
  face: ["f", "fnw", "fn", "fne", "fe", "fse", "fs", "fsw", "fw"],
  ring: ["usw", "us", "use", "rnw", "rw", "rsw", "dne", "dn", "dnw", "lse", "le", "lne"],
  color: 0,
};

exports.backSide = {
  face: ["b", "bnw", "bn", "bne", "be", "bse", "bs", "bsw", "bw"],
  ring: ["une", "un", "unw", "lnw", "lw", "lsw", "dsw", "ds", "dse", "rse", "re", "rne"],
  color: 1,
};

exports.leftSide = {
  face: ["l", "lnw", "ln", "lne", "le", "lse", "ls", "lsw", "lw"],
  ring: ["unw", "uw", "usw", "fnw", "fw", "fsw", "dnw", "dw", "dsw", "bse", "be", "bne"],
  color: 2,
};

exports.rightSide = {
  face: ["r", "rnw", "rn", "rne", "re", "rse", "rs", "rsw", "rw"],
  ring: ["use", "ue", "une", "bnw", "bw", "bsw", "dse", "de", "dne", "fse", "fe", "fne"],
  color: 3,
};

exports.upSide = {
  face: ["u", "unw", "un", "une", "ue", "use", "us", "usw", "uw"],
  ring: ["fnw", "fn", "fne", "lnw", "ln", "lne", "bnw", "bn", "bne", "rnw", "rn", "rne"],
  color: 4,
};

exports.downSide = {
  face: ["d", "dnw", "dn", "dne", "de", "dse", "ds", "dsw", "dw"],
  ring: ["fsw", "fs", "fse", "lsw", "ls", "lse", "bsw", "bs", "bse", "rsw", "rs", "rse"],
  color: 5,
};