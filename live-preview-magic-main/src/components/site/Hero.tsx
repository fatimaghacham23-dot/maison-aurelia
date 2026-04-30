import salonHero from "@/assets/salon-hero.jpg";
import { Monogram } from "./Monogram";
import { ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-32 overflow-hidden">
      {/* atmospheric wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 85% 10%, hsl(var(--oxblood) / 0.10), transparent 60%), radial-gradient(700px 500px at 0% 100%, hsl(var(--forest) / 0.08), transparent 60%)",
        }}
      />

      <div className="container-editorial relative">
        {/* Side rail */}
        <div className="absolute left-0 top-32 hidden lg:flex flex-col items-center gap-4">
          <span className="h-16 w-px bg-gold/50" />
          <span className="side-rail">N° 01 — Salon</span>
          <span className="h-16 w-px bg-gold/50" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* LEFT — type */}
          <div className="lg:col-span-7 lg:pl-10 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-10 px-4 py-2 border border-gold-soft rounded-sm bg-parchment-soft/60 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="label-eyebrow">Private Cultural Salon · By Invitation</span>
            </div>

            <h1 className="font-display text-[36px] leading-[1.04] sm:text-6xl lg:text-[88px] lg:leading-[0.96] text-charcoal tracking-tight">
              An invitation to the
              <br />
              <span className="italic font-light text-oxblood">inner world</span>
              <br />
              of contemporary{" "}
              <span className="italic font-light text-forest">culture.</span>
            </h1>

            <p className="mt-10 max-w-xl text-lg text-charcoal/80 leading-relaxed">
              Maison Aurelia is a private digital salon for selected cultural experiences, artist stories, and refined patron engagement &mdash; presented quietly, for a small circle of considered guests.
            </p>

            {/* Refined CTA block (not just buttons) */}
            <div className="mt-12 panel p-5 sm:p-6 max-w-xl">
              <div className="flex items-center gap-4 mb-5">
                <Monogram size={32} />
                <div className="flex-1">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-gold-deep">Salon Access</p>
                  <p className="font-display text-lg text-charcoal leading-tight">Curated access. Quietly presented.</p>
                </div>
              </div>
              <div className="hairline-gold mb-5" />
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#inquire" className="btn-primary flex-1">
                  <span>Request Access</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a href="#salon" className="btn-gold flex-1">
                  View the Concept
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — layered composition */}
          <div className="lg:col-span-5 relative animate-drift-in">
            <div className="relative h-[440px] sm:h-[560px] lg:h-[720px]">
              {/* Main artwork */}
              <figure className="absolute inset-y-0 right-0 w-[80%] sm:w-[78%] panel overflow-hidden shadow-elevated">
                <div className="h-full w-full">
                  <img
                    src={salonHero}
                    alt="A cinematic salon interior with a single gilt-framed painting under warm light."
                    className="h-full w-full object-cover"
                    width={1080}
                    height={1440}
                  />
                </div>
                {/* gold corner detail */}
                <div className="absolute top-3 left-3 w-8 h-px bg-gold" />
                <div className="absolute top-3 left-3 w-px h-8 bg-gold" />
                <div className="absolute bottom-3 right-3 w-8 h-px bg-gold" />
                <div className="absolute bottom-3 right-3 w-px h-8 bg-gold" />
              </figure>

              {/* Invitation card overlay */}
              <div className="absolute bottom-6 sm:bottom-8 left-0 w-[68%] sm:w-[60%] lg:w-[58%] panel p-4 sm:p-6 z-10 shadow-elevated bg-parchment">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.32em] text-gold-deep">Invitation</p>
                    <p className="font-display text-xs italic text-charcoal/70 mt-1">N° 0241 / Reserved</p>
                  </div>
                  <Monogram size={24} variant="oxblood" className="sm:hidden" />
                  <Monogram size={28} variant="oxblood" className="hidden sm:block" />
                </div>
                <div className="hairline-gold mb-3 sm:mb-4" />
                <p className="font-display italic text-sm sm:text-lg text-charcoal leading-snug">
                  &ldquo;The salon opens to those who arrive listening.&rdquo;
                </p>
                <div className="mt-3 sm:mt-4 flex items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-charcoal/60">
                  <span>Maison Aurelia</span>
                  <span className="text-oxblood">Sealed</span>
                </div>
              </div>

              {/* monogram float — desktop only, avoid mobile clutter */}
              <div className="absolute -top-2 -right-2 panel bg-oxblood-deep p-4 hidden lg:block">
                <Monogram size={36} variant="parchment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
