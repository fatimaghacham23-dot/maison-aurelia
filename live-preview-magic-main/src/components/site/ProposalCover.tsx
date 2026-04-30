import { ArrowDown } from "lucide-react";
import { Monogram } from "./Monogram";

const meta = [
  { label: "Sector", value: "Arts & Culture" },
  { label: "Format", value: "Digital Experience" },
  { label: "Role", value: "Identity / Web / Experience" },
];

export const ProposalCover = () => {
  const handleEnter = () => {
    const target =
      document.getElementById("scroll-scenes") ||
      document.getElementById("site-start");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="case-study-cover"
      className="relative min-h-screen w-full overflow-hidden flex flex-col scroll-mt-20 pt-16 sm:pt-20"
      style={{
        background:
          "radial-gradient(120% 80% at 50% 0%, hsl(var(--parchment-soft)) 0%, hsl(var(--parchment)) 45%, hsl(var(--parchment-deep)) 100%)",
      }}
    >
      {/* Paper grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(hsl(25 14% 12% / 0.06) 1px, transparent 1px), radial-gradient(hsl(25 14% 12% / 0.04) 1px, transparent 1px)",
          backgroundSize: "3px 3px, 7px 7px",
          backgroundPosition: "0 0, 1px 2px",
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 50%, transparent 55%, hsl(25 14% 10% / 0.18) 100%)",
        }}
      />

      {/* Decorative corner brackets — kept clear of the fixed nav */}
      <CornerBracket className="top-20 left-6 sm:top-24 sm:left-8" />
      <CornerBracket className="top-20 right-6 sm:top-24 sm:right-8" rotate={90} />
      <CornerBracket className="bottom-6 right-6 sm:bottom-8 sm:right-8" rotate={180} />
      <CornerBracket className="bottom-6 left-6 sm:bottom-8 sm:left-8" rotate={270} />

      {/* Top bar — sits below the fixed nav */}
      <header className="relative z-10 container-editorial pt-6 sm:pt-8 flex items-center justify-between gap-4">
        <span className="label-eyebrow !text-[hsl(var(--tobacco))]">
          Selected Studio Concept
        </span>
        <span className="label-eyebrow hidden sm:inline-block">
          Case № 01 · MMXXVI
        </span>
        <span className="label-eyebrow sm:hidden">№ 01</span>
      </header>

      {/* Side rails */}
      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <span className="side-rail">Studio Archive — Selected Works</span>
      </div>
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-10">
        <span className="side-rail !text-[hsl(var(--tobacco))]">
          Concept Sample · Volume I
        </span>
      </div>

      {/* Center stage */}
      <div className="relative z-10 flex-1 container-editorial flex flex-col items-center justify-center text-center py-12 sm:py-16">
        {/* Monogram */}
        <div className="relative mb-6 sm:mb-8">
          <div
            aria-hidden
            className="absolute inset-0 -m-6 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, hsl(var(--gold) / 0.18), transparent 70%)",
            }}
          />
          <Monogram size={64} variant="oxblood" className="relative" />
        </div>

        {/* Eyebrow */}
        <p
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.5em] text-[hsl(var(--tobacco))] mb-5 sm:mb-7"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          A Studio Concept
        </p>

        {/* Main title */}
        <h1
          className="font-display text-[hsl(var(--oxblood-deep))] text-[2.6rem] leading-[1.02] sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] tracking-[-0.02em]"
        >
          Maison <span className="italic text-[hsl(var(--oxblood))]">Aurelia</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-5 sm:mt-6 text-[11px] sm:text-[12px] uppercase tracking-[0.42em] text-[hsl(var(--gold-deep))]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Private Cultural Salon
        </p>

        {/* Gold flourish */}
        <div className="flex items-center gap-3 mt-7 sm:mt-9">
          <span className="h-px w-12 sm:w-20 bg-[hsl(var(--gold)/0.5)]" />
          <span className="text-[hsl(var(--gold))] text-base">✦</span>
          <span className="h-px w-12 sm:w-20 bg-[hsl(var(--gold)/0.5)]" />
        </div>

        {/* Description */}
        <p
          className="mt-6 sm:mt-8 max-w-xl text-[hsl(var(--charcoal)/0.78)] leading-relaxed px-2"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.125rem" }}
        >
          A refined digital experience for cultural access, patron engagement,
          and artistic legacy &mdash; conceived as a quiet salon for those who
          move within the field.
        </p>

        {/* Metadata blocks */}
        <dl className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[hsl(var(--gold)/0.35)] border border-[hsl(var(--gold)/0.35)] rounded-sm overflow-hidden max-w-2xl w-full mx-auto">
          {meta.map((m) => (
            <div
              key={m.label}
              className="bg-[hsl(var(--parchment)/0.7)] backdrop-blur-[1px] px-5 sm:px-6 py-4 sm:py-5 text-left"
            >
              <dt
                className="text-[9px] sm:text-[10px] uppercase tracking-[0.36em] text-[hsl(var(--gold-deep))] mb-1.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {m.label}
              </dt>
              <dd
                className="text-[12px] sm:text-[13px] uppercase tracking-[0.18em] text-[hsl(var(--charcoal))]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {m.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* CTA */}
        <button
          onClick={handleEnter}
          className="btn-primary mt-12 sm:mt-14 group"
          aria-label="View Case Study"
        >
          <span>View Case Study</span>
          <ArrowDown
            size={14}
            className="relative transition-transform duration-500 group-hover:translate-y-0.5"
            strokeWidth={1.5}
          />
        </button>
      </div>

      {/* Footer block — subtle studio credits */}
      <footer className="relative z-10 container-editorial pb-8 sm:pb-10">
        <div className="hairline-gold mb-6 sm:mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 items-end text-center sm:text-left">
          <div className="sm:text-left">
            <p className="label-eyebrow mb-1.5">Studio</p>
            <p
              className="text-[hsl(var(--oxblood-deep))] text-lg sm:text-xl tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Dugnad Solutions
            </p>
          </div>

          <div className="sm:text-center order-first sm:order-none">
            <p className="label-eyebrow mb-1.5 !text-[hsl(var(--tobacco))]">
              Selected Work
            </p>
            <p
              className="text-[hsl(var(--charcoal))] text-sm tracking-[0.18em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Concept · Vol. I
            </p>
          </div>

          <div className="sm:text-right">
            <p className="label-eyebrow mb-1.5">Powered by</p>
            <p
              className="text-[hsl(var(--forest-deep))] text-lg sm:text-xl tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Pulvent
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

const CornerBracket = ({
  className = "",
  rotate = 0,
}: {
  className?: string;
  rotate?: number;
}) => (
  <div
    aria-hidden
    className={`absolute z-10 ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path
        d="M2 14 L2 2 L14 2"
        stroke="hsl(var(--gold))"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M2 20 L2 8"
        stroke="hsl(var(--gold))"
        strokeWidth="0.4"
        opacity="0.4"
      />
      <path
        d="M8 2 L20 2"
        stroke="hsl(var(--gold))"
        strokeWidth="0.4"
        opacity="0.4"
      />
    </svg>
  </div>
);
