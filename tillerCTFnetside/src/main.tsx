import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainPage from "./MainPage.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar.tsx";
import HallOfFame from "./HallOfFame.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/halloffame">
          <Route index element={<HallOfFame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
