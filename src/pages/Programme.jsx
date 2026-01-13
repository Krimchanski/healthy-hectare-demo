import React from "react";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";

export default function Programme() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-24 px-6">
                <div className="max-w-7xl mx-auto py-16">
                    <h1 className="text-5xl font-light text-gray-900 mb-6">Programme</h1>
                    <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                        Dedicated programme detail page (demo placeholder). This will later hold
                        participation tracks, governance documents, timelines, and field protocol
                        downloads in a structured format.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
