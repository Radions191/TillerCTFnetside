import { Card } from "@mui/material";
import Stack from "@mui/material/Stack";
import type { Players } from "../types/types";

function LeaderBoard({ players }: { players: Players[] }) {
  return (
    <div className="flex flex-col min-h-screen w-full items-center">
      <h1 className="text-2xl text-center mb-5">LEADERBOARD</h1>
      <Stack direction="column" spacing={2}>
        {players.map((player, index) => (
          <Card
            key={player.name}
            sx={{
              paddingX: 2,
              paddingY: 0.5,
              width: "full",
              textAlign: "center",
              border: "1px solid #ccc",
              bgcolor: "transparent",
              fontWeight: index === 0 ? "bold" : "normal",
            }}
          >
            {index === 0 && "👑 "}
            {player.name}: {player.wins}
          </Card>
        ))}
      </Stack>
    </div>
  );
}

export default LeaderBoard;
