import React from "react";
import { MapPin } from "lucide-react";
import Section from "../layout/Section";

export default function Footprint() {
    return (
        <Section eyebrow="Geographic Scope" title="Where Healthy Hectare Operates" className="bg-white">
            <div className="grid lg:grid-cols-2 gap-16">
                <div>
                    <div className="space-y-6">
                        <div className="border-l-2 border-gray-900 pl-6">
                            <div className="font-medium text-gray-900 mb-2">Active Countries</div>
                            <div className="text-sm text-gray-600">
                                Germany · France · Netherlands · Denmark · Sweden · United Kingdom
                            </div>
                        </div>

                        <div className="border-l-2 border-gray-300 pl-6">
                            <div className="font-medium text-gray-900 mb-2">Crop Systems</div>
                            <div className="text-sm text-gray-600">
                                Cereals · Vegetables · Fruit · Viticulture · Oilseeds · Pulse crops · Mixed systems · Pasture
                            </div>
                        </div>

                        <div className="border-l-2 border-gray-300 pl-6">
                            <div className="font-medium text-gray-900 mb-2">Climate Zones</div>
                            <div className="text-sm text-gray-600">Continental · Oceanic · Mediterranean</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 aspect-square flex items-center justify-center border border-gray-200">
                    <div className="text-center">
                        <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <div className="text-sm text-gray-500">Geographic visualization</div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
