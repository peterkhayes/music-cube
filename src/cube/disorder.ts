import { Face, Faces, CellsByFace } from './face';
import { Color } from './color';
import { Cube } from './cube';
import { createRecord } from './utils';

export type Disorder = Record<Face, number>;

export function getDisorder(cube: Cube): Disorder {
  return createRecord(Faces, (face) => {
    const cells = CellsByFace[face];
    const colors = new Set<Color>();
    for (const cell of cells) {
      colors.add(cube[cell]);
    }
    return colors.size - 1;
  });
}
