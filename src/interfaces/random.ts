import { getRandomRotation } from '../cube/rotation';
import { ensureCleanup } from './utils';
import { createCube, printCube } from '../cube/cube';
import { performRotation } from '../cube/rotation';
import { updateSong } from '../cube/song';

const INTERVAL = Number(process.argv[2]) || 8000;

const cube = createCube();

setInterval(() => {
  const rotation = getRandomRotation();
  performRotation(cube, rotation);
  printCube(cube);
  updateSong(cube);
}, INTERVAL);

updateSong(cube);
printCube(cube);
ensureCleanup();
