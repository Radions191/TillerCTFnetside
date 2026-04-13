import { Stack } from "@mui/material";
import ProfileCard from "../components/WinnerCard";
import defaultPic from "../assets/vite.svg";
import adrianPic from "../assets/adrian.png";
import finnPic from "../assets/finn.png";

function HallOfFame() {
  return (
    <div className="relative min-h-[calc(100vh-60px)] w-full flex flex-col items-center py-8 bg-[url('/hallOfFameBG.png')] bg-cover">
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center w-full">
        <h1 className="text-2xl font-light mb-2 text-white">
          Årets CTF Hacker:
        </h1>

        <div className="flex justify-center mb-10 sm:w-1/2 md:w-1/3">
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
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            width: "100%",
            height: "50%",
            paddingX: { xs: 5, md: 10 },
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
