const expect    = require("expect");
const rotations = require("../../src/cube/rotations");
const init      = require("../../src/cube/init");

describe("rotations", () => {

  const positiveCases = [
    ["f", "F"],
    ["B", "b"],
    ["L", "l"],
    ["r", "R"],
    ["u", "U"],
    ["D", "d"],
    ["f", "f", "f", "f"],
    ["b", "b", "b", "b"],
    ["l", "l", "l", "l"],
    ["r", "r", "r", "r"],
    ["u", "u", "u", "u"],
    ["d", "d", "d", "d"],
    ["F", "F", "F", "F"],
    ["B", "B", "B", "B"],
    ["L", "L", "L", "L"],
    ["R", "R", "R", "R"],
    ["U", "U", "U", "U"],
    ["D", "D", "D", "D"],
    ["f", "D", "L", "B", "b", "l", "d", "F"],
  ];

  positiveCases.forEach((rotationSteps) => {

    it(`cube is unchanged after a rotation of ${rotationSteps.join("|")}`, () => {
      const cube = init();
      rotationSteps.forEach((rotationName) => rotations[rotationName](cube));
      expect(cube).toEqual(init());
    });

  });

  const negativeCases = [
    ["b"],
    ["r", "R", "R"],
    ["f", "f", "f"],
    ["F", "R", "F", "R", "F", "R", "F", "R"],
  ];

  negativeCases.forEach((rotationSteps) => {

    it(`cube is changed after a rotation of ${rotationSteps.join("|")}`, () => {
      const cube = init();
      rotationSteps.forEach((rotationName) => rotations[rotationName](cube));
      expect(cube).toNotEqual(init());
    });

  });

});