import React from "react";
import Section from "../layout/Section";
import { Link } from "react-router-dom";

export default function Participate() {
    return (
        <Section
            id="participate"
            className="bg-gray-50 border-y border-gray-200"
            eyebrow="Get Involved"
            title="Participation Tracks"
            headerClassName="text-center"
        >
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white p-12 border border-gray-200">
                    <h4 className="text-2xl font-light text-gray-900 mb-6">For Farms</h4>
                    <div className="space-y-6 mb-10 text-gray-700">
                        <div>
                            <div className="font-medium text-gray-900 mb-2">Why Participate</div>
                            <div className="text-sm">
                                Access transition support, technical expertise, and financial mechanisms while contributing to policy-relevant research.
                            </div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900 mb-2">What You Gain</div>
                            <div className="text-sm">
                                Expert agronomic guidance, performance monitoring, peer network, and potential premium market access.
                            </div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900 mb-2">Requirements</div>
                            <div className="text-sm">
                                Commitment to data sharing, protocol adherence, multi-year participation, and collaboration with research team.
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/participate/farm"
                        className="w-full bg-gray-900 text-white px-6 py-4 text-sm hover:bg-gray-800 transition text-center inline-block"
                    >
                        Register Your Farm →
                    </Link>

                </div>


                <div className="bg-white p-12 border border-gray-200">
                    <h4 className="text-2xl font-light text-gray-900 mb-6">
                        For Funders & Researchers
                    </h4>
                    <div className="space-y-6 mb-10 text-gray-700">
                        <div>
                            <div className="font-medium text-gray-900 mb-2">Funding Thesis</div>
                            <div className="text-sm">
                                Support scalable agricultural transition infrastructure with measurable outcomes and regulatory impact.
                            </div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900 mb-2">Research Agenda</div>
                            <div className="text-sm">
                                Contribute to publication pipeline, access field data, and collaborate on methodology development.
                            </div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900 mb-2">Global Scaling</div>
                            <div className="text-sm">
                                Model designed for replication across regions, crop systems, and policy contexts.
                            </div>
                        </div>
                    </div>
                    <Link
                        to="/participate/funder"
                        className="w-full bg-gray-900 text-white px-6 py-4 text-sm hover:bg-gray-800 transition text-center inline-block"
                    >
                        Partner with the Programme →
                    </Link>
                </div>
            </div>
        </Section>
    );
}
