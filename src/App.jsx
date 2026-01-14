import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar.jsx";
import ScrollToTop from "./components/layout/ScrollToTop.jsx";
import ScrollToHash from "./components/layout/ScrollToHash.jsx";
import Footer from "./components/sections/Footer.jsx";

import Home from "./pages/Home";
import Programme from "./pages/Programme";
import Research from "./pages/Research";
import Participate from "./pages/Participate";
import ParticipateFarm from "./pages/ParticipateFarm";
import ParticipateFunder from "./pages/ParticipateFunder";
import ParticipateResearch from "./pages/ParticipateResearch";
import ThankYou from "./pages/ThankYou";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programme" element={<Programme />} />
        <Route path="/research" element={<Research />} />
        <Route path="/participate" element={<Participate />} />
        <Route path="/participate/farm" element={<ParticipateFarm />} />
        <Route path="/participate/funder" element={<ParticipateFunder />} />
        <Route path="/participate/research" element={<ParticipateResearch />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

      <Footer />
    </div>
  );
}
