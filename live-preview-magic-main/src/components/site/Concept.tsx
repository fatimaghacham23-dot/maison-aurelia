import { useReveal } from "@/hooks/useReveal";

export const Concept = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="salon" className="relative py-28 sm:py-36 lg:py-44">
      <div className="container-editorial">
        <div ref={ref} className="fade-up grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-5">
              <span className="num-display text-7xl sm:text-8xl leading-none">02</span>
              <span className="label-eyebrow pb-3">The Salon</span>
            </div>
            <div className="hairline-gold mt-8 max-w-[180px]" />
            <p className="mt-8 text-[13px] text-charcoal/60 leading-relaxed max-w-xs">
              A small house, opened only to those who choose to enter slowly.
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] text-charcoal max-w-3xl">
              A private salon
              <br />
              for cultural{" "}
              <span className="italic text-oxblood">presence.</span>
            </h2>

            <div className="mt-12 grid sm:grid-cols-2 gap-10 max-w-3xl">
              <p className="text-[15px] sm:text-base leading-relaxed text-charcoal/85">
                Maison Aurelia is shaped in the European tradition of the studio salon &mdash; a place where work is encountered before it becomes commerce, and where the people closest to it are received as guests, not as audience.
              </p>
              <p className="text-[15px] sm:text-base leading-relaxed text-charcoal/65">
                Everything passes through a single hand. The pace is slow on purpose. What is offered is offered once, and then quietly remembered.
              </p>
            </div>

            <div className="mt-14 inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-gold-deep">
              <span className="h-px w-10 bg-gold" />
              <span>Established in correspondence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
