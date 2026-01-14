import React from "react";

import Hero from "../components/sections/Hero";
import ProgrammeContext from "../components/sections/ProgrammeContext";
import ProgrammeDefinition from "../components/sections/ProgrammeDefinition";
import HowItWorks from "../components/sections/HowItWorks";
import Footprint from "../components/sections/Footprint";
import ExpertPanel from "../components/sections/ExpertPanel";
import GovernanceFramework from "../components/sections/GovernanceFramework";
import Impact from "../components/sections/Impact";
import Partners from "../components/sections/Partners";
import Participate from "../components/sections/Participate";
import Regulatory from "../components/sections/Regulatory";
import Closing from "../components/sections/Closing";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero */}
            <Hero />

            {/* Programme */}
            <section id="programme">
                <ProgrammeContext />
                <ProgrammeDefinition />
            </section>

            {/* How it works */}
            <section id="how-it-works">
                <HowItWorks />
            </section>

            {/* Footprint / systems context */}
            <section id="footprint">
                <Footprint />
            </section>

            {/* Impact & expert validation */}
            <section id="impact">
                <Impact />
                <ExpertPanel />
            </section>

            {/* Governance & regulation */}
            <section id="governance">
                <GovernanceFramework />
                <Regulatory />
            </section>

            {/* Partners & participation */}
            <section id="partners">
                <Partners />
            </section>

            <section id="participate">
                <Participate />
            </section>

            <Closing />
        </div>
    );
}
