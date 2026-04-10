import { players } from "./data/players";
import type { Players } from "./types/types";
import PlayerCard from "./components/PlayerCard";
import { Box, Typography } from "@mui/material";

function HallOfFame() {
  const sortedPlayers: Players[] = players.sort((a, b) => b.wins - a.wins);
  const topPlayers = sortedPlayers.slice(0, 12);

  const columns = 3;

  if (!players || players.length <= 0) {
    return (
      <div className="flex justify-center mt-30 p-10 bg-slate-950">
        <h1 className=" bg-teal-100 p-5 rounded-2xl h-fit border-b-sky-950 border-4 text-2xl font-bold">
          Looks like youre early! The CTF hasn't started yet..
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-dvh pt-5 items-center bg-slate-950 text-white" >
      <h1 className="text-2xl font-extrabold text-center mb-5">
        CTF LEADERBOARD
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
