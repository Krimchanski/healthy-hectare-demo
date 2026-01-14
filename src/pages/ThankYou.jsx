import React from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/layout/PageShell";

export default function ThankYou() {
    return (
        <PageShell
            title="Submission received"
            subtitle="Thank you. Your submission has been logged for programme intake review. A member of the team will respond with next steps."
            maxWidthClass="max-w-4xl"
        >
            <div className="mt-10">
                <div className="flex flex-wrap gap-4">
                    <Link
                        to="/"
                        className="bg-neutral-900 text-white px-6 py-3 text-sm hover:bg-neutral-800 transition"
                    >
                        Return to programme overview →
                    </Link>

                    <Link
                        to="/participate"
                        className="border border-neutral-300 text-neutral-900 px-6 py-3 text-sm hover:bg-neutral-50 transition"
                    >
                        Back to participation hub
                    </Link>
                </div>

                <p className="text-xs text-neutral-500 mt-12">
                    Demo note: this is a prototype intake flow for the Healthy Hectare programme.
                </p>
            </div>
        </PageShell>
    );
}
