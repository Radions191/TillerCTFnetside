import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  createTheme,
  ThemeProvider,
} from "@mui/material";
// import henrikl from "../assets/hero.png";
// import eivindb from "../assets/react.svg";
// import martinm from "../assets/vite.svg";
import defaultpic from "../assets/vite.svg";
import type { Players } from "../types/types";

function PlayerCard({
  player,
  index,
  sameWin,
}: {
  player: Players;
  index: number;
  sameWin: Players[];
}) {
  
  //   const pictures: Record<string, string> = {
  //     henrikl,
  //     martinm,
  //     eivindb,
  //   };

  //   const key =
  //     player.name.split(" ")[0].toLowerCase() +
  //     player.name.split(" ")[1][0].toLowerCase();

  const theme = createTheme({
    palette: {
      background: {
        default: "#020618",
        paper: "#ffd700",
      },
      text: {
        primary: "#f5f5f5",
        secondary: "#46505A",
      },
    },
  });

  const isSharedFirst = sameWin.some((p) => p.name === player.name);
  const classAttended = player.fields[0].value;

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          display: "flex",
          width: "100%",
          border:
            isSharedFirst || (index === 0 && sameWin.length === 0)
              ? "2px solid"
              : "1px solid",
          borderColor:
            isSharedFirst || (index === 0 && sameWin.length === 0)
              ? "background.paper"
              : "text.primary",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <CardMedia
          component="img"
          image={/*pictures[key] ??*/ defaultpic}
          alt={`Profile picture of ${player.name}`}
          sx={{
            width: { xs: 120, sm: 100, md: 140 },
            height: { xs: 120, sm: 100, md: 140 },
            objectFit: "cover",
            borderRight:
              isSharedFirst || (index === 0 && sameWin.length === 0)
                ? "2px solid"
                : "1px solid",
            borderRightColor:
              isSharedFirst || (index === 0 && sameWin.length === 0)
                ? "background.paper"
                : "text.primary",
          }}
        />

        <CardContent
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", sm: "1rem", lg: "1.2rem" },
              textAlign: "center",
            }}
          >
            #{index + 1} {player.name}
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "center" }}>
            {isSharedFirst
              ? "👀 "
              : index === 0 && sameWin.length === 0
                ? "👑 "
                : ""}{" "}
            {classAttended} - {player.wins} wins
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

export default PlayerCard;
