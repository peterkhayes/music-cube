import { enumValues } from './utils';

/** There are six cell colors on the cube */
export enum Color {
  White = 'White',
  Yellow = 'Yellow',
  Orange = 'Orange',
  Blue = 'Blue',
  Red = 'Red',
  Green = 'Green',
}

export const Colors = enumValues(Color);

export const HexCodesByColor: Record<Color, string> = {
  [Color.White]: '#FFF',
  [Color.Yellow]: '#FF0',
  [Color.Orange]: '#F80',
  [Color.Blue]: '#00F',
  [Color.Red]: '#F00',
  [Color.Green]: '#0F0',
};
