import React from "react";

export default function Closing() {
    return (
        <section className="py-24 px-6 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-3xl font-light leading-relaxed mb-12">
                    Healthy Hectare is building the infrastructure for the next generation of agriculture. A system that protects farmers, ecosystems, and public health — without compromising food security.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-gray-900 px-8 py-4 text-sm hover:bg-gray-100 transition">
                        Join the Programme →
                    </button>
                    <button className="border border-white text-white px-8 py-4 text-sm hover:bg-white/10 transition">
                        Become a Partner →
                    </button>
                </div>
            </div>
        </section>
    );
}
