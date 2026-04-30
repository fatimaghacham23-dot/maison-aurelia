import { useReveal } from "@/hooks/useReveal";
import { Monogram } from "./Monogram";
import { ArrowUpRight } from "lucide-react";

export const FinalInvitation = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-oxblood-deep text-parchment">
      {/* atmospheric layers */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(900px 540px at 80% 0%, hsl(var(--gold) / 0.18), transparent 60%), radial-gradient(900px 540px at 0% 100%, hsl(var(--forest) / 0.30), transparent 60%)",
        }}
      />
      {/* paper grain on dark */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] mix-blend-screen"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--gold)) 1px, transparent 1px)",
          backgroundSize: "5px 5px",
        }}
      />

      {/* top gold rule */}
      <div className="absolute inset-x-0 top-0 hairline-gold opacity-80" />

      <div className="container-editorial relative py-24 sm:py-32 lg:py-40">
        <div ref={ref} className="fade-up grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT — wax-seal mark */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-baseline gap-5 mb-8">
              <span className="num-display text-7xl sm:text-8xl leading-none text-gold">07</span>
              <span className="label-eyebrow-light pb-3">Closing Invitation</span>
            </div>

            {/* wax-seal style monogram */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 -m-6 rounded-full"
                style={{
                  background:
                    "radial-gradient(closest-side, hsl(var(--gold) / 0.22), transparent 70%)",
                }}
              />
              <div
                className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full flex items-center justify-center border border-gold/40"
                style={{
                  background:
                    "radial-gradient(circle at 35% 30%, hsl(var(--oxblood)) 0%, hsl(var(--oxblood-deep)) 70%)",
                  boxShadow:
                    "inset 0 1px 0 hsl(var(--gold) / 0.25), 0 16px 40px -12px hsl(0 0% 0% / 0.55)",
                }}
              >
                <Monogram size={56} variant="gold" />
              </div>
            </div>

            <p className="mt-10 text-[11px] uppercase tracking-[0.4em] text-gold">
              Sealed · Maison Aurelia
            </p>
            <p className="mt-3 font-display italic text-parchment/70 text-base sm:text-lg max-w-sm">
              A correspondence kept in the second person, between hand and hand.
            </p>
          </div>

          {/* RIGHT — headline + CTA */}
          <div className="lg:col-span-7 lg:pl-6">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[68px] leading-[1.04] tracking-tight text-parchment">
              When you are ready,
              <br />
              <span className="italic text-gold">the room remains.</span>
            </h2>

            <div className="mt-10 max-w-xl">
              <div className="hairline-gold mb-8 opacity-80" />
              <p className="text-[15px] sm:text-base leading-relaxed text-parchment/75">
                Maison Aurelia receives a small number of new correspondents each season.
                There is no urgency, and no public list. The invitation is held quietly
                until it is answered.
              </p>
            </div>

            {/* CTA cluster */}
            <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-5">
              <a href="#inquire" className="btn-gold-dark group">
                <span>Begin Correspondence</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </a>
              <a
                href="#salon"
                className="text-[11px] uppercase tracking-[0.32em] text-parchment/70 hover:text-gold transition-colors duration-500 link-underline"
              >
                Return to the Salon
              </a>
            </div>

            {/* Footnote rail */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {[
                ["I", "By written request"],
                ["II", "Replied personally"],
                ["III", "Held in confidence"],
              ].map(([n, label]) => (
                <div key={n} className="flex flex-col gap-2">
                  <span className="num-display text-2xl sm:text-3xl">{n}</span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-parchment/55 leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* bottom gold rule */}
      <div className="absolute inset-x-0 bottom-0 hairline-gold opacity-60" />
    </section>
  );
};
