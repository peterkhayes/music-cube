import { Rotation, RotationFunctions } from './rotation';
import { createCube } from './cube';

describe('Rotations', () => {
  const positiveCases: Array<Array<Rotation>> = [
    [Rotation.f, Rotation.F],
    [Rotation.B, Rotation.b],
    [Rotation.L, Rotation.l],
    [Rotation.r, Rotation.R],
    [Rotation.u, Rotation.U],
    [Rotation.D, Rotation.d],
    [Rotation.f, Rotation.f, Rotation.f, Rotation.f],
    [Rotation.b, Rotation.b, Rotation.b, Rotation.b],
    [Rotation.l, Rotation.l, Rotation.l, Rotation.l],
    [Rotation.r, Rotation.r, Rotation.r, Rotation.r],
    [Rotation.u, Rotation.u, Rotation.u, Rotation.u],
    [Rotation.d, Rotation.d, Rotation.d, Rotation.d],
    [Rotation.F, Rotation.F, Rotation.F, Rotation.F],
    [Rotation.B, Rotation.B, Rotation.B, Rotation.B],
    [Rotation.L, Rotation.L, Rotation.L, Rotation.L],
    [Rotation.R, Rotation.R, Rotation.R, Rotation.R],
    [Rotation.U, Rotation.U, Rotation.U, Rotation.U],
    [Rotation.D, Rotation.D, Rotation.D, Rotation.D],
    [
      Rotation.f,
      Rotation.D,
      Rotation.L,
      Rotation.B,
      Rotation.b,
      Rotation.l,
      Rotation.d,
      Rotation.F,
    ],
  ];

  for (const rotations of positiveCases) {
    it(`cube is unchanged after a rotation of ${rotations.join('|')}`, () => {
      const cube = createCube();
      for (const rotation of rotations) {
        RotationFunctions[rotation](cube);
      }
      expect(cube).toEqual(createCube());
    });
  }
  const negativeCases: Array<Array<Rotation>> = [
    [Rotation.b],
    [Rotation.r, Rotation.R, Rotation.R],
    [Rotation.f, Rotation.f, Rotation.f],
    [
      Rotation.F,
      Rotation.R,
      Rotation.F,
      Rotation.R,
      Rotation.F,
      Rotation.R,
      Rotation.F,
      Rotation.R,
    ],
  ];

  for (const rotations of negativeCases) {
    it(`cube is changed after a rotation of ${rotations.join('|')}`, () => {
      const cube = createCube();
      for (const rotation of rotations) {
        RotationFunctions[rotation](cube);
      }
      expect(cube).not.toEqual(createCube());
    });
  }
});
