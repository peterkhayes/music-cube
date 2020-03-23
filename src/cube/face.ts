import { Cell } from './cell';
import { Color } from './color';
import { enumValues } from './utils';

/*
  General notes on orientation:
    * Front, Back, Left, and Right all face up.
    * The "top" of Up is adjacent to back
    * The "top" of Down is adjacent to front
*/

type FaceCells = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];
type RingCells = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];

/** The cube has 6 faces. */
export enum Face {
  Front = 'Front',
  Back = 'Back',
  Left = 'Left',
  Right = 'Right',
  Up = 'Up',
  Down = 'Down',
}

export const Faces = enumValues(Face);

/**
 * Each face has 9 cells. The order here is important. The center cell, which never
 * moves, is first, followed by the 8 edge cells, starting from the northwest.
 */
export const CellsByFace: Record<Face, FaceCells> = {
  [Face.Front]: [
    Cell.F,
    Cell.FNW,
    Cell.FN,
    Cell.FNE,
    Cell.FE,
    Cell.FSE,
    Cell.FS,
    Cell.FSW,
    Cell.FW,
  ],
  [Face.Back]: [
    Cell.B,
    Cell.BNW,
    Cell.BN,
    Cell.BNE,
    Cell.BE,
    Cell.BSE,
    Cell.BS,
    Cell.BSW,
    Cell.BW,
  ],
  [Face.Left]: [
    Cell.L,
    Cell.LNW,
    Cell.LN,
    Cell.LNE,
    Cell.LE,
    Cell.LSE,
    Cell.LS,
    Cell.LSW,
    Cell.LW,
  ],
  [Face.Right]: [
    Cell.R,
    Cell.RNW,
    Cell.RN,
    Cell.RNE,
    Cell.RE,
    Cell.RSE,
    Cell.RS,
    Cell.RSW,
    Cell.RW,
  ],
  [Face.Up]: [
    Cell.U,
    Cell.UNW,
    Cell.UN,
    Cell.UNE,
    Cell.UE,
    Cell.USE,
    Cell.US,
    Cell.USW,
    Cell.UW,
  ],
  [Face.Down]: [
    Cell.D,
    Cell.DNW,
    Cell.DN,
    Cell.DNE,
    Cell.DE,
    Cell.DSE,
    Cell.DS,
    Cell.DSW,
    Cell.DW,
  ],
};

/**
 * Each face is bordered by 12 cells on the 4 surrounding faces. The order here is important.
 * In the default orientation, we start with the left cell of the face above the input face,
 * and move in traversal order.
 */
export const RingCellsByFace: Record<Face, RingCells> = {
  [Face.Front]: [
    Cell.USW,
    Cell.US,
    Cell.USE,
    Cell.RNW,
    Cell.RW,
    Cell.RSW,
    Cell.DNE,
    Cell.DN,
    Cell.DNW,
    Cell.LSE,
    Cell.LE,
    Cell.LNE,
  ],
  [Face.Back]: [
    Cell.UNE,
    Cell.UN,
    Cell.UNW,
    Cell.LNW,
    Cell.LW,
    Cell.LSW,
    Cell.DSW,
    Cell.DS,
    Cell.DSE,
    Cell.RSE,
    Cell.RE,
    Cell.RNE,
  ],
  [Face.Left]: [
    Cell.UNW,
    Cell.UW,
    Cell.USW,
    Cell.FNW,
    Cell.FW,
    Cell.FSW,
    Cell.DNW,
    Cell.DW,
    Cell.DSW,
    Cell.BSE,
    Cell.BE,
    Cell.BNE,
  ],
  [Face.Right]: [
    Cell.USE,
    Cell.UE,
    Cell.UNE,
    Cell.BNW,
    Cell.BW,
    Cell.BSW,
    Cell.DSE,
    Cell.DE,
    Cell.DNE,
    Cell.FSE,
    Cell.FE,
    Cell.FNE,
  ],
  [Face.Up]: [
    Cell.FNW,
    Cell.FN,
    Cell.FNE,
    Cell.LNW,
    Cell.LN,
    Cell.LNE,
    Cell.BNW,
    Cell.BN,
    Cell.BNE,
    Cell.RNW,
    Cell.RN,
    Cell.RNE,
  ],
  [Face.Down]: [
    Cell.FSW,
    Cell.FS,
    Cell.FSE,
    Cell.LSW,
    Cell.LS,
    Cell.LSE,
    Cell.BSW,
    Cell.BS,
    Cell.BSE,
    Cell.RSW,
    Cell.RS,
    Cell.RSE,
  ],
};

export const ColorsByFace: Record<Face, Color> = {
  [Face.Front]: Color.White,
  [Face.Back]: Color.Yellow,
  [Face.Left]: Color.Orange,
  [Face.Right]: Color.Blue,
  [Face.Up]: Color.Red,
  [Face.Down]: Color.Green,
};
