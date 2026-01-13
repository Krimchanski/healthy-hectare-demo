export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Healthy Hectare</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#" className="hover:underline">How it works</a>
            <a href="#" className="hover:underline">For Farmers</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-extrabold leading-tight mb-6">
                Build soil health.
                Grow resilience.
                Measure what matters.
              </h2>

              <p className="text-xl text-neutral-600 mb-8">
                Healthy Hectare helps farmers track, improve, and prove regenerative performance — from soil to satellite.
              </p>

              <div className="flex gap-4">
                <button className="px-8 py-4 rounded-xl bg-black text-white font-semibold hover:bg-neutral-800">
                  Join the pilot
                </button>
                <button className="px-8 py-4 rounded-xl border border-neutral-300 font-semibold hover:bg-neutral-100">
                  Learn more
                </button>
              </div>
            </div>

            <div className="bg-neutral-100 rounded-3xl h-[420px] flex items-center justify-center text-neutral-400 text-lg">
              Dashboard preview
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-10">
        <div className="max-w-7xl mx-auto px-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} Healthy Hectare. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
