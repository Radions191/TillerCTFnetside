import { Stack } from "@mui/material";
import ProfileCard from "../components/WinnerCard";
import defaultPic from "../assets/vite.svg";
import { useState, useEffect } from "react";
import loadPlayers from "../hooks/loadPlayers";
import type { CombinedPlayer } from "../types/types";

function TopThree() {
  const [players, setPlayers] = useState<CombinedPlayer[]>([]);
  useEffect(() => {
    loadPlayers(setPlayers);
  }, []);

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const topPlayers = sortedPlayers.slice(0, 3);

  const [first, ...rest] = topPlayers;

  return (
    <div className="relative min-h-[calc(100vh-60px)] w-full flex flex-col items-center py-8 bg-[url('/hallOfFameBG.png')] bg-cover">
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center w-full">
        <h1 className="text-2xl font-light mb-2 text-white">
          Top 3 Leaderboard
        </h1>

        <div className="flex justify-center mb-10 sm:w-1/2 md:w-1/3">
          {first && (
            <ProfileCard
              name={first.name}
              classAttend={first.fields[0].value}
              year={2026}
              image=""
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
            height: "50%",
            paddingX: { xs: 5, md: 10 },
          }}
        >
          {rest.map((player, index) => (
            <ProfileCard
              key={player.name || index}
              name={player.name}
              classAttend={player.fields[0].value}
              year={2026}
              image=""
            />
          ))}
        </Stack>
      </div>
    </div>
  );
}

export default TopThree;
