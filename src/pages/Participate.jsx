import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";

export default function Participate() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-24 px-6">
                <div className="max-w-7xl mx-auto py-20">

                    <div className="max-w-3xl mb-20">
                        <h1 className="text-5xl font-light text-gray-900 mb-6">
                            Participate in Healthy Hectare
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Healthy Hectare operates as a multi-stakeholder agricultural transition programme.
                            Participation is structured across farms, research institutions, and funding partners.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">

                        {/* Farms */}
                        <div className="border border-gray-200 p-10">
                            <h2 className="text-2xl font-light text-gray-900 mb-6">
                                For Farms
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Commercial farms participate in structured pesticide reduction pathways supported
                                by agronomic guidance, field trials, and transition finance mechanisms.
                            </p>

                            <ul className="space-y-3 text-sm text-gray-600 mb-10">
                                <li>• Multi-season transition programme</li>
                                <li>• Yield and resilience monitoring</li>
                                <li>• Independent verification</li>
                                <li>• Policy-aligned certification</li>
                            </ul>

                            <Link to="/participate/farm" className="inline-block bg-gray-900 text-white px-6 py-3 text-sm hover:bg-gray-800 transition">
                                Register Your Farm →
                            </Link>

                        </div>

                        {/* Funders */}
                        <div className="border border-gray-200 p-10">
                            <h2 className="text-2xl font-light text-gray-900 mb-6">
                                For Funders & Foundations
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Healthy Hectare operates as a scalable transition infrastructure supporting
                                pesticide reduction at commercial scale with measurable outcomes.
                            </p>

                            <ul className="space-y-3 text-sm text-gray-600 mb-10">
                                <li>• Policy-aligned transition model</li>
                                <li>• Multi-country implementation</li>
                                <li>• Measurable impact metrics</li>
                                <li>• Regulatory-grade evidence</li>
                            </ul>

                            <Link to="/participate/funder" className="inline-block bg-gray-900 text-white px-6 py-3 text-sm hover:bg-gray-800 transition">
                                Partner with the Programme →

                            </Link>
                        </div>

                        {/* Researchers */}
                        <div className="border border-gray-200 p-10">
                            <h2 className="text-2xl font-light text-gray-900 mb-6">
                                For Researchers & Institutions
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Healthy Hectare operates as an open research platform supporting field trials,
                                protocol development, and policy-relevant evidence generation.
                            </p>

                            <ul className="space-y-3 text-sm text-gray-600 mb-10">
                                <li>• Field trial access</li>
                                <li>• Publication pipeline</li>
                                <li>• Data standards development</li>
                                <li>• Regulatory engagement</li>
                            </ul>

                            <Link to="/participate/research" className="inline-block bg-gray-900 text-white px-6 py-3 text-sm hover:bg-gray-800 transition">
                                Join as a Research Partner →
                            </Link>

                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
