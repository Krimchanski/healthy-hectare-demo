import React from "react";

import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import ProgrammeContext from "./components/sections/ProgrammeContext";
import ProgrammeDefinition from "./components/sections/ProgrammeDefinition";
import HowItWorks from "./components/sections/HowItWorks";
import Footprint from "./components/sections/Footprint";
import ExpertPanel from "./components/sections/ExpertPanel";
import GovernanceFramework from "./components/sections/GovernanceFramework";
import Impact from "./components/sections/Impact";
import Partners from "./components/sections/Partners";
import Participate from "./components/sections/Participate";
import Regulatory from "./components/sections/Regulatory";
import Closing from "./components/sections/Closing";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProgrammeContext />
      <ProgrammeDefinition />
      <HowItWorks />
      <Footprint />
      <ExpertPanel />
      <GovernanceFramework />
      <Impact />
      <Partners />
      <Participate />
      <Regulatory />
      <Closing />
      <Footer />
    </div>
  );
}
