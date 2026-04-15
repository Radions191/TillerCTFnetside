import type { CombinedPlayer } from "../types/types";
import PlayerCard from "../components/PlayerCard";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import loadPlayers from "../hooks/loadPlayers";
import calculateSameWin from "../utils/calculateSameWin";
import getKey from "../utils/getKey";

function LeaderBoard() {
  const [players, setPlayers] = useState<CombinedPlayer[]>([]);
  useEffect(() => {
    loadPlayers(setPlayers);
  }, []);

  const topPlayers = [...players]
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);

  const columns = 3;
  const sameWin = calculateSameWin(topPlayers);
  const totalFails = players.reduce((sum, player) => {
    return sum + (player.attempts?.length || 0);
  }, 0);

  const mostChaotic = players
    .slice()
    .sort((a, b) => (b.attempts?.length || 0) - (a.attempts?.length || 0))[0];

  return (
    <div className="relative min-h-[calc(100vh-60px)] w-full flex flex-col items-center py-8 bg-[url('/hallOfFameBG.png')] bg-cover">
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />
      <div className="relative flex flex-col z-10 items-center w-full">
        {!players ||
          (players.length <= 0 ? (
            <h1 className="p-5 rounded-2xl h-fit border-b-sky-950 border-4 text-2xl text-[#54F28D] font-bold">
              Looks like youre early! The CTF hasn't started yet..
            </h1>
          ) : (
            <>
              <h1 className="text-2xl mb-5 font-light text-center text-white">
                CTF LEADERBOARD
              </h1>
              {mostChaotic.attempts.length > 0 && (
                <Typography
                  sx={{ marginBottom: 4, color: "white", textAlign: "center" }}
                >
                  Totale fails: ❌ {totalFails} <br />
                  Bruteforce-kongen: 💀 {
                    mostChaotic.name.split(" ")[0]
                  } med {mostChaotic.attempts.length} fails
                </Typography>
              )}
            </>
          ))}

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
              top3OrNormal="normal"
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
