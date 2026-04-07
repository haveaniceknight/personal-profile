const startups = [
  { name: "ourmedia", year: "2026", status: "active" as const },
  { name: "ugckey.com", year: "2025", status: "active" as const },
  { name: "realtorstudio.ai", year: "2025", status: "sunset" as const },
];

const companies = [
  "Notion",
  "Skillshare",
  "Claude AI",
  "Opera Browser",
  "Replit",
];

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-white/10">
      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-[35vh] bg-gradient-to-t from-neutral-950/40 to-transparent" />

      <main className="relative z-10 mx-auto max-w-xl px-6 py-28 sm:py-36">
        {/* Header */}
        <section className="animate-fade-in">
          <h1 className="text-2xl font-medium tracking-tight text-white">
            Andrew Hull
          </h1>
          <p className="mt-2 text-[15px] text-neutral-500">
            Creator · Designer · Coder
          </p>
        </section>

        <div className="my-10 h-px bg-white/[0.06]" />

        {/* YouTube */}
        <section
          className="animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-neutral-600">
                YouTube
              </p>
              <p className="mt-1 text-[15px] text-neutral-300">
                80k subscribers
              </p>
            </div>
            <span className="font-mono text-xs text-neutral-600">2026</span>
          </div>
        </section>

        <div className="my-10 h-px bg-white/[0.06]" />

        {/* Startups */}
        <section
          className="animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="mb-5 text-xs font-medium uppercase tracking-widest text-neutral-600">
            Startups
          </h2>
          <div className="space-y-4">
            {startups.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between"
              >
                <span className="font-mono text-[14px] text-neutral-400">
                  {s.name}
                </span>
                <div className="flex items-center gap-3">
                  {s.status === "sunset" && (
                    <span className="text-xs text-neutral-700">sunset</span>
                  )}
                  <span className="font-mono text-xs text-neutral-700">
                    {s.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="my-10 h-px bg-white/[0.06]" />

        {/* Companies */}
        <section
          className="animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="mb-5 text-xs font-medium uppercase tracking-widest text-neutral-600">
            Companies I&apos;ve worked with
          </h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {companies.map((c) => (
              <span
                key={c}
                className="text-[14px] text-neutral-400"
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        <div className="my-10 h-px bg-white/[0.06]" />

        {/* Agency */}
        <section
          className="animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-600">
            Now
          </p>
          <p className="mt-1 text-[15px] text-neutral-400">
            Starting a creator agency.
          </p>
        </section>

        <div className="my-10 h-px bg-white/[0.06]" />

        {/* Manifesto */}
        <section
          className="animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-[15px] leading-relaxed text-neutral-500 italic">
            &ldquo;Empathy is the core of every great video. To deeply
            understand your viewer is the only way to truly create for
            them.&rdquo;
          </p>
        </section>
      </main>
    </div>
  );
}
