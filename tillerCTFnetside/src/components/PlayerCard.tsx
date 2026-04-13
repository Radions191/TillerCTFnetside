import { Card, Typography, CardMedia, CardContent } from "@mui/material";
import defaultpic from "../assets/vite.svg";
import type { CombinedPlayer, Players } from "../types/types";

function PlayerCard({
  player,
  index,
  sameWin,
}: {
  player: CombinedPlayer;
  index: number;
  sameWin: Players[];
}) {
  const pictures: Record<string, string> = {};

  const key =
    // player.name.split(" ")[0].toLowerCase() +
    // player.name.split(" ")[1][0].toLowerCase() ||
    player.name;

  const isSharedFirst = sameWin.some((p) => p.name === player.name);
  const classAttended = player.fields[0].value;

  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        border:
          isSharedFirst || (player.place === 1 && sameWin.length === 0)
            ? "2px solid"
            : "1px solid",
        borderColor:
          isSharedFirst || (player.place === 1 && sameWin.length === 0)
            ? "#C3FFD1"
            : "#062249",
        bgcolor: "#020618",
        color: "#54F28D",
      }}
    >
      <CardMedia
        component="img"
        image={pictures[key] ?? defaultpic}
        alt={`Profile picture of ${player.name}`}
        sx={{
          width: 120,
          height: 120,
          objectFit: "cover",
          flexShrink: 0,
          borderRight:
            isSharedFirst || (index === 0 && sameWin.length === 0)
              ? "2px solid"
              : "1px solid",
          borderColor:
            isSharedFirst || (player.place === 1 && sameWin.length === 0)
              ? "#C3FFD1"
              : "#062249",
        }}
      />

      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: 2,
          py: 1,
          gap: 0.5,
        }}
      >
        <h2 className="font-normal, text-center text-lg text">
          #{player.place || index + 1} {player.name}
        </h2>

        <Typography
          sx={{ fontSize: "0.9rem", opacity: 0.8, textAlign: "center" }}
        >
          {isSharedFirst
            ? "👀 "
            : player.place === 1 && sameWin.length === 0
              ? "👑 "
              : ""}{" "}
          {player.score} - {classAttended}
        </Typography>
        {/* <div className="flex items-center justify-around text-sm mt-1">
          <span
            className={`opacity-70 ${player.attempts.length > 50 ? "text-red-400" : ""}`}
          >
            ❌ {player.attempts.length} | ✅ {player.solves.length}
          </span>
        </div> */}
      </CardContent>
    </Card>
  );
}

export default PlayerCard;
