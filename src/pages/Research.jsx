import React from "react";
import PageShell from "../components/layout/PageShell";

export default function Research() {
    return (
        <PageShell
            title="Research"
            subtitle="Methods and evidence hub defining what is measured, what counts as acceptable evidence, and how programme claims remain traceable to reviewable protocols. Phase I establishes the minimum verification-ready standard."
            maxWidthClass="max-w-7xl"
        >
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-8 border border-gray-200">
                    <h4 className="text-lg font-medium text-gray-900 mb-3">
                        Evidence Requirements
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Defines the minimum evidence required to support programme claims,
                        including field records, product usage data, and outcome observations.
                        All evidence is structured for traceability and review.
                    </p>
                </div>

                <div className="bg-gray-50 p-8 border border-gray-200">
                    <h4 className="text-lg font-medium text-gray-900 mb-3">
                        Limitations & Boundaries
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Specifies what the programme does not claim in Phase I, ensuring
                        transparency around scope, applicability, and validation status.
                        This protects against overstatement and premature generalisation.
                    </p>
                </div>
            </div>
        </PageShell>
    );
}
