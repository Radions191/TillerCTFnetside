import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import loadPlayers from "../hooks/loadPlayers";
import type { CombinedPlayer } from "../types/types";
import PlayerCard from "../components/PlayerCard";
import calculateSameWin from "../utils/calculateSameWin";

function TopThree() {
  const [players, setPlayers] = useState<CombinedPlayer[]>([]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      await loadPlayers((data) => {
        if (isMounted) setPlayers(data);
      });
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 45000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const topPlayers = [...players].sort((a, b) => b.score - a.score).slice(0, 3);

  const sameWin = calculateSameWin(topPlayers);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 min-h-full min-w-full object-cover z-0"
        src={"/CTFBG.mp4"}
        autoPlay
        loop
        muted
      />

      <div className="relative z-10 flex flex-col h-screen pt-11 items-center justify-start bg-black/60">
        <h1 className="text-5xl font-light my-10 text-white bg-black p-5">
          Top 3 Leaderboard
        </h1>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 7,
            width: "100%",
            paddingX: { xs: 5, md: 10 },
          }}
        >
          {topPlayers.map((player, index) => (
            <PlayerCard
              key={player.name || index}
              player={player}
              index={index}
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
