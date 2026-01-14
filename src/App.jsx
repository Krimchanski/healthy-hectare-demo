import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Programme from "./pages/Programme";
import Research from "./pages/Research";
import Participate from "./pages/Participate";
import ParticipateFarm from "./pages/ParticipateFarm";
import ParticipateFunder from "./pages/ParticipateFunder";
import ParticipateResearch from "./pages/ParticipateResearch";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programme" element={<Programme />} />
        <Route path="/research" element={<Research />} />
        <Route path="/participate" element={<Participate />} />
        <Route path="/participate/farm" element={<ParticipateFarm />} />
        <Route path="/participate/funder" element={<ParticipateFunder />} />
        <Route path="/participate/research" element={<ParticipateResearch />} />
      </Routes>
    </BrowserRouter>
  );
}
