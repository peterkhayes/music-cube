const _        = require("lodash");
const geometry = require("./geometry");

module.exports = () => {
  const state = {};
  _.each(geometry, ({face, color}) => {
    face.forEach((square) => state[square] = color);
  });
  return state;
};