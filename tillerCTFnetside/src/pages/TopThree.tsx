import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import loadPlayers from "../hooks/loadPlayers";
import type { CombinedPlayer } from "../types/types";
import PlayerCard from "../components/PlayerCard";
import calculateSameWin from "../utils/calculateSameWin";

function TopThree() {
  const [players, setPlayers] = useState<CombinedPlayer[]>([]);
  useEffect(() => {
    loadPlayers(setPlayers);
  }, []);

  const topPlayers = [...players].sort((a, b) => b.score - a.score).slice(0, 3);
  const sameWin = calculateSameWin(topPlayers);
  const [first, ...rest] = topPlayers;

  return (
    <div className="relative min-h-[calc(100vh-60px)] w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 min-h-full min-w-full object-cover z-0"
        src={"/placeholder.mp4"}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col min-h-[calc(100vh-60px)] pt-20 items-center justify-start bg-black/60">
        <h1 className="text-2xl font-light my-10 text-white">
          Top 3 Leaderboard
        </h1>
        <div className="flex justify-center mb-10 sm:w-1/2 md:w-1/3">
          {first && (
            <PlayerCard
              player={first}
              index={first.place ?? 1}
              sameWin={sameWin}
              top3OrNormal="top3"
            />
          )}
        </div>
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            width: "100%",
            paddingX: { xs: 5, md: 10 },
          }}
        >
          {rest.map((player, index) => (
            <PlayerCard
              key={player.name || index}
              player={player}
              index={player.place || index + 1}
              sameWin={sameWin}
              top3OrNormal="top3"
            />
          ))}
        </Stack>
      </div>
    </div>
  );
}

export default TopThree;
