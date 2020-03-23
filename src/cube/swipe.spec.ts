import expect from 'expect';
import { Face, Faces, RingCellsByFace } from './face';
import { Rotation } from './rotation';
import { getRotationFromSwipe } from './swipe';

const EXPECTED_CW_ROTATIONS: Record<Face, Rotation> = {
  [Face.Front]: Rotation.F,
  [Face.Back]: Rotation.B,
  [Face.Left]: Rotation.L,
  [Face.Right]: Rotation.R,
  [Face.Up]: Rotation.U,
  [Face.Down]: Rotation.D,
};

const EXPECTED_CCW_ROTATIONS: Record<Face, Rotation> = {
  [Face.Front]: Rotation.f,
  [Face.Back]: Rotation.b,
  [Face.Left]: Rotation.l,
  [Face.Right]: Rotation.r,
  [Face.Up]: Rotation.u,
  [Face.Down]: Rotation.d,
};

describe('Swipes', () => {
  for (const face of Faces) {
    const ring = RingCellsByFace[face];
    describe(`Face: ${face}`, () => {
      for (let i = 0; i < ring.length; i++) {
        const s1 = ring[i];
        const s2 = ring[(i + 1) % ring.length];
        const s3 = ring[(i + 2) % ring.length];

        it(`gives expected CW rotation for ${s1}, ${s2}`, () => {
          const result = getRotationFromSwipe(s1, s2);
          expect(result).toBe(EXPECTED_CW_ROTATIONS[face]);
        });

        it(`gives expected CCW rotation for ${s2}, ${s1}`, () => {
          const result = getRotationFromSwipe(s2, s1);
          expect(result).toBe(EXPECTED_CCW_ROTATIONS[face]);
        });

        it(`gives expected no rotation for ${s1}, ${s3}`, () => {
          const result = getRotationFromSwipe(s1, s3);
          expect(result).toBe(null);
        });

        it(`gives expected no rotation for ${s3}, ${s1}`, () => {
          const result = getRotationFromSwipe(s1, s3);
          expect(result).toBe(null);
        });
      }
    });
  }
});
