import { Card, Typography, CardMedia, CardContent } from "@mui/material";
import type { CombinedPlayer } from "../types/types";
import getKey from "../utils/getKey";

function PlayerCard({
  player,
  index,
  sameWin,
  top3OrNormal,
}: {
  player: CombinedPlayer;
  index: number;
  sameWin: CombinedPlayer[];
  top3OrNormal: "top3" | "normal";
}) {
  const isSharedFirst = sameWin.some((p) => p.name === player.name);
  const classAttended = player.fields[0].value;

  const isTop3 = top3OrNormal === "top3";

  const key = getKey(player) || "vite.svg";
  const avatar = `https://ctf-backend-worker.noahdiakowski.workers.dev/api/avatar/${key}`;
  const defaultpic = "/favicon.svg";

  return (
    <Card
      sx={{
        display: "flex",
        width: isTop3 ? "80%" : "100%",
        maxWidth: isTop3 ? "300px" : "none",
        border: isSharedFirst || player.place === 1 ? "2px solid" : "1px solid",
        borderColor:
          isSharedFirst || player.place === 1 ? "#C3FFD1" : "#062249",
        bgcolor: "#020618",
        color: "#54F28D",
      }}
    >
      {!isTop3 && (
        <CardMedia
          component="img"
          image={avatar}
          onError={(e) => {
            (e.target as HTMLImageElement).src = defaultpic;
          }}
          alt={`Profile picture of ${player.name}`}
          sx={{
            width: 120,
            height: 120,
            objectFit: "cover",
            flexShrink: 0,
            borderRight:
              isSharedFirst || player.place === 1 ? "2px solid" : "1px solid",
            borderColor:
              isSharedFirst || player.place === 1 ? "#C3FFD1" : "#062249",
          }}
        />
      )}

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
        <h2
          className={`font-normal, text-center  ${isTop3 ? "text-3xl" : "text-lg"}`}
        >
          #{player.place || index + 1} {player.name}
        </h2>

        <Typography sx={{ fontSize: "1.2rem", textAlign: "center" }}>
          {isSharedFirst
            ? "👀 "
            : player.place === 1 && sameWin.length === 0
              ? "👑 "
              : ""}{" "}
          {player.score} - {classAttended}
        </Typography>

        {isTop3 && (
          <div className="flex items-center justify-around text-sm mt-1">
            <span
              className={`${player.attempts.length > 50 ? "text-red-400" : ""}`}
            >
              ❌ {player.attempts.length} | ✅ {player.solves.length}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default PlayerCard;
