import React from "react";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="p-6">
        <div className="text-2xl font-bold flex justify-center">Tiller CTF</div>
      </div>
    </div>
  );
}
