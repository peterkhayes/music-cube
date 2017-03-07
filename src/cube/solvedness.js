const _ = require("lodash");

const faces = {
  front: ["f", "fnw","fn","fne","fw","fe","fsw","fs","fse"],
  right: ["r", "rnw","rn","rne","rw","re","rsw","rs","rse"],
  back: ["b", "bnw","bn","bne","bw","be","bsw","bs","bse"],
  left: ["l", "lnw","ln","lne","lw","le","lsw","ls","lse"],
  up: ["u", "unw","un","une","uw","ue","usw","us","use"],
  down: ["d", "dnw","dn","dne","dw","de","dsw","ds","dse"],
};

module.exports = function (cube) {
  return _.mapValues(faces, (squares) => {
    return _(squares).map((s) => cube[s]).uniq().size();
  });
};
