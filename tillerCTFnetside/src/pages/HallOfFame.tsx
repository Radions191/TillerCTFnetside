import { Stack } from "@mui/material";
import WinnerCard from "../components/WinnerCard";

function HallOfFame() {
  return (
    <Stack sx={{ gap: 3, padding: 5 }}>
      <WinnerCard name={"Finn Galloway McCann"} year={2025} />
      <WinnerCard name={"Adrian Risvik"} year={2024} />
      <WinnerCard name={"Sigurd Strand Osen"} year={2023} />
    </Stack>
  );
}

export default HallOfFame;
