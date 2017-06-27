const expect               = require("expect");
const geometry             = require("../../src/cube/geometry");
const rotations            = require("../../src/cube/rotations");
const getRotationFromSwipe = require("../../src/cube/swipe");

const EXPECTED_CW_ROTATIONS = {
  frontSide: rotations.F,
  backSide: rotations.B,
  leftSide: rotations.L,
  rightSide: rotations.R,
  upSide: rotations.U,
  downSide: rotations.D,
};

const EXPECTED_CCW_ROTATIONS = {
  frontSide: rotations.f,
  backSide: rotations.b,
  leftSide: rotations.l,
  rightSide: rotations.r,
  upSide: rotations.u,
  downSide: rotations.d,
};

describe("getRotationFromSwipe", () => {

  Object.keys(geometry).forEach((sideName) => {
    const {ring} = geometry[sideName];

    describe(`Side: ${sideName}`, () => {

      for (let i = 0; i < ring.length; i++) {
        const s1 = ring[i];
        const s2 = ring[(i + 1) % ring.length];
        const s3 = ring[(i + 2) % ring.length];

        it(`gives expected CW rotation for ${s1}, ${s2}`, () => {
          const result = getRotationFromSwipe(s1, s2);
          expect(result).toBe(EXPECTED_CW_ROTATIONS[sideName]);
        });

        it(`gives expected CCW rotation for ${s1}, ${s2}`, () => {
          const result = getRotationFromSwipe(s2, s1);
          expect(result).toBe(EXPECTED_CCW_ROTATIONS[sideName]);
        });

        it(`gives expected no rotation for ${s1}, ${s3}`, () => {
          const result = getRotationFromSwipe(s1, s3);
          expect(result).toBe(null);
        });
      }

    });

  });

});