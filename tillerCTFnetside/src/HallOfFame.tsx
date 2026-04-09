import LeaderBoard from "./components/LeaderBoard";
import type { Players } from "./types/types";

function HallOfFame() {
  const players: Players[] = [
    { name: "placeholder1", wins: 1, avatar: "" },
    { name: "placeholder2", wins: 2, avatar: "" },
    { name: "placeholder3", wins: 3, avatar: "" },
  ].sort((a, b) => a.wins - b.wins);

  return <LeaderBoard players={players} />;
}

export default HallOfFame;
