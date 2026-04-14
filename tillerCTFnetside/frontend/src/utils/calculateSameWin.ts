import type { CombinedPlayer } from "../types/types";

function calculateSameWin(topPlayers: CombinedPlayer[]) {
  const sameWin = [];
  if (topPlayers.length > 1 && topPlayers[0].score === topPlayers[1].score) {
    sameWin.push(topPlayers[0], topPlayers[1]);
  }
  return sameWin
}

export default calculateSameWin;
