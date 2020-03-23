import { createCube } from './cube';
import { getDisorder } from './disorder';
import { Face } from './face';
import { Rotation, RotationFunctions } from './rotation';

describe('Disorder', () => {
  it('returns all 0s for initial state cube', () => {
    const cube = createCube();
    const disorder = getDisorder(cube);
    expect(disorder).toEqual({
      [Face.Front]: 0,
      [Face.Back]: 0,
      [Face.Left]: 0,
      [Face.Right]: 0,
      [Face.Up]: 0,
      [Face.Down]: 0,
    });
  });

  it('returns some disorder after one rotation', () => {
    const cube = createCube();
    RotationFunctions[Rotation.U](cube);
    const disorder = getDisorder(cube);
    expect(disorder).toEqual({
      [Face.Front]: 1,
      [Face.Back]: 1,
      [Face.Left]: 1,
      [Face.Right]: 1,
      [Face.Up]: 0,
      [Face.Down]: 0,
    });
  });

  it('returns more disorder after two rotations', () => {
    const cube = createCube();
    RotationFunctions[Rotation.F](cube);
    RotationFunctions[Rotation.R](cube);
    const disorder = getDisorder(cube);
    expect(disorder).toEqual({
      [Face.Front]: 2,
      [Face.Back]: 2,
      [Face.Left]: 1,
      [Face.Right]: 1,
      [Face.Up]: 2,
      [Face.Down]: 2,
    });
  });

  it('returns lots of disorder after lots of rotations', () => {
    const cube = createCube();
    RotationFunctions[Rotation.F](cube);
    RotationFunctions[Rotation.R](cube);
    RotationFunctions[Rotation.U](cube);
    RotationFunctions[Rotation.L](cube);
    RotationFunctions[Rotation.B](cube);
    RotationFunctions[Rotation.D](cube);
    const disorder = getDisorder(cube);
    expect(disorder).toEqual({
      [Face.Front]: 4,
      [Face.Back]: 4,
      [Face.Left]: 3,
      [Face.Right]: 4,
      [Face.Up]: 4,
      [Face.Down]: 5,
    });
  });
});
