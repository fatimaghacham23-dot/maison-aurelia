import { useReveal } from "@/hooks/useReveal";

export const Founding = () => {
  const ref = useReveal<HTMLDivElement>();
  const filled = 47; // subtle, not aggressive
  const total = 200;
  const pct = (filled / total) * 100;

  return (
    <section id="founding" className="py-24 sm:py-32 lg:py-40 border-t border-hairline/70">
      <div className="container-editorial">
        <div ref={ref} className="fade-up grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="label-eyebrow">III &mdash; Founding</span>
            <h2 className="mt-6 font-serif text-3xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
              The First
              <br />
              <span className="italic font-light">Two Hundred</span>
              <br />
              Members.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-base sm:text-lg leading-relaxed text-ink-soft max-w-xl">
              Founding members receive priority access when the circle opens, including selected invitations and early access to future releases.
            </p>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground max-w-xl">
              The number is held intentionally small to preserve the character of the circle and the quality of correspondence.
            </p>

            <div className="mt-14">
              <div className="flex items-baseline justify-between mb-5">
                <span className="font-serif text-5xl sm:text-6xl text-ink tabular-nums">
                  {String(filled).padStart(3, "0")}
                </span>
                <span className="label-eyebrow">of {total} registered</span>
              </div>
              <div className="h-px w-full bg-hairline relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-1000"
                  style={{ width: `${pct}%`, height: "1px" }}
                />
              </div>
              <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>Open</span>
                <span>By invitation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
