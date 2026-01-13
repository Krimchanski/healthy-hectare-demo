import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Programme from "./pages/Programme";
import Research from "./pages/Research";
import Participate from "./pages/Participate";
import ParticipateFarm from "./pages/ParticipateFarm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programme" element={<Programme />} />
        <Route path="/research" element={<Research />} />
        <Route path="/participate" element={<Participate />} />
        <Route path="/participate/farm" element={<ParticipateFarm />} />
      </Routes>
    </BrowserRouter>
  );
}
