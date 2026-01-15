import React from "react";
import PageShell from "../components/layout/PageShell";

export default function Programme() {
    return (
        <PageShell
            title="Programme"
            subtitle="Programme authority hub for governance, decision rights, and implementation structure. Phase I scope is intentionally bounded: operating model, accountability, and participation architecture — expanded as verification partners and regulatory pathways are formalised."
            maxWidthClass="max-w-7xl"
        >
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-8 border border-gray-200">
                    <h4 className="text-lg font-medium text-gray-900 mb-3">
                        Governance & Accountability
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Defines programme oversight, decision rights, and integrity safeguards.
                        This includes responsibility boundaries, escalation pathways, and controls
                        designed for funder and regulator review.
                    </p>
                </div>

                <div className="bg-gray-50 p-8 border border-gray-200">
                    <h4 className="text-lg font-medium text-gray-900 mb-3">
                        Phase I Operating Scope
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Establishes the initial implementation boundary: participation tracks,
                        evidence expectations, and reporting structure for the pilot cohort.
                        Expansion is gated by verification readiness and partner onboarding.
                    </p>
                </div>
            </div>
        </PageShell>
    );
}
