import React from "react";
import Section from "../layout/Section";

export default function GovernanceFramework() {
    const pillars = [
        { title: "Design Principles", items: ["Farmer-centred", "Evidence-based", "Scalable", "Transparent"] },
        { title: "Research Protocols", items: ["Field trial standards", "Data collection methods", "Control plot design", "Statistical framework"] },
        { title: "Data Standards", items: ["Open data architecture", "Interoperability", "Privacy protection", "Audit trails"] },
        { title: "Regulatory Alignment", items: ["EU framework compliance", "FAO guidelines", "WHO standards", "National policy integration"] },
    ];

    return (
        <Section
            className="bg-white"
            eyebrow="Programme Architecture"
            title="Governance & Scientific Framework"
            headerClassName="text-center"
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillars.map((pillar) => (
                    <div key={pillar.title} className="bg-gray-50 p-8 border border-gray-200">
                        <h4 className="text-lg font-medium text-gray-900 mb-6">{pillar.title}</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            {pillar.items.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 shrink-0"></div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 transition">
                                Download documentation →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
