const startups = [
  { name: "ourmedia", year: "2026", status: "active" as const },
  { name: "ugckey.com", year: "2025", status: "active" as const },
  { name: "realtorstudio.ai", year: "2025", status: "sunset" as const },
];

const clients = ["Notion", "Skillshare", "Claude AI", "Opera Browser"];

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-white/10">
      {/* Bottom gradient */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-indigo-950/20 via-transparent to-transparent" />

      <main className="relative z-10 mx-auto max-w-2xl px-6 py-24 sm:py-32">
        {/* Header */}
        <section className="animate-fade-in">
          <h1 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Andrew Hull
          </h1>
          <p className="mt-3 text-lg text-neutral-400">
            Creator · Designer · Coder
          </p>
        </section>

        {/* YouTube */}
        <section
          className="animate-fade-in mt-16"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="glass px-6 py-5">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
                  YouTube
                </p>
                <p className="mt-1 text-xl font-medium text-white">
                  80k subscribers
                </p>
              </div>
              <span className="font-mono text-sm text-neutral-600">2026</span>
            </div>
          </div>
        </section>

        {/* Startups */}
        <section
          className="animate-fade-in mt-12"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-neutral-500">
            Startups
          </h2>
          <div className="space-y-3">
            {startups.map((s) => (
              <div key={s.name} className="glass-subtle px-5 py-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-neutral-300">
                    {s.name}
                  </span>
                  <div className="flex items-center gap-3">
                    {s.status === "sunset" && (
                      <span className="text-xs text-neutral-600">sunset</span>
                    )}
                    <span className="font-mono text-xs text-neutral-600">
                      {s.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Clients */}
        <section
          className="animate-fade-in mt-12"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-neutral-500">
            Worked with
          </h2>
          <div className="flex flex-wrap gap-2">
            {clients.map((c) => (
              <span
                key={c}
                className="glass-subtle px-4 py-2 font-mono text-sm text-neutral-400"
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Agency */}
        <section
          className="animate-fade-in mt-12"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="glass px-6 py-5">
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              Now
            </p>
            <p className="mt-1 text-neutral-300">Starting a creator agency.</p>
          </div>
        </section>

        {/* Manifesto */}
        <section
          className="animate-fade-in mt-16"
          style={{ animationDelay: "0.5s" }}
        >
          <blockquote className="border-l border-neutral-800 pl-5">
            <p className="text-lg leading-relaxed text-neutral-400 italic">
              Empathy is the core of every great video. To deeply understand
              your viewer is the only way to truly create for them.
            </p>
          </blockquote>
        </section>
      </main>
    </div>
  );
}
