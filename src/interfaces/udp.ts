import dgram from 'dgram';
import { createSwipeInputHandler } from '../cube/swipe';
import { getRandomRotation } from '../cube/rotation';
import { getPort, ensureCleanup } from './utils';
import { createCube, printCube } from '../cube/cube';
import { performRotation } from '../cube/rotation';
import { updateSong } from '../cube/song';

const port = getPort(12345);
const server = dgram.createSocket('udp4');
const cube = createCube();
const handleInput = createSwipeInputHandler();

server.on('listening', () => {
  console.log(`UDP server opened on port`, port);
});

server.on('message', (msg) => {
  const input = msg.toString().trim();
  const rotation = input === '?' ? getRandomRotation() : handleInput(input);

  if (rotation) {
    performRotation(cube, rotation);
    printCube(cube);
    updateSong(cube);
  }
});

server.on('error', (err) => {
  console.error('Server errored', err);
});

server.bind(port);
updateSong(cube);
printCube(cube);
ensureCleanup(() => new Promise((resolve) => server.close(resolve)));
