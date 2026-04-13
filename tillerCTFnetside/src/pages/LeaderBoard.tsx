import type { CombinedPlayer, Players } from "../types/types";
import PlayerCard from "../components/PlayerCard";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import fetchApiData from "../hooks/fetchUsers";

function LeaderBoard() {
  const [players, setPlayers] = useState<CombinedPlayer[]>([]);
  useEffect(() => {
    async function loadPlayers() {
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

      setPlayers(merged);
    }

    loadPlayers();
  }, []);

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const topPlayers = sortedPlayers.slice(0, 12);

  const columns = 3;

  const sameWin: Players[] = [];
  if (topPlayers.length > 1 && topPlayers[0].score === topPlayers[1].score) {
    sameWin.push(topPlayers[0], topPlayers[1]);
  }

  const totalFails = players.reduce((sum, player) => {
    return sum + (player.attempts?.length || 0);
  }, 0);

  const mostChaotic = players
    .slice()
    .sort((a, b) => (b.attempts?.length || 0) - (a.attempts?.length || 0))[0];
  console.log(mostChaotic);

  return (
    <div className="relative min-h-[calc(100vh-60px)] w-full flex flex-col items-center py-8 bg-[url('/hallOfFameBG.png')] bg-cover text-white">
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />
      <div className="relative flex flex-col z-10 items-center w-full">
        {!players ||
          (players.length <= 0 ? (
            <h1 className="bg-white p-5 rounded-2xl h-fit border-b-sky-950 border-4 text-2xl font-bold">
              Looks like youre early! The CTF hasn't started yet..
            </h1>
          ) : (
            <h1 className="text-2xl font-extrabold text-center text-white">
              CTF LEADERBOARD
            </h1>
          ))}

        <Typography>Totale fails: ❌ {totalFails}</Typography>
        {mostChaotic && (
          <Typography sx={{ marginBottom: 4 }}>
            Bruteforce-kongen: 💀 {mostChaotic.name.split(" ")[0]} med {mostChaotic.attempts.length} fails
          </Typography>
        )}
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
            <PlayerCard
              key={index}
              player={player}
              index={index}
              sameWin={sameWin}
            />
          ))}
        </Box>

        {players.length > 10 && (
          <h3 className="opacity-80 xs:mb-5 md:mb-0">
            + {players.length - 10} more players
          </h3>
        )}
      </div>
    </div>
  );
}

export default LeaderBoard;
