import React from "react";
import { Globe } from "lucide-react";

export default function Hero() {
    return (
        <section className="pt-24 pb-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
                    <div>
                        <h1 className="text-6xl font-light text-gray-900 leading-[1.1] mb-8 tracking-tight">
                            Healthy Hectare
                        </h1>
                        <p className="text-2xl text-gray-900 font-light mb-6 leading-relaxed">
                            A global agricultural transition challenge
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                            A science-led programme helping farms reduce hazardous pesticide
                            use while protecting yields, livelihoods, and food security.
                        </p>
                        <p className="text-sm text-gray-500 mb-10">
                            Designed with researchers, agronomists, toxicologists and
                            policymakers.
                        </p>

                        <div className="flex flex-wrap gap-8 mb-10 text-xs font-medium text-gray-600">
                            {["Expert-led", "Field-tested", "Regulator-aligned", "Data-driven"].map(
                                (t) => (
                                    <div key={t} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                                        {t}
                                    </div>
                                )
                            )}
                        </div>

                        <div className="flex gap-4">
                            <button className="bg-gray-900 text-white px-6 py-3 text-sm hover:bg-gray-800 transition">
                                Become a Partner →
                            </button>
                            <button className="border border-gray-300 text-gray-900 px-6 py-3 text-sm hover:bg-gray-50 transition">
                                Register a Farm
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/5] bg-gradient-to-br from-green-50 to-emerald-100 rounded-sm relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Globe className="w-64 h-64 text-green-900/10" />
                            </div>

                            <div className="absolute top-8 right-8 bg-white p-6 rounded-sm shadow-lg border border-gray-100 max-w-xs">
                                <div className="text-4xl font-light text-gray-900 mb-1">6</div>
                                <div className="text-sm text-gray-600">Active Countries</div>
                            </div>

                            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-sm shadow-lg border border-gray-100 max-w-xs">
                                <div className="text-4xl font-light text-gray-900 mb-1">2,847</div>
                                <div className="text-sm text-gray-600">Hectares Under Transition</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
