import React from "react";
import Section from "../layout/Section";
import { experts } from "../../lib/data";

export default function ExpertPanel() {
    return (
        <Section
            id="expert-panel"
            className="py-24 px-6 bg-gray-50 border-y border-gray-200"
            eyebrow="Scientific Governance"
            title="The Expert Panel"
            subtitle="Programme design, methodology, and data standards are governed by an independent panel of researchers across toxicology, agronomy, environmental health, economics, and regulatory science."
            headerClassName="text-center mb-20"
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {experts.map((expert, i) => (
                    <div
                        key={i}
                        className="bg-white p-8 border border-gray-200 hover:border-gray-300 transition"
                    >
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-medium text-lg mb-6">
                            {expert.initials}
                        </div>
                        <h4 className="text-lg font-medium text-gray-900 mb-1">{expert.name}</h4>
                        <div className="text-sm text-gray-900 mb-2">{expert.title}</div>
                        <div className="text-sm text-gray-600 mb-3">{expert.institution}</div>
                        <div className="text-xs text-gray-500 pt-3 border-t border-gray-200">
                            {expert.discipline}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white p-12 border border-gray-200">
                <h4 className="text-xl font-medium text-gray-900 mb-8">Panel Responsibilities</h4>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-gray-700">
                    {[
                        "Protocol design and validation for all measurement activities",
                        "Independent review of data collection and analysis methods",
                        "Peer review preparation and publication oversight",
                        "Regulatory liaison and evidence standards compliance",
                        "Research ethics and farmer welfare monitoring",
                        "Knowledge transfer and capacity building",
                    ].map((line) => (
                        <div key={line} className="flex gap-3">
                            <div className="text-gray-400 shrink-0">—</div>
                            <div>{line}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
