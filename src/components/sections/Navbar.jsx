import React, { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white border-b border-gray-200"
                    : "bg-white/95 backdrop-blur-sm"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="text-xl font-semibold text-gray-900 tracking-tight">
                            Healthy Hectare
                        </div>
                        <div className="text-xs text-gray-500 border-l border-gray-300 pl-2 ml-2">
                            An UnPoison Programme
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-8 text-sm">
                        <a href="#programme" className="text-gray-700 hover:text-gray-900">
                            Programme
                        </a>
                        <a href="#how-it-works" className="text-gray-700 hover:text-gray-900">
                            How It Works
                        </a>
                        <a href="#expert-panel" className="text-gray-700 hover:text-gray-900">
                            Expert Panel
                        </a>
                        <a href="#impact" className="text-gray-700 hover:text-gray-900">
                            Impact
                        </a>
                        <a href="#partners" className="text-gray-700 hover:text-gray-900">
                            Partners
                        </a>
                        <a href="#participate" className="text-gray-700 hover:text-gray-900">
                            Participate
                        </a>
                    </div>

                    <button className="bg-gray-900 text-white px-5 py-2 text-sm hover:bg-gray-800 transition">
                        Partner with the Programme
                    </button>
                </div>
            </div>
        </nav>
    );
}
