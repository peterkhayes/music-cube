import { Cell } from './cell';
import { Cube } from './cube';
import { Face, CellsByFace, RingCellsByFace, Faces } from './face';
import { createEnumParser, createRecord, enumValues } from './utils';

/** A cycle is a set of four squares that swap positions in a rotation */
type Cycle = [Cell, Cell, Cell, Cell];
type CyclesByFace = Record<Face, Array<Cycle>>;

/** Set of cycles when each face is rotated clockwise */
const ClockwiseCyclesByFace: CyclesByFace = createRecord(Faces, (face) => {
  const faceCells = CellsByFace[face];
  const ringCells = RingCellsByFace[face];

  return [
    // corners of the face
    [faceCells[1], faceCells[3], faceCells[5], faceCells[7]],
    // sides of the face
    [faceCells[2], faceCells[4], faceCells[6], faceCells[6]],

    // three ring cycles
    [ringCells[0], ringCells[3], ringCells[6], ringCells[9]],
    [ringCells[1], ringCells[4], ringCells[7], ringCells[10]],
    [ringCells[2], ringCells[5], ringCells[8], ringCells[11]],
  ];
});

/** Set of cycles when each face is rotated counter-clockwise */
const CounterClockwiseCyclesByFace: CyclesByFace = createRecord(Faces, (face) => {
  const cycles = ClockwiseCyclesByFace[face];
  return cycles.map((cycle) => [cycle[3], cycle[2], cycle[1], cycle[0]]);
});

/**
 * Following convention, each face has two rotations. We represent the rotation as the
 * first letter of the face that is rotated. Clockwise rotations are represented by
 * uppercase letters, and counterclockwise rotations are represented by lowercase letters.
 */
export enum Rotation {
  F = 'F',
  f = 'f',
  B = 'B',
  b = 'b',
  U = 'U',
  u = 'u',
  D = 'D',
  d = 'd',
  L = 'L',
  l = 'l',
  R = 'R',
  r = 'r',
}

export const Rotations = enumValues(Rotation);
export const parseRotation = createEnumParser(Rotation);
type RotationFn = (cube: Cube) => Cube;

export const RotationsByFace: Record<Face, [Rotation, Rotation]> = {
  [Face.Front]: [Rotation.F, Rotation.f],
  [Face.Back]: [Rotation.B, Rotation.b],
  [Face.Left]: [Rotation.L, Rotation.l],
  [Face.Right]: [Rotation.R, Rotation.r],
  [Face.Up]: [Rotation.U, Rotation.u],
  [Face.Down]: [Rotation.D, Rotation.d],
};

function buildRotationFunction(cycles: Array<Cycle>): RotationFn {
  return (cube: Cube) => {
    for (const cycle of cycles) {
      const tmp = cube[cycle[3]];
      cube[cycle[3]] = cube[cycle[2]];
      cube[cycle[2]] = cube[cycle[1]];
      cube[cycle[1]] = cube[cycle[0]];
      cube[cycle[0]] = tmp;
    }
    return cube;
  };
}

export const RotationFunctions: Record<Rotation, RotationFn> = {
  [Rotation.F]: buildRotationFunction(ClockwiseCyclesByFace[Face.Front]),
  [Rotation.f]: buildRotationFunction(CounterClockwiseCyclesByFace[Face.Front]),
  [Rotation.B]: buildRotationFunction(ClockwiseCyclesByFace[Face.Back]),
  [Rotation.b]: buildRotationFunction(CounterClockwiseCyclesByFace[Face.Back]),
  [Rotation.U]: buildRotationFunction(ClockwiseCyclesByFace[Face.Up]),
  [Rotation.u]: buildRotationFunction(CounterClockwiseCyclesByFace[Face.Up]),
  [Rotation.D]: buildRotationFunction(ClockwiseCyclesByFace[Face.Down]),
  [Rotation.d]: buildRotationFunction(CounterClockwiseCyclesByFace[Face.Down]),
  [Rotation.L]: buildRotationFunction(ClockwiseCyclesByFace[Face.Left]),
  [Rotation.l]: buildRotationFunction(CounterClockwiseCyclesByFace[Face.Left]),
  [Rotation.R]: buildRotationFunction(ClockwiseCyclesByFace[Face.Right]),
  [Rotation.r]: buildRotationFunction(CounterClockwiseCyclesByFace[Face.Right]),
};

export function performRotation(cube: Cube, rotation: Rotation) {
  RotationFunctions[rotation](cube);
}

export function getRandomRotation(): Rotation {
  return Rotations[Math.floor(Math.random() * Rotations.length)];
}
