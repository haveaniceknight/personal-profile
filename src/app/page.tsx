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
    <div className="relative flex min-h-screen flex-col font-mono selection:bg-white/10">
      {/* Bottom line */}
      <div className="pointer-events-none fixed inset-x-0 bottom-8 flex justify-center px-6">
        <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <main className="mx-auto w-full max-w-xl flex-1 px-6 py-28 sm:py-36">
        {/* Name */}
        <div className="animate-fade-in">
          <h1 className="text-lg text-neutral-200">Andrew Hull</h1>
          <p className="mt-1 text-sm text-neutral-600">
            creator · designer · coder
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {/* YouTube */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.08s" }}
          >
            <p className="text-xs text-neutral-600">youtube</p>
            <p className="mt-0.5 text-sm text-neutral-400">
              80k subscribers{" "}
              <span className="text-neutral-700">· 2026</span>
            </p>
          </div>

          {/* Startups */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.16s" }}
          >
            <p className="text-xs text-neutral-600">startups</p>
            <div className="mt-1.5 space-y-1">
              {startups.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-2 text-sm"
                >
                  <span className="text-neutral-400">{s.name}</span>
                  <span className="text-neutral-700">{s.year}</span>
                  {s.status === "sunset" && (
                    <span className="text-neutral-700 italic">sunset</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Companies */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.24s" }}
          >
            <p className="text-xs text-neutral-600">
              companies i&apos;ve worked with
            </p>
            <p className="mt-1.5 text-sm text-neutral-400">
              {companies.join(" · ")}
            </p>
          </div>

          {/* Now */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.32s" }}
          >
            <p className="text-xs text-neutral-600">now</p>
            <p className="mt-0.5 text-sm text-neutral-400">
              starting a creator agency
            </p>
          </div>

          {/* Manifesto */}
          <div
            className="animate-fade-in pt-4"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-sm leading-relaxed text-neutral-600 italic">
              &ldquo;Empathy is the core of every great video. To deeply
              understand your viewer is the only way to truly create for
              them.&rdquo;
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
