import { Card, CardContent, Typography } from "@mui/material";

function WinnerCard({ name, year }: { name: string; year: number }) {
  return (
    <Card
      sx={{
        display: "flex",
        width: "25%",
      }}
    >
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
          {name}
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "center" }}>
          👑{year}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default WinnerCard;
