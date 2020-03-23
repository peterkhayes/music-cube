import { stopPlayingSong } from '../cube/song';

export function getPort(defaultPort: number): number {
  return Number(process.env.PORT) || defaultPort;
}

export function ensureCleanup(otherCleanup?: Function) {
  async function cleanup() {
    stopPlayingSong();
    if (otherCleanup) await otherCleanup();
    process.exit(0);
  }

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
}
