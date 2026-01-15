import React from "react";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="pt-24 pb-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
                    {/* LEFT COLUMN — TEXT */}
                    <div>
                        <h1 className="text-6xl font-light text-gray-900 leading-[1.1] mb-8 tracking-tight">
                            Healthy Hectare
                        </h1>

                        <p className="text-2xl text-gray-900 font-light mb-6 leading-relaxed">
                            A verification-ready agricultural transition programme
                        </p>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                            A science-led programme infrastructure supporting hazardous pesticide reduction
                            while protecting yields, livelihoods, and food security — with methods designed
                            for traceability, review, and regulatory use.
                        </p>

                        <p className="text-sm text-gray-500 mb-10">
                            Developed with researchers, agronomists, toxicologists, and policy stakeholders.
                        </p>

                        <div className="flex flex-wrap gap-8 mb-10 text-xs font-medium text-gray-600">
                            {["Expert-led", "Field-implementable", "Regulator-aligned", "Audit-ready data"].map(
                                (t) => (
                                    <div key={t} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                                        {t}
                                    </div>
                                )
                            )}
                        </div>

                        {/* CTA BUTTONS */}
                        <div className="flex gap-4">
                            <Link
                                to="/participate"
                                className="bg-gray-900 text-white px-6 py-3 text-sm hover:bg-gray-800 transition inline-block"
                            >
                                Apply →
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT COLUMN — VISUAL */}
                    <div className="relative">
                        <div className="aspect-[4/5] bg-gradient-to-br from-green-50 to-emerald-100 rounded-sm relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Globe className="w-64 h-64 text-green-900/10" />
                            </div>

                            <div className="absolute top-8 right-8 bg-white p-6 rounded-sm shadow-lg border border-gray-100 max-w-xs">
                                <div className="text-sm font-medium text-gray-900 mb-1">Phase I</div>
                                <div className="text-sm text-gray-600">Pilot cohort intake</div>
                            </div>

                            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-sm shadow-lg border border-gray-100 max-w-xs">
                                <div className="text-sm font-medium text-gray-900 mb-1">Verification-first</div>
                                <div className="text-sm text-gray-600">Methods and governance aligned</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
