import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function WinnerCard({
  name,
  classAttend,
  place,
  year,
  image,
}: {
  name: string;
  classAttend: string;
  place: string;
  year: number;
  image: string;
}) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: { xs: "100%", sm: 350, lg: 400 },
        border: "2px solid",
        borderColor: "#4D5A6A",
        borderRadius: 3,
        bgcolor: "#020618",
        color: "#54F28D",
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={`Profile picture of ${name}`}
        sx={{
          width: "100%",
          height: 200,
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
        <h1 className="font-medium text-2xl">
          {place} {name}
        </h1>

        <Typography sx={{ fontWeight: "bold" }}>
          {classAttend} 👑 {year}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default WinnerCard;
