import React from "react";
import Section from "../layout/Section";
import { partners } from "../../lib/data";

export default function Partners() {
    const funding = ["Oak Foundation", "European Climate Foundation", "Feedback Fund"];
    const observers = ["EFSA Technical Network", "WHO Collaborating Centre", "FAO Advisory Group"];
    const ngos = ["Pesticide Action Network", "IFOAM Organics", "Soil Association"];

    return (
        <Section
            id="partners"
            className="bg-white"
            eyebrow="Institutional Network"
            title="Partners & Supporting Institutions"
            headerClassName="text-center"
        >
            <div className="mb-12">
                <div className="text-sm font-medium text-gray-500 mb-6">Research Partners</div>
                <div className="grid md:grid-cols-4 gap-6">
                    {partners.map((partner) => (
                        <div key={partner} className="bg-gray-50 p-6 border border-gray-200 text-center text-sm text-gray-700">
                            {partner}
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div>
                    <div className="text-sm font-medium text-gray-500 mb-4">Funding Partners</div>
                    <div className="space-y-3">
                        {funding.map((x) => (
                            <div key={x} className="bg-gray-50 p-4 border border-gray-200 text-sm text-gray-700">
                                {x}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="text-sm font-medium text-gray-500 mb-4">Policy Observers</div>
                    <div className="space-y-3">
                        {observers.map((x) => (
                            <div key={x} className="bg-gray-50 p-4 border border-gray-200 text-sm text-gray-700">
                                {x}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="text-sm font-medium text-gray-500 mb-4">NGO Partners</div>
                    <div className="space-y-3">
                        {ngos.map((x) => (
                            <div key={x} className="bg-gray-50 p-4 border border-gray-200 text-sm text-gray-700">
                                {x}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
