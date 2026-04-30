import { useReveal } from "@/hooks/useReveal";

const items = [
  { n: "I", title: "Private previews", body: "First sight of new work, shared in confidence before any wider release." },
  { n: "II", title: "Artist stories", body: "Long-form letters and recordings from inside the studio &mdash; rarely public, never amplified." },
  { n: "III", title: "Curated releases", body: "Considered editions, hand-numbered and offered first to the salon." },
  { n: "IV", title: "Collector notes", body: "Personal correspondence on provenance, care, and the longer life of a work." },
  { n: "V", title: "Cultural gatherings", body: "Intimate evenings hosted in selected European settings, by invitation only." },
  { n: "VI", title: "Archive access", body: "Quiet entry to material the public will not see &mdash; sketches, references, recollections." },
];

export const Access = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="access" className="relative py-28 sm:py-36 lg:py-44 bg-parchment-soft">
      {/* subtle top divider */}
      <div className="absolute top-0 inset-x-0 hairline-gold" />

      <div className="container-editorial">
        <div ref={ref} className="fade-up">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16 lg:mb-20">
            <div className="lg:col-span-7">
              <div className="flex items-baseline gap-5 mb-6">
                <span className="num-display text-7xl sm:text-8xl leading-none">03</span>
                <span className="label-eyebrow pb-3">Selected Access</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] text-charcoal">
                Six ways to be received
                <br />
                <span className="italic text-oxblood">into the house.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[15px] leading-relaxed text-charcoal/75 max-w-md">
                Each access is offered with intention. We do not publish it widely &mdash; the value is in the choosing of the room, and of those who are asked into it.
              </p>
            </div>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {items.map((it, idx) => (
              <article
                key={it.n}
                className={`group panel relative p-7 sm:p-9 min-h-[260px] flex flex-col justify-between transition-all duration-700 hover:-translate-y-1.5 hover:shadow-elevated ${
                  idx === 1 ? "lg:translate-y-8" : ""
                } ${idx === 4 ? "lg:translate-y-8" : ""}`}
              >
                {/* gold corner */}
                <div className="absolute top-0 left-0 w-10 h-px bg-gold opacity-70" />
                <div className="absolute top-0 left-0 w-px h-10 bg-gold opacity-70" />

                <div className="flex items-start justify-between">
                  <span className="num-display text-4xl">{it.n}</span>
                  <span className="text-[10px] uppercase tracking-[0.32em] text-charcoal/40 mt-2">
                    Access
                  </span>
                </div>

                <div className="mt-12">
                  <h3 className="font-display text-2xl sm:text-[26px] text-charcoal mb-3 group-hover:text-oxblood transition-colors duration-500">
                    {it.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-charcoal/65">{it.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
