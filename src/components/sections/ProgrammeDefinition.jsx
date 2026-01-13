import React from "react";
import { Leaf, BarChart3, Shield } from "lucide-react";
import Section from "../layout/Section";

export default function ProgrammeDefinition() {
    return (
        <Section
            eyebrow="Programme Definition"
            title="What Is Healthy Hectare?"
            headerClassName="text-center"
            className="bg-white"
        >
            <div className="grid md:grid-cols-3 gap-12">
                <div>
                    <div className="mb-6">
                        <Leaf className="w-10 h-10 text-gray-900" />
                    </div>
                    <h4 className="text-xl font-medium text-gray-900 mb-4">
                        A Transition Challenge
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Farms participate in a structured reduction programme, measured over
                        seasons and incentivised by performance and resilience metrics.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Multi-year participation tracks</li>
                        <li>• Baseline to transition measurement</li>
                        <li>• Financial support mechanisms</li>
                    </ul>
                </div>

                <div>
                    <div className="mb-6">
                        <BarChart3 className="w-10 h-10 text-gray-900" />
                    </div>
                    <h4 className="text-xl font-medium text-gray-900 mb-4">
                        A Research Platform
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Field trials with control plots, open methodology, and peer-reviewed
                        analysis produce actionable evidence.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Standardised protocols</li>
                        <li>• Independent verification</li>
                        <li>• Publication pipeline</li>
                    </ul>
                </div>

                <div>
                    <div className="mb-6">
                        <Shield className="w-10 h-10 text-gray-900" />
                    </div>
                    <h4 className="text-xl font-medium text-gray-900 mb-4">
                        A Policy Engine
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Generate evidence for regulators, design transition pathways, and
                        align with emerging standards frameworks.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Regulatory engagement strategy</li>
                        <li>• Standards alignment</li>
                        <li>• Policy briefing materials</li>
                    </ul>
                </div>
            </div>
        </Section>
    );
}
