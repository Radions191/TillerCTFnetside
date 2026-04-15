import type { CombinedPlayer } from "../types/types";

function getKey(player: CombinedPlayer) {
  const parts = player.name.toLowerCase().trim().split(" ");
  const first = parts[0];
  return `${first}`;
}

export default getKey;
