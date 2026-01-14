import React from "react";

export default function ParticipateFunder() {
    return (
        <div className="min-h-screen bg-white">
            <main className="px-6">
                <div className="max-w-3xl mx-auto py-20">
                    <h1 className="text-5xl font-light text-gray-900 mb-6">
                        Partner as a Funder
                    </h1>

                    <p className="text-lg text-gray-600 leading-relaxed mb-10">
                        Healthy Hectare is transition infrastructure. Funding partners support
                        scalable pesticide reduction with measurable outcomes and policy relevance.
                    </p>

                    <form
                        name="healthy-hectare-funder"
                        method="POST"
                        action="/thank-you"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        className="space-y-6 border border-gray-200 p-10"
                    >
                        <input type="hidden" name="form-name" value="healthy-hectare-funder" />

                        <p className="hidden">
                            <label>
                                Don’t fill this out: <input name="bot-field" />
                            </label>
                        </p>

                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Organisation / Foundation
                            </label>
                            <input
                                name="org"
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

                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Funding interest
                            </label>
                            <select
                                name="interest_type"
                                className="w-full border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-900"
                                defaultValue="core"
                            >
                                <option value="core">Core programme funding</option>
                                <option value="trials">Field trial funding</option>
                                <option value="data">Data infrastructure / standards</option>
                                <option value="country">Country / region expansion</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Notes (what would you like to explore?)
                            </label>
                            <textarea
                                name="notes"
                                rows="6"
                                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gray-900 text-white px-6 py-4 text-sm hover:bg-gray-800 transition"
                        >
                            Submit Partnership Interest →
                        </button>
                    </form>

                    <p className="text-xs text-gray-500 mt-6">
                        Demo onboarding form. Submitted data is used for intake-flow testing.
                    </p>
                </div>
            </main>
        </div>
    );
}
