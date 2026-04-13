import type { CombinedPlayer, Players } from "../types/types";
import fetchApiData from "./fetchUsers";

async function loadPlayers(
  setPlayers: React.Dispatch<React.SetStateAction<CombinedPlayer[]>>,
) {
  const userBasicData = await fetchApiData("users");
  const userStatsData = await fetchApiData("stats");

  const stats = userStatsData.scoreboard;

  const merged: CombinedPlayer[] = userBasicData.map((user: Players) => {
    const match = stats.find((stat: any) => stat.id === user.id);
    return {
      ...user,
      attempts: match?.attempts ?? [],
      solves: match?.solves ?? [],
      place: match?.place ?? 0,
      score: match?.score ?? 0,
    };
  });

  return setPlayers(merged);
}

export default loadPlayers;
