/*
  ORIENTATION:
  front, back, left, and right all face up.
  the "top" of up is adjacent to back
  the "top" of down is adjacent to front
*/

module.exports = () => ({
  fnw: 0,
  fn: 0,
  fne: 0,
  fw: 0,
  f: 0,
  fe: 0,
  fsw: 0,
  fs: 0,
  fse: 0,

  rnw: 1,
  rn: 1,
  rne: 1,
  rw: 1,
  r: 1,
  re: 1,
  rsw: 1,
  rs: 1,
  rse: 1,

  bnw: 2,
  bn: 2,
  bne: 2,
  bw: 2,
  b: 2,
  be: 2,
  bsw: 2,
  bs: 2,
  bse: 2,

  lnw: 3,
  ln: 3,
  lne: 3,
  lw: 3,
  l: 3,
  le: 3,
  lsw: 3,
  ls: 3,
  lse: 3,

  unw: 4,
  un: 4,
  une: 4,
  uw: 4,
  u: 4,
  ue: 4,
  usw: 4,
  us: 4,
  use: 4,

  dnw: 5,
  dn: 5,
  dne: 5,
  dw: 5,
  d: 5,
  de: 5,
  dsw: 5,
  ds: 5,
  dse: 5,
});