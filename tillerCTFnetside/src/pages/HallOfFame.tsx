import { Stack } from "@mui/material";
import ProfileCard from "../components/WinnerCard";
import defaultPic from "../assets/vite.svg";
import adrianPic from "../assets/adrian.png";
import finnPic from "../assets/finn.png";

function HallOfFame() {
  return (
    <div className="relative min-h-[calc(100vh-60px)] w-full flex flex-col items-center py-8 bg-[#062249] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />{/* overlay */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <h1 className="text-2xl font-semibold mb-2 text-white">
          Årets Vinner:
        </h1>

        <div className="flex justify-center mb-15 w-1/3">
          <ProfileCard
            name="???"
            classAttend="Sikkert Tiller"
            year={2026}
            image={defaultPic}
          />
        </div>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 4,
            width: "100%",
            height: "50%",
            paddingX: 10,
          }}
        >
          <ProfileCard
            name="Finn Galloway McCann"
            classAttend="CHA IT"
            year={2025}
            image={finnPic}
          />
          <ProfileCard
            name="Adrian Risvik"
            classAttend="2IT"
            year={2024}
            image={adrianPic}
          />
          <ProfileCard
            name="Sigurd Strand Osen"
            classAttend="1ID"
            year={2023}
            image={defaultPic}
          />
        </Stack>
      </div>
    </div>
  );
}

export default HallOfFame;
