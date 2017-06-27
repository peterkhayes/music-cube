const _        = require("lodash");
const geometry = require("./geometry");

module.exports = function calculateSolvedness (cube) {
  return _.mapValues(geometry, ({face}) => {
    return _(face).map((s) => cube[s]).uniq().size();
  });
};
