import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainPage from "./pages/MainPage.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar.tsx";
import LeaderBoard from "./pages/LeaderBoard.tsx";
import HallOfFame from "./pages/HallOfFame.tsx";
import TopThree from "./pages/TopThree.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/leaderboard">
          <Route index element={<LeaderBoard />} />
        </Route>
        <Route path="/halloffame">
          <Route index element={<HallOfFame />} />
        </Route>
        <Route path="/top3">
          <Route index element={<TopThree />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
