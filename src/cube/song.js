const path = require("path");

const SAMPLE_PATH = path.join(__dirname, "../songs/demo");

const SAMPLE_SLICE_SIZE = 0.125; // What percent of the full WAV is each clip.
const SUBDIVISIONS = 4; // How many subdivisions per clip.
const SUBDIVISION_SIZE = SAMPLE_SLICE_SIZE / SUBDIVISIONS;

function playSample (name, sample) {
  return `
    live_loop :${name}_loop do
      beat = (Array (0..${SUBDIVISIONS - 1})).ring.tick
      start = ${SAMPLE_SLICE_SIZE} * ${sample - 1} + ${SUBDIVISION_SIZE} * beat
      finish = start + ${SUBDIVISION_SIZE}
      sample "${SAMPLE_PATH}", "${name}", start: start, finish: finish
      sleep sample_duration "${SAMPLE_PATH}", "${name}", start: start, finish: finish
    end
  `;
}

module.exports = function templateSong (solvedness) {
  const script = Object.keys(solvedness)
    .map((face) => playSample(face, solvedness[face]))
    .join("\n");
  console.log(script)
  return script;
};