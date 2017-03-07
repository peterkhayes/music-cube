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
      sample :${name}, start: start, finish: finish
      sleep sample_duration :${name}, start: start, finish: finish
    end
  `;
}

module.exports = function templateSong (cubeData) {
  const samples = Object.keys(cubeData).map((key) => playSample(key, cubeData[key]));
  return [`use_sample_pack '${SAMPLE_PATH}'`]
    .concat(samples)
    .join("\n");
};