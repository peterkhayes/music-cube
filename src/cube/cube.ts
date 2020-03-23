import { Cell } from './cell';
import { Color } from './color';
import { Faces, CellsByFace, ColorsByFace } from './face';

export type Cube = Record<Cell, Color>;

/** Generates the initial layout of the cube */
export function createCube(): Cube {
  const cube = {};
  for (const face of Faces) {
    for (const cell of CellsByFace[face]) {
      cube[cell] = ColorsByFace[face];
    }
  }
  return cube as Cube;
}

export function printCube(c: Cube) {
  /* eslint-disable prettier/prettier */
  const up = `
         ${c[Cell.UNW]}${c[Cell.UN]}${c[Cell.UNE]}
         ${c[Cell.UW]}${c[Cell.U]}${c[Cell.UE]}
         ${c[Cell.USW]}${c[Cell.US]}${c[Cell.USE]}
  `;

  const down = `
         ${c[Cell.DNW]}${c[Cell.DN]}${c[Cell.DNE]}
         ${c[Cell.DW]}${c[Cell.D]}${c[Cell.DE]}
         ${c[Cell.DSW]}${c[Cell.DS]}${c[Cell.DSE]}
  `;

  const middle = `
    ${c[Cell.LNW]}${c[Cell.LN]}${c[Cell.LNE]}  ${c[Cell.FNW]}${c[Cell.FN]}${c[Cell.FNE]}  ${c[Cell.RNW]}${c[Cell.RN]}${c[Cell.RNE]}  ${c[Cell.BNW]}${c[Cell.BN]}${c[Cell.BNE]}
    ${c[Cell.LW]}${c[Cell.L]}${c[Cell.LE]}  ${c[Cell.FW]}${c[Cell.F]}${c[Cell.FE]}  ${c[Cell.RW]}${c[Cell.R]}${c[Cell.RE]}  ${c[Cell.BW]}${c[Cell.B]}${c[Cell.BE]}
    ${c[Cell.LSW]}${c[Cell.LS]}${c[Cell.LSE]}  ${c[Cell.FSW]}${c[Cell.FS]}${c[Cell.FSE]}  ${c[Cell.RSW]}${c[Cell.RS]}${c[Cell.RSE]}  ${c[Cell.BSW]}${c[Cell.BS]}${c[Cell.BSE]}
  `;
  /* eslint-enable prettier/prettier */

  console.log(up, middle, down);
}
