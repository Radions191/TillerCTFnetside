import type { Players } from "../types/types";
import PlayerCard from "./PlayerCard";
import { Box, Typography } from "@mui/material";

function HallOfFame() {
  const players: Players[] = [
    { name: "Henrik Lyngstad", wins: 47, class: "2IT Tiller", avatar: "" },
    { name: "Martin Mr.Drift Lyse", wins: 10, class: "2IT Tiller", avatar: "" },
    { name: "Martin Mr.Drift Lyse", wins: 10, class: "2IT Tiller", avatar: "" },
    { name: "Martin Mr.Drift Lyse", wins: 10, class: "2IT Tiller", avatar: "" },
    { name: "Martin Mr.Drift Lyse", wins: 10, class: "2IT Tiller", avatar: "" },
    { name: "Martin Mr.Drift Lyse", wins: 10, class: "2IT Tiller", avatar: "" },
    { name: "Eivind  Brubakk", wins: 2, class: "1IM Tiller", avatar: "" },
    { name: "Eivind  Brubakk", wins: 2, class: "1IM Tiller", avatar: "" },
    { name: "Eivind  Brubakk", wins: 2, class: "1IM Tiller", avatar: "" },
    { name: "Eivind  Brubakk", wins: 2, class: "1IM Tiller", avatar: "" },
    { name: "Eivind  Brubakk", wins: 2, class: "1IM Tiller", avatar: "" },
    { name: "Eivind  Brubakk", wins: 2, class: "1IM Tiller", avatar: "" },
  ];

  const sortedPlayers = players.sort((a, b) => b.wins - a.wins);
  const topPlayers = sortedPlayers.slice(0, 12);

  const columns = 3;

  return (
    <div className="flex flex-col w-full mt-5 items-center">
      <h1 className="text-2xl font-extrabold text-center mb-5">
        CTF TOP 12 LEADERBOARD
      </h1>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: `repeat(${columns - 1}, 1fr)`,
            md: `repeat(${columns}, 1fr)`,
          },
          gap: 2,
          px: { xs: 2, sm: 5, md: 10, lg: 15 },
          mb: 2,
        }}
      >
        {topPlayers.map((player, index) => (
          <PlayerCard key={index} player={player} index={index} />
        ))}
      </Box>
      {players.length > 10 && (
        <Typography
          sx={{
            opacity: 0.8,
            mb: { xs: 5, md: 0 },
          }}
        >
          + {players.length - 10} more players
        </Typography>
      )}
    </div>
  );
}

export default HallOfFame;
