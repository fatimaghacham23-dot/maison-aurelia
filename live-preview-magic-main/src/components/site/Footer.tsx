import { Monogram } from "./Monogram";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-oxblood-deep text-parchment pt-20 pb-10 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(800px 400px at 50% 0%, hsl(var(--gold) / 0.10), transparent 60%)" }}
      />

      <div className="container-editorial relative">
        {/* top monogram band */}
        <div className="flex flex-col items-center text-center pb-14">
          <Monogram size={56} variant="gold" />
          <p className="mt-6 font-display text-3xl sm:text-4xl">
            Maison <span className="italic text-gold">Aurelia</span>
          </p>
          <p className="mt-3 text-[10px] uppercase tracking-[0.4em] text-gold">
            Private Cultural Salon
          </p>
        </div>

        <div className="hairline-gold" />

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 pt-14">
          <div className="md:col-span-5">
            <p className="text-[14px] leading-relaxed text-parchment/70 max-w-sm">
              An invitation to the inner world of contemporary culture &mdash; selected experiences, artist stories, and refined patron engagement.
            </p>
          </div>

          <div className="md:col-span-3">
            <span className="label-eyebrow-light">Correspondence</span>
            <ul className="mt-5 space-y-3 text-[14px] text-parchment/85">
              <li>
                <a href="mailto:salon@maisonaurelia.example" className="link-underline hover:text-gold transition-colors">
                  salon@maisonaurelia.example
                </a>
              </li>
              <li className="text-parchment/55">By written invitation only</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <span className="label-eyebrow-light">Credits</span>
            <ul className="mt-5 space-y-3 text-[14px] text-parchment/85">
              <li>Prepared by <span className="text-gold">Dugnad Solutions</span></li>
              <li>Powered by <span className="text-gold">Pulvent</span></li>
            </ul>
          </div>
        </div>

        <div className="hairline-gold mt-16" />

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[10px] uppercase tracking-[0.32em] text-parchment/50">
          <span>© {year} Maison Aurelia</span>
          <span>A portfolio sample · All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};
