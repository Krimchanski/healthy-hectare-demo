export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      {/* Header */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">
            Healthy Hectare
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-neutral-600">Programme</a>
            <a href="#" className="hover:text-neutral-600">Research</a>
            <a href="#" className="hover:text-neutral-600">Partners</a>
            <a href="#" className="hover:text-neutral-600">Apply</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="border-b border-neutral-200">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-semibold tracking-tight leading-tight">
                The Healthy Hectare Challenge
              </h1>

              <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
                A research-grade transition programme for farms moving away from
                hazardous pesticides — designed for regulators, scientists,
                funders, and serious agricultural operators.
              </p>

              <div className="mt-10 flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                >
                  Apply as a Farm
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium hover:bg-neutral-50"
                >
                  Partner or Fund
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
