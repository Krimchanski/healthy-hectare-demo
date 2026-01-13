import React from "react";
import Section from "../layout/Section";
import { metrics } from "../../lib/data";

export default function Impact() {
    return (
        <Section
            id="impact"
            className="bg-gray-50 border-y border-gray-200"
            eyebrow="Programme Status"
            title="Impact & Traction"
            headerClassName="text-center"
        >
            <div className="grid md:grid-cols-4 gap-6 mb-16">
                {metrics.map((metric) => (
                    <div key={metric.label} className="bg-white p-8 border border-gray-200 text-center">
                        <div className="text-5xl font-light text-gray-900 mb-2">{metric.value}</div>
                        <div className="text-sm font-medium text-gray-900 mb-1">{metric.label}</div>
                        <div className="text-xs text-gray-500">{metric.sublabel}</div>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-10 border border-gray-200">
                    <div className="text-xs font-medium text-gray-500 mb-2 tracking-wider uppercase">
                        Case Study
                    </div>
                    <h4 className="text-xl font-medium text-gray-900 mb-4">
                        Mixed Arable Farm, Northern Germany
                    </h4>
                    <div className="space-y-4 text-sm text-gray-700">
                        {[
                            ["Farm size", "240 hectares"],
                            ["Crop system", "Wheat, barley, oilseed rape"],
                            ["Pesticide reduction", "62% (Year 2)"],
                            ["Yield impact", "-4.3% (within variance)"],
                            ["Economic result", "Net positive with support"],
                        ].map(([k, v], idx, arr) => (
                            <div
                                key={k}
                                className={`flex justify-between py-2 ${idx < arr.length - 1 ? "border-b border-gray-100" : ""}`}
                            >
                                <span className="text-gray-500">{k}</span>
                                <span className="font-medium">{v}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-10 border border-gray-200">
                    <div className="text-xs font-medium text-gray-500 mb-2 tracking-wider uppercase">
                        Case Study
                    </div>
                    <h4 className="text-xl font-medium text-gray-900 mb-4">
                        Vegetable Producer, Netherlands
                    </h4>
                    <div className="space-y-4 text-sm text-gray-700">
                        {[
                            ["Farm size", "18 hectares"],
                            ["Crop system", "Diverse vegetables, rotation"],
                            ["Pesticide reduction", "87% (Year 2)"],
                            ["Yield impact", "+2.1% (improved soil health)"],
                            ["Economic result", "Premium pricing offset costs"],
                        ].map(([k, v], idx, arr) => (
                            <div
                                key={k}
                                className={`flex justify-between py-2 ${idx < arr.length - 1 ? "border-b border-gray-100" : ""}`}
                            >
                                <span className="text-gray-500">{k}</span>
                                <span className="font-medium">{v}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
