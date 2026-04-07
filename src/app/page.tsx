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

function Dashed() {
  return (
    <div className="my-6 h-px w-full overflow-hidden">
      <div className="h-px w-full border-t border-dashed border-neutral-700/50" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col font-mono text-sm selection:bg-white/10">
      {/* Solid bottom line */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-px bg-white/80" />

      <main className="mx-auto w-full max-w-xl flex-1 px-6 pb-20 pt-24 sm:pt-32">
        {/* Name */}
        <div className="animate-fade-in">
          <span className="font-bold text-neutral-200">Andrew Hull</span>
          <span className="ml-2 text-neutral-600">(creator · designer · coder)</span>
        </div>

        <div className="mt-2 animate-fade-in pl-4 text-neutral-500" style={{ animationDelay: "0.05s" }}>
          <span className="mr-2 text-neutral-700">└</span>
          youtube · 80k subs · 2026
        </div>

        <Dashed />

        {/* Startups */}
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="font-bold text-neutral-200">Startups</span>
        </div>
        <div className="mt-2 space-y-0.5 pl-4">
          {startups.map((s, i) => (
            <div
              key={s.name}
              className="animate-fade-in text-neutral-500"
              style={{ animationDelay: `${0.12 + i * 0.04}s` }}
            >
              <span className="mr-2 text-neutral-700">
                {i === startups.length - 1 ? "└" : "├"}
              </span>
              <span className="text-neutral-400">{s.name}</span>
              <span className="ml-2 text-neutral-700">{s.year}</span>
              {s.status === "sunset" && (
                <span className="ml-2 text-neutral-700 italic">sunset</span>
              )}
            </div>
          ))}
        </div>

        <Dashed />

        {/* Companies */}
        <div className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
          <span className="font-bold text-neutral-200">Companies I&apos;ve worked with</span>
        </div>
        <div className="mt-2 space-y-0.5 pl-4">
          {companies.map((c, i) => (
            <div
              key={c}
              className="animate-fade-in text-neutral-500"
              style={{ animationDelay: `${0.27 + i * 0.03}s` }}
            >
              <span className="mr-2 text-neutral-700">├</span>
              <span className="text-neutral-400">{c}</span>
            </div>
          ))}
          <div
            className="animate-fade-in text-neutral-500"
            style={{ animationDelay: `${0.27 + companies.length * 0.03}s` }}
          >
            <span className="mr-2 text-neutral-700">└</span>
            <span className="text-neutral-600 italic">& many more</span>
          </div>
        </div>

        <Dashed />

        {/* Now */}
        <div className="animate-fade-in" style={{ animationDelay: "0.45s" }}>
          <span className="font-bold text-neutral-200">Now</span>
          <span className="ml-2 text-neutral-500">starting a creator agency</span>
        </div>

        <Dashed />

        {/* Manifesto */}
        <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-neutral-600 italic">
            &ldquo;Empathy is the core of every great video. To deeply
            understand your viewer is the only way to truly create for
            them.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
