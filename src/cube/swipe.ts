import { Cell, parseCell } from './cell';
import { Face, RingCellsByFace } from './face';
import { Rotation } from './rotation';

/** Detect if two touched cells represent a swipe on a side */
function isSwipe(c1: Cell, c2: Cell, face: Face): boolean {
  const ring = RingCellsByFace[face];
  for (let i = 0; i < ring.length; i++) {
    const r1 = ring[i];
    const r2 = ring[(i + 1) % ring.length];
    if (r1 === c1 && r2 === c2) {
      return true;
    }
  }
  return false;
}

/** Given two cells that have been touched, return the rotation this represents, if any */
export function getRotationFromSwipe(c1: Cell, c2: Cell): Rotation | null {
  const isCWSwipe = (side: Face) => isSwipe(c1, c2, side);
  const isCCWSwipe = (side: Face) => isSwipe(c2, c1, side);

  if (isCWSwipe(Face.Front)) {
    return Rotation.F;
  } else if (isCCWSwipe(Face.Front)) {
    return Rotation.f;
  } else if (isCWSwipe(Face.Back)) {
    return Rotation.B;
  } else if (isCCWSwipe(Face.Back)) {
    return Rotation.b;
  } else if (isCWSwipe(Face.Left)) {
    return Rotation.L;
  } else if (isCCWSwipe(Face.Left)) {
    return Rotation.l;
  } else if (isCWSwipe(Face.Right)) {
    return Rotation.R;
  } else if (isCCWSwipe(Face.Right)) {
    return Rotation.r;
  } else if (isCWSwipe(Face.Up)) {
    return Rotation.U;
  } else if (isCCWSwipe(Face.Up)) {
    return Rotation.u;
  } else if (isCWSwipe(Face.Down)) {
    return Rotation.D;
  } else if (isCCWSwipe(Face.Down)) {
    return Rotation.d;
  }

  return null;
}

const DEFAULT_SWIPE_INTERVAL = 500;

/**
 * Creates a swipe handler. Parses arbitrary input as touched cells. Detects if two cells
 * in a ring are pressed in short succession. If so, returns the corresponding rotation.
 */
export function createSwipeInputHandler(interval = DEFAULT_SWIPE_INTERVAL) {
  let prevCell: Cell | null = null;
  let prevCellTime = 0;

  return (input: string): Rotation | null => {
    const cellTime = Date.now();
    const cell = parseCell(input);
    if (cell) {
      if (cellTime - prevCellTime > interval) {
        // If enough time has passed since the previous input, start a new swipe.
        prevCell = cell;
        prevCellTime = cellTime;
      } else if (prevCell != null && cellTime - prevCellTime < interval) {
        // If we have recently touched another cell, then this could be a swipe.
        const rotation = getRotationFromSwipe(prevCell, cell);
        prevCell = null;
        prevCellTime = cellTime;
        return rotation || null;
      }
    }

    return null;
  };
}
