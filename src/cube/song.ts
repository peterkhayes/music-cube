import { Cube } from './cube';
import { Faces, Face } from './face';
import { getDisorder, Disorder } from './disorder';
import { execSync as exec } from 'child_process';
import path from 'path';

const SAMPLE_PATH = path.join(__dirname, '../songs/demo');
const SAMPLE_SLICE_SIZE = 0.125; // What percent of the full WAV each clip is
const SUBDIVISIONS = 4; // How many subdivisions per clip
const SUBDIVISION_SIZE = SAMPLE_SLICE_SIZE / SUBDIVISIONS;

function playSample(name: Face, sampleNum: number): string {
  const filename = name.toLowerCase();
  return `
    live_loop :${filename}_loop do
      beat = (Array (0..${SUBDIVISIONS - 1})).ring.tick
      start = ${SAMPLE_SLICE_SIZE} * ${sampleNum} + ${SUBDIVISION_SIZE} * beat
      finish = start + ${SUBDIVISION_SIZE}
      sample "${SAMPLE_PATH}", "${filename}", start: start, finish: finish
      sleep sample_duration "${SAMPLE_PATH}", "${filename}", start: start, finish: finish
    end
  `;
}

function getSonicPiCode(solvedness: Disorder): string {
  return Faces.map((face) => playSample(face, solvedness[face])).join('\n');
}

function sendToSonicPi(song: string): void {
  const cmd = `echo '${song}' | sonic_pi`;
  exec(cmd);
}

export function updateSong(cube: Cube): void {
  const solvedness = getDisorder(cube);
  const song = getSonicPiCode(solvedness);
  sendToSonicPi(song);
}

export function stopPlayingSong(): void {
  exec('sonic_pi stop');
}
