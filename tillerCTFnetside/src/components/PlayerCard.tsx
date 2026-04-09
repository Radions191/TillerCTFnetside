import { Card, Typography, CardMedia, CardContent } from "@mui/material";
import pic from "../assets/react.svg";
import type { Players } from "../types/types";

function PlayerCard({ player, index }: { player: Players; index: number }) {
  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        border: index === 0 ? "3px solid gold" : "2px solid black",
        bgcolor: "white",
      }}
    >
      <CardMedia
        component="img"
        image={pic}
        alt={`Profile picture of ${player.name}`}
        sx={{
          width: { xs: 120, sm: 100, md: 140 },
          height: { xs: 120, sm: 100, md: 140 },
          objectFit: "cover",
          borderRight: index === 0 ? "3px solid gold" : "2px solid black",
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
          {index === 0 && "👑 "} {player.class} -  {player.wins} wins
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PlayerCard;
