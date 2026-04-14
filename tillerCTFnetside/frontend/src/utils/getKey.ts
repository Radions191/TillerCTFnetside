import type { CombinedPlayer } from "../types/types";

function getKey(players: CombinedPlayer[]) {
  return players.map((player) => {
    const parts = player.name.toLowerCase().trim().split(" ");
    const first = parts[0];
    const lastInitial = parts[1]?.[0] ?? "";

    return `${first}${lastInitial}`;
  });
}

export default getKey;
