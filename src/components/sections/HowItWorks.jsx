import React from "react";
import Section from "../layout/Section";

export default function HowItWorks() {
    const steps = [
        {
            num: "01",
            title: "Farm Onboarding",
            items: ["Baseline assessment", "Usage audit", "Risk profiling", "Crop system mapping"],
        },
        {
            num: "02",
            title: "Pathway Design",
            items: ["Transition modelling", "Crop-specific protocols", "Economic analysis", "Support planning"],
        },
        {
            num: "03",
            title: "Field Monitoring",
            items: ["Trial implementation", "Yield tracking", "Health metrics", "Cost documentation"],
        },
        {
            num: "04",
            title: "Analysis & Reporting",
            items: ["Data synthesis", "Performance evaluation", "Certification", "Publication"],
        },
    ];

    return (
        <Section
            id="how-it-works"
            className="bg-gray-50 border-y border-gray-200"
            eyebrow="Programme Mechanics"
            title="How the Programme Works"
            headerClassName="text-center"
        >
            <div className="relative">
                <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-300 hidden lg:block"></div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {steps.map((step, i) => (
                        <div key={i} className="relative">
                            <div className="bg-white p-8 border border-gray-200 h-full">
                                <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center text-sm font-medium mb-6 relative z-10">
                                    {step.num}
                                </div>
                                <h4 className="text-lg font-medium text-gray-900 mb-4">{step.title}</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {step.items.map((item, j) => (
                                        <li key={j}>• {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
