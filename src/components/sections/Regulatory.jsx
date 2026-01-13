import React from "react";
import Section from "../layout/Section";

export default function Regulatory() {
    const items = [
        { title: "Standards Alignment", desc: "Protocols designed to meet EFSA, WHO, and FAO evidence requirements" },
        { title: "Regulatory Engagement", desc: "Active liaison with national agricultural authorities and policy teams" },
        { title: "Reporting Frameworks", desc: "Data architecture compatible with regulatory submission standards" },
        { title: "Transition Roadmaps", desc: "Policy-ready pathways for scaled pesticide reduction programmes" },
    ];

    return (
        <Section
            className="bg-white"
            eyebrow="Policy Integration"
            title="Designed for Regulatory Integration"
            subtitle="Healthy Hectare generates evidence compatible with existing regulatory frameworks and policy development processes."
            headerClassName="text-center"
        >
            <div className="grid md:grid-cols-4 gap-6">
                {items.map((item) => (
                    <div key={item.title} className="bg-gray-50 p-8 border border-gray-200">
                        <h4 className="text-lg font-medium text-gray-900 mb-4">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
