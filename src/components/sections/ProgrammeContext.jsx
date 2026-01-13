import React from "react";
import Section from "../layout/Section";

export default function ProgrammeContext() {
    return (
        <Section
            id="programme"
            className="bg-gray-50 border-y border-gray-200"
            eyebrow="Context"
            title="Why Healthy Hectare Exists"
            headerClassName=""
        >
            <div className="grid lg:grid-cols-2 gap-20">
                <div>
                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <p className="text-lg">
                            Global agriculture remains dependent on synthetic pesticides
                            despite mounting evidence of human health and ecological harm.
                        </p>
                        <p>
                            Regulatory frameworks are tightening across jurisdictions. The EU
                            has banned over 70 active ingredients in the past decade. WHO
                            guidelines continue to lower acceptable exposure thresholds.
                        </p>
                        <p>
                            Farmers face transition risk with limited evidence on yield
                            protection, economic viability, and practical implementation
                            pathways.
                        </p>
                        <p>
                            Current policy mechanisms lack the field-level data needed to
                            design effective, equitable transition programmes at scale.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-white p-8 border border-gray-200">
                        <div className="text-sm font-medium text-gray-500 mb-2">
                            Global Pesticide Use
                        </div>
                        <div className="text-5xl font-light text-gray-900 mb-2">4.2M</div>
                        <div className="text-sm text-gray-600">
                            Tonnes of active ingredients annually
                        </div>
                    </div>

                    <div className="bg-white p-8 border border-gray-200">
                        <div className="text-sm font-medium text-gray-500 mb-2">
                            Regulatory Action
                        </div>
                        <div className="text-5xl font-light text-gray-900 mb-2">72</div>
                        <div className="text-sm text-gray-600">
                            Active ingredients banned by EU since 2011
                        </div>
                    </div>

                    <div className="bg-white p-8 border border-gray-200">
                        <div className="text-sm font-medium text-gray-500 mb-2">
                            Farmer Transition Gap
                        </div>
                        <div className="text-5xl font-light text-gray-900 mb-2">Limited</div>
                        <div className="text-sm text-gray-600">
                            Evidence on viable pathways at commercial scale
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
