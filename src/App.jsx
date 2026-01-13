import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Leaf, Users, TrendingUp, FileText, Shield, MapPin, BarChart3 } from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experts = [
    {
      name: "Dr. Elena Kovács",
      title: "Lead Toxicologist",
      institution: "European Food Safety Authority",
      discipline: "Pesticide Risk Assessment",
      initials: "EK"
    },
    {
      name: "Prof. James Thornton",
      title: "Agricultural Systems",
      institution: "Wageningen University & Research",
      discipline: "Crop System Modelling",
      initials: "JT"
    },
    {
      name: "Dr. Amina Hassan",
      title: "Environmental Health",
      institution: "WHO Collaborating Centre",
      discipline: "Public Health Impact",
      initials: "AH"
    },
    {
      name: "Prof. Lars Bergström",
      title: "Agronomy Lead",
      institution: "Swedish University of Agricultural Sciences",
      discipline: "Integrated Pest Management",
      initials: "LB"
    },
    {
      name: "Dr. Sarah Chen",
      title: "Agricultural Economics",
      institution: "Cornell University",
      discipline: "Farm Transition Economics",
      initials: "SC"
    },
    {
      name: "Dr. Marcus Weber",
      title: "Regulatory Science",
      institution: "Former BfR, Germany",
      discipline: "Policy Integration",
      initials: "MW"
    },
    {
      name: "Prof. Maria Santos",
      title: "Soil Science",
      institution: "University of São Paulo",
      discipline: "Soil Health Metrics",
      initials: "MS"
    },
    {
      name: "Dr. Robert Kyeyune",
      title: "Food Systems",
      institution: "FAO Technical Advisory",
      discipline: "Food Security Analysis",
      initials: "RK"
    },
    {
      name: "Prof. Anna Lindström",
      title: "Biodiversity",
      institution: "Stockholm Resilience Centre",
      discipline: "Ecosystem Services",
      initials: "AL"
    }
  ];

  const metrics = [
    { value: "2,847", label: "Hectares Under Transition", sublabel: "Across 6 countries" },
    { value: "73", label: "Participating Farms", sublabel: "8 crop systems" },
    { value: "24", label: "Active Field Trials", sublabel: "Control vs transition" },
    { value: "9", label: "Research Partners", sublabel: "Universities & institutes" }
  ];

  const partners = [
    "Wageningen University & Research",
    "Swedish Agricultural University",
    "Cornell University",
    "FAO Technical Programme",
    "EFSA Observer Network",
    "Rothamsted Research",
    "ETH Zürich",
    "University of Copenhagen"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white border-b border-gray-200' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-xl font-semibold text-gray-900 tracking-tight">Healthy Hectare</div>
              <div className="text-xs text-gray-500 border-l border-gray-300 pl-2 ml-2">An UnPoison Programme</div>
            </div>
            <div className="hidden lg:flex items-center gap-8 text-sm">
              <a href="#programme" className="text-gray-700 hover:text-gray-900">Programme</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-gray-900">How It Works</a>
              <a href="#expert-panel" className="text-gray-700 hover:text-gray-900">Expert Panel</a>
              <a href="#impact" className="text-gray-700 hover:text-gray-900">Impact</a>
              <a href="#partners" className="text-gray-700 hover:text-gray-900">Partners</a>
              <a href="#participate" className="text-gray-700 hover:text-gray-900">Participate</a>
            </div>
            <button className="bg-gray-900 text-white px-5 py-2 text-sm hover:bg-gray-800 transition">
              Partner with the Programme
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
                A science-led programme helping farms reduce hazardous pesticide use while protecting yields, livelihoods, and food security.
              </p>
              <p className="text-sm text-gray-500 mb-10">
                Designed with researchers, agronomists, toxicologists and policymakers.
              </p>

              <div className="flex flex-wrap gap-8 mb-10 text-xs font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                  Expert-led
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                  Field-tested
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                  Regulator-aligned
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                  Data-driven
                </div>
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

      {/* Problem Framing */}
      <section id="programme" className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">Context</h2>
              <h3 className="text-4xl font-light text-gray-900 mb-12 leading-tight">Why Healthy Hectare Exists</h3>

              <div className="space-y-8 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Global agriculture remains dependent on synthetic pesticides despite mounting evidence of human health and ecological harm.
                </p>
                <p>
                  Regulatory frameworks are tightening across jurisdictions. The EU has banned over 70 active ingredients in the past decade. WHO guidelines continue to lower acceptable exposure thresholds.
                </p>
                <p>
                  Farmers face transition risk with limited evidence on yield protection, economic viability, and practical implementation pathways.
                </p>
                <p>
                  Current policy mechanisms lack the field-level data needed to design effective, equitable transition programmes at scale.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 border border-gray-200">
                <div className="text-sm font-medium text-gray-500 mb-2">Global Pesticide Use</div>
                <div className="text-5xl font-light text-gray-900 mb-2">4.2M</div>
                <div className="text-sm text-gray-600">Tonnes of active ingredients annually</div>
              </div>

              <div className="bg-white p-8 border border-gray-200">
                <div className="text-sm font-medium text-gray-500 mb-2">Regulatory Action</div>
                <div className="text-5xl font-light text-gray-900 mb-2">72</div>
                <div className="text-sm text-gray-600">Active ingredients banned by EU since 2011</div>
              </div>

              <div className="bg-white p-8 border border-gray-200">
                <div className="text-sm font-medium text-gray-500 mb-2">Farmer Transition Gap</div>
                <div className="text-5xl font-light text-gray-900 mb-2">Limited</div>
                <div className="text-sm text-gray-600">Evidence on viable pathways at commercial scale</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Healthy Hectare */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">Programme Definition</h2>
            <h3 className="text-4xl font-light text-gray-900 mb-6">What Is Healthy Hectare?</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="mb-6">
                <Leaf className="w-10 h-10 text-gray-900" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">A Transition Challenge</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Farms participate in a structured reduction programme, measured over seasons and incentivised by performance and resilience metrics.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Multi-year participation tracks</li>
                <li>• Baseline to transition measurement</li>
                <li>• Financial support mechanisms</li>
              </ul>
            </div>

            <div>
              <div className="mb-6">
                <BarChart3 className="w-10 h-10 text-gray-900" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">A Research Platform</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Field trials with control plots, open methodology, and peer-reviewed analysis produce actionable evidence.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Standardised protocols</li>
                <li>• Independent verification</li>
                <li>• Publication pipeline</li>
              </ul>
            </div>

            <div>
              <div className="mb-6">
                <Shield className="w-10 h-10 text-gray-900" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">A Policy Engine</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Generate evidence for regulators, design transition pathways, and align with emerging standards frameworks.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Regulatory engagement strategy</li>
                <li>• Standards alignment</li>
                <li>• Policy briefing materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">Programme Mechanics</h2>
            <h3 className="text-4xl font-light text-gray-900 mb-6">How the Programme Works</h3>
          </div>

          <div className="relative">
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-300 hidden lg:block"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                {
                  num: "01",
                  title: "Farm Onboarding",
                  items: ["Baseline assessment", "Usage audit", "Risk profiling", "Crop system mapping"]
                },
                {
                  num: "02",
                  title: "Pathway Design",
                  items: ["Transition modelling", "Crop-specific protocols", "Economic analysis", "Support planning"]
                },
                {
                  num: "03",
                  title: "Field Monitoring",
                  items: ["Trial implementation", "Yield tracking", "Health metrics", "Cost documentation"]
                },
                {
                  num: "04",
                  title: "Analysis & Reporting",
                  items: ["Data synthesis", "Performance evaluation", "Certification", "Publication"]
                }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-white p-8 border border-gray-200 h-full">
                    <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center text-sm font-medium mb-6 relative z-10">
                      {step.num}
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">{step.title}</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {step.items.map((item, j) => (
                        <li key={j}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Footprint */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">Geographic Scope</h2>
              <h3 className="text-4xl font-light text-gray-900 mb-8">Where Healthy Hectare Operates</h3>

              <div className="space-y-6">
                <div className="border-l-2 border-gray-900 pl-6">
                  <div className="font-medium text-gray-900 mb-2">Active Countries</div>
                  <div className="text-sm text-gray-600">Germany · France · Netherlands · Denmark · Sweden · United Kingdom</div>
                </div>

                <div className="border-l-2 border-gray-300 pl-6">
                  <div className="font-medium text-gray-900 mb-2">Crop Systems</div>
                  <div className="text-sm text-gray-600">Cereals · Vegetables · Fruit · Viticulture · Oilseeds · Pulse crops · Mixed systems · Pasture</div>
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
        </div>
      </section>

      {/* Expert Panel - Hero Section */}
      <section id="expert-panel" className="py-24 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">Scientific Governance</h2>
            <h3 className="text-5xl font-light text-gray-900 mb-8">The Expert Panel</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Programme design, methodology, and data standards are governed by an independent panel of researchers across toxicology, agronomy, environmental health, economics, and regulatory science.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {experts.map((expert, i) => (
              <div key={i} className="bg-white p-8 border border-gray-200 hover:border-gray-300 transition">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-medium text-lg mb-6">
                  {expert.initials}
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-1">{expert.name}</h4>
                <div className="text-sm text-gray-900 mb-2">{expert.title}</div>
                <div className="text-sm text-gray-600 mb-3">{expert.institution}</div>
                <div className="text-xs text-gray-500 pt-3 border-t border-gray-200">
                  {expert.discipline}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-12 border border-gray-200">
            <h4 className="text-xl font-medium text-gray-900 mb-8">Panel Responsibilities</h4>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-gray-700">
              <div className="flex gap-3">
                <div className="text-gray-400 shrink-0">—</div>
                <div>Protocol design and validation for all measurement activities</div>
              </div>
              <div className="flex gap-3">
                <div className="text-gray-400 shrink-0">—</div>
                <div>Independent review of data collection and analysis methods</div>
              </div>
              <div className="flex gap-3">
                <div className="text-gray-400 shrink-0">—</div>
                <div>Peer review preparation and publication oversight</div>
              </div>
              <div className="flex gap-3">
                <div className="text-gray-400 shrink-0">—</div>
                <div>Regulatory liaison and evidence standards compliance</div>
              </div>
              <div className="flex gap-3">
                <div className="text-gray-400 shrink-0">—</div>
                <div>Research ethics and farmer welfare monitoring</div>
              </div>
              <div className="flex gap-3">
                <div className="text-gray-400 shrink-0">—</div>
                <div>Knowledge transfer and capacity building</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Methodology */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">Programme Architecture</h2>
            <h3 className="text-4xl font-light text-gray-900 mb-6">Governance & Scientific Framework</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Design Principles",
                items: ["Farmer-centred", "Evidence-based", "Scalable", "Transparent"]
              },
              {
                title: "Research Protocols",
                items: ["Field trial standards", "Data collection methods", "Control plot design", "Statistical framework"]
              },
              {
                title: "Data Standards",
                items: ["Open data architecture", "Interoperability", "Privacy protection", "Audit trails"]
              },
              {
                title: "Regulatory Alignment",
                items: ["EU framework compliance", "FAO guidelines", "WHO standards", "National policy integration"]
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-gray-50 p-8 border border-gray-200">
                <h4 className="text-lg font-medium text-gray-900 mb-6">{pillar.title}</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a href="#" className="text-xs text-gray-900 hover:text-gray-600 transition">
                    Download documentation →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Traction */}
      <section id="impact" className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">Programme Status</h2>
            <h3 className="text-4xl font-light text-gray-900 mb-6">Impact & Traction</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, i) => (
              <div key={i} className="bg-white p-8 border border-gray-200 text-center">
                <div className="text-5xl font-light text-gray-900 mb-2">{metric.value}</div>
                <div className="text-sm font-medium text-gray-900 mb-1">{metric.label}</div>
                <div className="text-xs text-gray-500">{metric.sublabel}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 border border-gray-200">
              <div className="text-xs font-medium text-gray-500 mb-2 tracking-wider uppercase">Case Study</div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">Mixed Arable Farm, Northern Germany</h4>
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">Farm size</span>
                  <span className="font-medium">240 hectares</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">Crop system</span>
                  <span className="font-medium">Wheat, barley, oilseed rape</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">Pesticide reduction</span>
                  <span className="font-medium">62% (Year 2)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">Yield impact</span>
                  <span className="font-medium">-4.3% (within variance)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-500">Economic result</span>
                  <span className="font-medium">Net positive with support</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 border border-gray-200">
              <div className="text-xs font-medium text-gray-500 mb-2 tracking-wider uppercase">Case Study</div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">Vegetable Producer, Netherlands</h4>
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">Farm size</span>
                  <span className="font-medium">18 hectares</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">Crop system</span>
                  <span className="font-medium">Diverse vegetables, rotation</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">Pesticide reduction</span>
                  <span className="font-medium">87% (Year 2)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">Yield impact</span>
                  <span className="font-medium">+2.1% (improved soil health)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-500">Economic result</span>
                  <span className="font-medium">Premium pricing offset costs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">Institutional Network</h2>
            <h3 className="text-4xl font-light text-gray-900 mb-6">Partners & Supporting Institutions</h3>
          </div>

          <div className="mb-12">
            <div className="text-sm font-medium text-gray-500 mb-6">Research Partners</div>
            <div className="grid md:grid-cols-4 gap-6">
              {partners.map((partner, i) => (
                <div key={i} className="bg-gray-50 p-6 border border-gray-200 text-center text-sm text-gray-700">
                  {partner}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm font-medium text-gray-500 mb-4">Funding Partners</div>
              <div className="space-y-3">
                {["Oak Foundation", "European Climate Foundation", "Feedback Fund"].map((funder, i) => (
                  <div key={i} className="bg-gray-50 p-4 border border-gray-200 text-sm text-gray-700">
                    {funder}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-500 mb-4">Policy Observers</div>
              <div className="space-y-3">
                {["EFSA Technical Network", "WHO Collaborating Centre", "FAO Advisory Group"].map((observer, i) => (
                  <div key={i} className="bg-gray-50 p-4 border border-gray-200 text-sm text-gray-700">
                    {observer}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-500 mb-4">NGO Partners</div>
              <div className="space-y-3">
                {["Pesticide Action Network", "IFOAM Organics", "Soil Association"].map((ngo, i) => (
                  <div key={i} className="bg-gray-50 p-4 border border-gray-200 text-sm text-gray-700">
                    {ngo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participation Tracks */}
      <section id="participate" className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">Get Involved</h2>
            <h3 className="text-4xl font-light text-gray-900 mb-6">Participation Tracks</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-12 border border-gray-200">
              <h4 className="text-2xl font-light text-gray-900 mb-6">For Farms</h4>
              <div className="space-y-6 mb-10 text-gray-700">
                <div>
                  <div className="font-medium text-gray-900 mb-2">Why Participate</div>
                  <div className="text-sm">Access transition support, technical expertise, and financial mechanisms while contributing to policy-relevant research.</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-2">What You Gain</div>
                  <div className="text-sm">Expert agronomic guidance, performance monitoring, peer network, and potential premium market access.</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-2">Requirements</div>
                  <div className="text-sm">Commitment to data sharing, protocol adherence, multi-year participation, and collaboration with research team.</div>
                </div>
              </div>
              <button className="w-full bg-gray-900 text-white px-6 py-4 text-sm hover:bg-gray-800 transition">
                Register Your Farm →
              </button>
            </div>

            <div className="bg-white p-12 border border-gray-200">
              <h4 className="text-2xl font-light text-gray-900 mb-6">For Funders & Researchers</h4>
              <div className="space-y-6 mb-10 text-gray-700">
                <div>
                  <div className="font-medium text-gray-900 mb-2">Funding Thesis</div>
                  <div className="text-sm">Support scalable agricultural transition infrastructure with measurable outcomes and regulatory impact.</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-2">Research Agenda</div>
                  <div className="text-sm">Contribute to publication pipeline, access field data, and collaborate on methodology development.</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-2">Global Scaling</div>
                  <div className="text-sm">Model designed for replication across regions, crop systems, and policy contexts.</div>
                </div>
              </div>
              <button className="w-full bg-gray-900 text-white px-6 py-4 text-sm hover:bg-gray-800 transition">
                Partner with the Programme →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Signalling */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">Policy Integration</h2>
            <h3 className="text-4xl font-light text-gray-900 mb-6">Designed for Regulatory Integration</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Healthy Hectare generates evidence compatible with existing regulatory frameworks and policy development processes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Standards Alignment", desc: "Protocols designed to meet EFSA, WHO, and FAO evidence requirements" },
              { title: "Regulatory Engagement", desc: "Active liaison with national agricultural authorities and policy teams" },
              { title: "Reporting Frameworks", desc: "Data architecture compatible with regulatory submission standards" },
              { title: "Transition Roadmaps", desc: "Policy-ready pathways for scaled pesticide reduction programmes" }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 border border-gray-200">
                <h4 className="text-lg font-medium text-gray-900 mb-4">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
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

      {/* Footer */}
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
    </div>
  );
}