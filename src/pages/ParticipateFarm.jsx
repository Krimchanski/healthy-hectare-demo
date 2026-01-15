import React from "react";

export default function ParticipateFarm() {
    return (
        <div className="min-h-screen bg-white">
            <main className="px-6">
                <div className="max-w-3xl mx-auto py-20">
                    <h1 className="text-5xl font-light text-gray-900 mb-6">
                        Farm Registration
                    </h1>

                    <p className="text-lg text-gray-600 leading-relaxed mb-10">
                        Submit an expression of interest to participate in Healthy Hectare field
                        programmes. The team will respond with eligibility criteria and next
                        steps.
                    </p>

                    <form
                        name="healthy-hectare-farm"
                        method="POST"
                        action="/thank-you"
                        data-netlify="true"
                        className="space-y-6 border border-gray-200 p-10"
                    >
                        <input type="hidden" name="form-name" value="healthy-hectare-farm" />

                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Farm name
                            </label>
                            <input
                                name="farm_name"
                                required
                                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    Contact person
                                </label>
                                <input
                                    name="contact_name"
                                    required
                                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    Country / region
                                </label>
                                <input
                                    name="region"
                                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    Primary crop system
                                </label>
                                <input
                                    name="crop_system"
                                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Notes (optional)
                            </label>
                            <textarea
                                name="notes"
                                rows="5"
                                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gray-900 text-white px-6 py-4 text-sm hover:bg-gray-800 transition"
                        >
                            Submit Registration →
                        </button>
                    </form>

                    <p className="text-xs text-gray-500 mt-6 leading-relaxed">
                        Phase I pilot intake: submissions are reviewed for eligibility and cohort fit.
                        Information is used only to assess participation and coordinate next steps.
                    </p>
                </div>
            </main>
        </div>
    );
}
