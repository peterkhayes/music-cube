function whitespace (len) {
  return Array(len).fill(" ").join("");
}

module.exports = function(c, offset=1) {
  const up = `
    ${whitespace(offset * 5)}${c.unw}${c.un}${c.une}
    ${whitespace(offset * 5)}${c.uw }${  4 }${ c.ue}
    ${whitespace(offset * 5)}${c.usw}${c.us}${c.use}
  `;

  const down = `
    ${whitespace(offset * 5)}${c.dnw}${c.dn}${c.dne}
    ${whitespace(offset * 5)}${c.dw }${  5 }${ c.de}
    ${whitespace(offset * 5)}${c.dsw}${c.ds}${c.dse}
  `;

  const middle = `
    ${c.lnw}${c.ln}${c.lne}  ${c.fnw}${c.fn}${c.fne}  ${c.rnw}${c.rn}${c.rne}  ${c.bnw}${c.bn}${c.bne}
    ${c.lw }${  3 }${ c.le}  ${c.fw }${  0 }${ c.fe}  ${c.rw }${  1 }${ c.re}  ${c.bw }${  2 }${ c.be}
    ${c.lsw}${c.ls}${c.lse}  ${c.fsw}${c.fs}${c.fse}  ${c.rsw}${c.rs}${c.rse}  ${c.bsw}${c.bs}${c.bse}
  `;

  console.log(up, middle, down);
};