const geometry = require("./geometry");
const rotations = require("./rotations");

function isSwipe (s1, s2, side) {
  const ring = side.ring;
  for (let i = 0; i < ring.length; i++) {
    const r1 = ring[i];
    const r2 = ring[(i + 1) % ring.length];
    if (r1 === s1 && r2 === s2) {
      return true;
    }
  }
  return false;
}


// given two squares that have been swiped, return the correct rotation fn.
module.exports = function getRotationFromSwipe (s1, s2) {
  const isCWSwipe = isSwipe.bind(null, s1, s2);
  const isCCWSwipe = isSwipe.bind(null, s2, s1);

  if (isCWSwipe(geometry.frontSide)) {
    return rotations.F;
  }

  if (isCCWSwipe(geometry.frontSide)) {
    return rotations.f;
  }

  if (isCWSwipe(geometry.backSide)) {
    return rotations.B;
  }

  if (isCCWSwipe(geometry.backSide)) {
    return rotations.b;
  }

  if (isCWSwipe(geometry.leftSide)) {
    return rotations.L;
  }

  if (isCCWSwipe(geometry.leftSide)) {
    return rotations.l;
  }

  if (isCWSwipe(geometry.rightSide)) {
    return rotations.R;
  }

  if (isCCWSwipe(geometry.rightSide)) {
    return rotations.r;
  }

  if (isCWSwipe(geometry.upSide)) {
    return rotations.U;
  }

  if (isCCWSwipe(geometry.upSide)) {
    return rotations.u;
  }

  if (isCWSwipe(geometry.downSide)) {
    return rotations.D;
  }

  if (isCCWSwipe(geometry.downSide)) {
    return rotations.d;
  }

  return null;
}



