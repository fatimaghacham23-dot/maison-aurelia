import { useReveal } from "@/hooks/useReveal";
import { Monogram } from "./Monogram";

export const Quote = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-28 sm:py-36 lg:py-44 bg-oxblood-deep overflow-hidden">
      {/* atmospheric */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(900px 500px at 50% 50%, hsl(var(--gold) / 0.10), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--gold)) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />

      <div className="container-editorial relative">
        <div ref={ref} className="fade-up max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-10">
            <Monogram size={56} variant="gold" />
          </div>
          <span className="label-eyebrow-light">Brand Statement</span>

          <blockquote className="mt-10">
            <p className="font-display italic font-light text-parchment text-[40px] sm:text-6xl lg:text-[88px] leading-[1.04] tracking-tight">
              <span className="text-gold/70 mr-2">&ldquo;</span>
              Culture is not consumed.
              <br />
              It is{" "}
              <span className="text-gold not-italic font-normal">entered,</span>{" "}
              slowly.
              <span className="text-gold/70 ml-2">&rdquo;</span>
            </p>
          </blockquote>

          <div className="mt-12 flex items-center justify-center gap-5">
            <span className="h-px w-12 bg-gold/60" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">Maison Aurelia</span>
            <span className="h-px w-12 bg-gold/60" />
          </div>
        </div>
      </div>
    </section>
  );
};
