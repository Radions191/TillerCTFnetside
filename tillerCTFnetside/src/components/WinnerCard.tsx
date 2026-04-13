import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function WinnerCard({
  name,
  classAttend,
  year,
  image,
}: {
  name: string;
  classAttend: string;
  year: number;
  image: string;
}) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 370,
        height: 300,
        border: "1px solid",
        borderRadius: 3,
        bgcolor: "#C3FFD1",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={`Profile picture of ${name}`}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          padding: 1,
          borderRadius: 3,
        }}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 1.5,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "1.3rem",
          }}
        >
          {name}
        </Typography>

        <Typography sx={{ fontSize: "0.9rem", fontWeight:600 }}>
          {classAttend} 👑 {year}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default WinnerCard;
