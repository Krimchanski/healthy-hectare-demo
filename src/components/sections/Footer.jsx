import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <div className="text-lg font-medium text-gray-900 mb-4">Healthy Hectare</div>
                        <div className="text-sm text-gray-600">An UnPoison Programme</div>
                    </div>

                    <div>
                        <div className="text-sm font-medium text-gray-900 mb-4">Programme</div>
                        <div className="space-y-2 text-sm text-gray-600">
                            <div><a href="#" className="hover:text-gray-900">About</a></div>
                            <div><a href="#" className="hover:text-gray-900">How It Works</a></div>
                            <div><a href="#" className="hover:text-gray-900">Expert Panel</a></div>
                            <div><a href="#" className="hover:text-gray-900">Impact</a></div>
                        </div>
                    </div>

                    <div>
                        <div className="text-sm font-medium text-gray-900 mb-4">Resources</div>
                        <div className="space-y-2 text-sm text-gray-600">
                            <div><a href="#" className="hover:text-gray-900">Research Papers</a></div>
                            <div><a href="#" className="hover:text-gray-900">Methodology</a></div>
                            <div><a href="#" className="hover:text-gray-900">Data Standards</a></div>
                            <div><a href="#" className="hover:text-gray-900">Media Kit</a></div>
                        </div>
                    </div>

                    <div>
                        <div className="text-sm font-medium text-gray-900 mb-4">Contact</div>
                        <div className="space-y-2 text-sm text-gray-600">
                            <div><a href="#" className="hover:text-gray-900">Programme Governance</a></div>
                            <div><a href="#" className="hover:text-gray-900">Research Ethics</a></div>
                            <div><a href="#" className="hover:text-gray-900">Media Enquiries</a></div>
                            <div><a href="#" className="hover:text-gray-900">Privacy Policy</a></div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 text-sm text-gray-500 text-center">
                    © 2025 Healthy Hectare. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
