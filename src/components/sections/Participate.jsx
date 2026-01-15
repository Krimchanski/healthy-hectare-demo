import React from "react";
import Section from "../layout/Section";
import { Link } from "react-router-dom";

export default function Participate() {
    return (
        <Section
            id="participate"
            className="bg-gray-50 border-y border-gray-200"
            eyebrow="Participation Architecture"
            title="Phase I Participation Tracks"
            subtitle="Select the appropriate track to submit an expression of interest. Submissions are reviewed against Phase I eligibility and verification criteria, and the team responds with next steps."
            headerClassName="text-center"
        >
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white p-12 border border-gray-200">
                    <h4 className="text-2xl font-light text-gray-900 mb-6">For Farms</h4>
                    <div className="space-y-6 mb-10 text-gray-700">
                        <div>
                            <div className="font-medium text-gray-900 mb-2">Purpose</div>
                            <div className="text-sm">
                                Participate in Phase I field programmes to support pesticide reduction while contributing evidence suitable for policy and regulatory pathways.
                            </div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900 mb-2">What You Gain</div>
                            <div className="text-sm">
                                Transition support, agronomic guidance, performance monitoring, and structured reporting aligned to programme methods.
                            </div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900 mb-2">Requirements</div>
                            <div className="text-sm">
                                Protocol adherence, agreed data sharing, and collaboration with the programme research and implementation teams.
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/participate/farm"
                        className="w-full bg-gray-900 text-white px-6 py-4 text-sm hover:bg-gray-800 transition text-center inline-block"
                    >
                        Register a Farm →
                    </Link>
                </div>

                <div className="bg-white p-12 border border-gray-200">
                    <h4 className="text-2xl font-light text-gray-900 mb-6">For Funders</h4>
                    <div className="space-y-6 mb-10 text-gray-700">
                        <div>
                            <div className="font-medium text-gray-900 mb-2">Purpose</div>
                            <div className="text-sm">
                                Fund verification-ready transition infrastructure with measurable outcomes, governance safeguards, and policy relevance.
                            </div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900 mb-2">What You Support</div>
                            <div className="text-sm">
                                Field programme delivery, data and standards development, and independent review pathways as Phase I scales.
                            </div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900 mb-2">Engagement</div>
                            <div className="text-sm">
                                Structured partnership discussions aligned to scope, verification criteria, and reporting requirements.
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/participate/funder"
                        className="w-full bg-gray-900 text-white px-6 py-4 text-sm hover:bg-gray-800 transition text-center inline-block"
                    >
                        Partner as a Funder →
                    </Link>
                </div>

                <div className="bg-white p-12 border border-gray-200">
                    <h4 className="text-2xl font-light text-gray-900 mb-6">For Researchers</h4>
                    <div className="space-y-6 mb-10 text-gray-700">
                        <div>
                            <div className="font-medium text-gray-900 mb-2">Purpose</div>
                            <div className="text-sm">
                                Contribute to method development, evidence standards, and analysis frameworks that keep programme claims traceable and reviewable.
                            </div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900 mb-2">What You Access</div>
                            <div className="text-sm">
                                Collaboration on protocols and measurement design, with defined pathways for analysis and publication as governance permits.
                            </div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900 mb-2">Engagement</div>
                            <div className="text-sm">
                                Participation aligned to Phase I verification criteria, ethics boundaries, and data stewardship requirements.
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/participate/research"
                        className="w-full bg-gray-900 text-white px-6 py-4 text-sm hover:bg-gray-800 transition text-center inline-block"
                    >
                        Join as a Research Partner →
                    </Link>
                </div>
            </div>
        </Section>
    );
}
