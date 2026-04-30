import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { Monogram } from "./Monogram";
import salonHero from "@/assets/salon-hero.jpg";
import studioDetail from "@/assets/studio-detail.jpg";
import invitationCard from "@/assets/invitation-card.jpg";

/**
 * useScene
 * Adds `.scene-in` to the section when it crosses the threshold.
 * Triggers once, then disconnects — no replay on subsequent scrolls.
 */
function useScene<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("scene-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.22, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

const d = (ms: number): CSSProperties => ({ ["--d" as string]: `${ms}ms` });

/* ----------------- Shared scene shell ----------------- */
function SceneShell({
  id,
  className = "",
  style,
  children,
}: {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const ref = useScene<HTMLElement>();
  return (
    <section
      ref={ref}
      id={id}
      className={`relative w-full overflow-hidden flex items-center justify-center min-h-[88vh] md:min-h-screen ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}

/* ----------------- Reusable atoms ----------------- */
function PaperGrain({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 mix-blend-multiply"
      style={{
        opacity,
        backgroundImage:
          "radial-gradient(hsl(25 14% 12% / 0.12) 1px, transparent 1px), radial-gradient(hsl(25 14% 12% / 0.08) 1px, transparent 1px)",
        backgroundSize: "3px 3px, 7px 7px",
        backgroundPosition: "0 0, 1px 2px",
      }}
    />
  );
}

function GoldGrain({ opacity = 0.07 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 mix-blend-screen"
      style={{
        opacity,
        backgroundImage: "radial-gradient(hsl(var(--gold)) 1px, transparent 1px)",
        backgroundSize: "5px 5px",
      }}
    />
  );
}

function ChapterLabel({ n, label, light = false }: { n: string; label: string; light?: boolean }) {
  return (
    <div
      className={`scene-reveal flex items-center gap-3 ${
        light ? "text-[hsl(var(--gold))]" : "text-[hsl(var(--gold-deep))]"
      }`}
      style={d(80)}
    >
      <span className={`h-px w-8 bg-current opacity-70`} />
      <span className="text-[10px] uppercase tracking-[0.4em] font-medium">
        Chapter {n} · {label}
      </span>
    </div>
  );
}

/* ============================================================
   SCENE 1 — The Invitation
   ============================================================ */
function Scene1() {
  return (
    <SceneShell
      className="text-charcoal"
      style={{
        background:
          "radial-gradient(120% 80% at 50% 0%, hsl(var(--parchment-soft)) 0%, hsl(var(--parchment)) 50%, hsl(var(--parchment-deep)) 100%)",
      }}
    >
      <PaperGrain opacity={0.5} />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 50%, transparent 55%, hsl(25 14% 10% / 0.18) 100%)",
        }}
      />

      <div className="container-editorial relative py-20 sm:py-24 lg:py-28 flex flex-col items-center text-center">
        <ChapterLabel n="I" label="The Invitation" />

        <div className="scene-drift mt-10 sm:mt-12 scene-float" style={d(220)}>
          <Monogram size={56} variant="oxblood" />
        </div>

        <h2
          className="scene-reveal font-display text-[34px] leading-[1.06] sm:text-5xl md:text-6xl lg:text-[80px] lg:leading-[0.98] tracking-tight text-[hsl(var(--oxblood-deep))] mt-10 sm:mt-12 max-w-[18ch]"
          style={d(380)}
        >
          An invitation into a{" "}
          <span className="italic text-[hsl(var(--oxblood))]">quieter</span>
          <br className="hidden sm:block" /> cultural world.
        </h2>

        <div
          className="scene-rule mt-10 sm:mt-12 h-px w-44 sm:w-72"
          style={{
            ...d(620),
            background:
              "linear-gradient(to right, transparent, hsl(var(--gold) / 0.85), transparent)",
          }}
        />

        <p
          className="scene-reveal mt-8 sm:mt-10 text-[11px] sm:text-[12px] uppercase tracking-[0.42em] text-[hsl(var(--tobacco))]"
          style={d(780)}
        >
          Private access · Curated presence · Lasting legacy
        </p>
      </div>
    </SceneShell>
  );
}

/* ============================================================
   SCENE 2 — The Room
   ============================================================ */
function Scene2() {
  return (
    <SceneShell
      className="text-parchment"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--oxblood-deep)) 0%, hsl(358 42% 14%) 100%)",
      }}
    >
      {/* atmospheric oxblood/forest glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 540px at 80% 0%, hsl(var(--gold) / 0.16), transparent 60%), radial-gradient(900px 540px at 0% 100%, hsl(var(--forest) / 0.30), transparent 60%)",
        }}
      />
      <GoldGrain opacity={0.05} />

      {/* side rail */}
      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <span className="side-rail !text-[hsl(var(--gold))]">
          The Room — Private Salon
        </span>
      </div>

      <div className="container-editorial relative py-20 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT — copy */}
          <div className="lg:col-span-6 order-2 lg:order-none">
            <ChapterLabel n="II" label="The Room" light />

            <h2
              className="scene-reveal font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.05] tracking-tight mt-8"
              style={d(280)}
            >
              Designed for those
              <br />
              <span className="italic text-[hsl(var(--gold))]">
                who do not need
              </span>
              <br />
              to be convinced.
            </h2>

            <div
              className="scene-rule mt-8 h-px w-40"
              style={{
                ...d(560),
                background:
                  "linear-gradient(to right, hsl(var(--gold) / 0.9), transparent)",
              }}
            />

            <p
              className="scene-reveal mt-8 text-[15px] leading-relaxed text-parchment/75 max-w-md"
              style={d(720)}
            >
              A digital presence for patrons, collectors, institutions, and the
              quiet circles that move culture forward.
            </p>
          </div>

          {/* RIGHT — layered cards */}
          <div className="lg:col-span-6 order-1 lg:order-none">
            <div className="relative h-[360px] sm:h-[460px] lg:h-[560px]">
              {/* Back artwork */}
              <figure
                className="scene-mask absolute inset-y-0 right-0 w-[82%] sm:w-[78%] panel-dark overflow-hidden"
                style={d(160)}
              >
                <img
                  src={salonHero}
                  alt="A private salon interior under warm light."
                  className="h-full w-full object-cover opacity-90"
                  loading="lazy"
                  width={1080}
                  height={1440}
                />
                {/* gold corners */}
                <span className="absolute top-3 left-3 w-8 h-px bg-gold" />
                <span className="absolute top-3 left-3 w-px h-8 bg-gold" />
                <span className="absolute bottom-3 right-3 w-8 h-px bg-gold" />
                <span className="absolute bottom-3 right-3 w-px h-8 bg-gold" />
              </figure>

              {/* Foreground invitation card */}
              <div
                className="scene-drift absolute bottom-6 sm:bottom-8 left-0 w-[68%] sm:w-[58%] panel p-4 sm:p-6 z-10 shadow-elevated bg-parchment text-charcoal"
                style={d(520)}
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.32em] text-[hsl(var(--gold-deep))]">
                      Salon
                    </p>
                    <p className="font-display text-xs italic text-charcoal/70 mt-1">
                      N° 0003 · Reserved
                    </p>
                  </div>
                  <Monogram size={26} variant="oxblood" />
                </div>
                <div className="hairline-gold mb-3 sm:mb-4" />
                <p className="font-display italic text-sm sm:text-lg leading-snug">
                  &ldquo;Enter slowly. The room remembers.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SceneShell>
  );
}

/* ============================================================
   SCENE 3 — The Object
   ============================================================ */
function Scene3() {
  return (
    <SceneShell
      className="text-charcoal bg-parchment-soft"
    >
      <PaperGrain opacity={0.45} />

      <div className="container-editorial relative py-20 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT — image w/ mask reveal */}
          <div className="lg:col-span-7">
            <div className="relative">
              <figure
                className="scene-mask aspect-[5/4] sm:aspect-[6/5] lg:aspect-[5/4] w-full overflow-hidden border border-[hsl(var(--gold)/0.4)]"
                style={d(120)}
              >
                <img
                  src={studioDetail}
                  alt="A close detail from the studio: paper, pigment, and quiet light."
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1280}
                  height={1024}
                />
              </figure>

              {/* oversized numeral, top-left, breaks frame */}
              <span
                className="scene-reveal num-display absolute -top-6 sm:-top-8 -left-1 sm:-left-3 text-[120px] sm:text-[180px] lg:text-[240px] leading-none select-none pointer-events-none"
                style={{ ...d(360), color: "hsl(var(--oxblood) / 0.92)" }}
                aria-hidden
              >
                03
              </span>
            </div>
          </div>

          {/* RIGHT — caption */}
          <div className="lg:col-span-5">
            <ChapterLabel n="III" label="The Object" />

            <h2
              className="scene-reveal font-display text-4xl sm:text-5xl lg:text-[60px] leading-[1.05] tracking-tight mt-8 text-[hsl(var(--charcoal))]"
              style={d(280)}
            >
              Where every detail
              <br />
              <span className="italic text-[hsl(var(--forest))]">
                carries weight.
              </span>
            </h2>

            <div
              className="scene-rule mt-8 h-px w-40"
              style={{
                ...d(560),
                background:
                  "linear-gradient(to right, hsl(var(--gold) / 0.9), transparent)",
              }}
            />

            <p
              className="scene-reveal mt-8 text-[15px] leading-relaxed text-charcoal/70 max-w-md"
              style={d(720)}
            >
              Typography, silence, spacing, and rhythm become part of the
              experience. Nothing is ornamental. Nothing is loud.
            </p>

            <div
              className="scene-reveal mt-10 inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-[hsl(var(--gold-deep))]"
              style={d(880)}
            >
              <span className="h-px w-10 bg-[hsl(var(--gold))]" />
              <span>Plate I — Studio Detail</span>
            </div>
          </div>
        </div>
      </div>
    </SceneShell>
  );
}

/* ============================================================
   SCENE 4 — The Trust
   ============================================================ */
function Scene4() {
  const points = [
    { n: "01", title: "Cultural seriousness", body: "A presence shaped for the field, not for an audience." },
    { n: "02", title: "Private access", body: "Considered correspondence, never a public list." },
    { n: "03", title: "Long-term value", body: "Built to be remembered, not refreshed." },
  ];

  return (
    <SceneShell
      className="text-[hsl(var(--parchment))]"
      style={{
        background:
          "linear-gradient(180deg, hsl(28 32% 26%) 0%, hsl(28 32% 18%) 100%)",
      }}
    >
      <PaperGrain opacity={0.32} />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 540px at 50% 0%, hsl(var(--gold) / 0.16), transparent 60%)",
        }}
      />

      <div className="container-editorial relative py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center">
            <ChapterLabel n="IV" label="The Trust" light />
          </div>

          <h2
            className="scene-reveal font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.05] tracking-tight mt-8"
            style={d(280)}
          >
            Built for{" "}
            <span className="italic text-[hsl(var(--gold))]">trust</span>
            <br />
            before attention.
          </h2>

          <div
            className="scene-rule mx-auto mt-10 h-px w-48 sm:w-64"
            style={{
              ...d(540),
              background:
                "linear-gradient(to right, transparent, hsl(var(--gold) / 0.9), transparent)",
            }}
          />
        </div>

        <ul className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {points.map((p, i) => (
            <li
              key={p.n}
              className="scene-drift relative panel-dark p-6 sm:p-8 text-left"
              style={d(640 + i * 220)}
            >
              {/* gold corner */}
              <span className="absolute top-3 left-3 w-8 h-px bg-[hsl(var(--gold))]" />
              <span className="absolute top-3 left-3 w-px h-8 bg-[hsl(var(--gold))]" />

              <span className="num-display text-5xl sm:text-6xl">{p.n}</span>
              <div
                className="mt-5 h-px w-10"
                style={{ background: "hsl(var(--gold) / 0.7)" }}
              />
              <h3 className="font-display text-xl sm:text-2xl mt-5 leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-parchment/70">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </SceneShell>
  );
}

/* ============================================================
   SCENE 5 — The Entrance
   ============================================================ */
function Scene5() {
  const handleEnter = () => {
    const el = document.getElementById("top");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <SceneShell
      id="scenes-end"
      className="text-[hsl(var(--parchment))]"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 50%, hsl(100 22% 14%) 0%, hsl(100 22% 9%) 60%, hsl(100 26% 6%) 100%)",
      }}
    >
      <GoldGrain opacity={0.06} />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 540px at 50% 0%, hsl(var(--gold) / 0.18), transparent 60%)",
        }}
      />

      {/* corner brackets */}
      <CornerBracket className="top-6 left-6 sm:top-8 sm:left-8" />
      <CornerBracket className="top-6 right-6 sm:top-8 sm:right-8" rotate={90} />
      <CornerBracket className="bottom-6 right-6 sm:bottom-8 sm:right-8" rotate={180} />
      <CornerBracket className="bottom-6 left-6 sm:bottom-8 sm:left-8" rotate={270} />

      {/* faint background image */}
      <img
        src={invitationCard}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-screen"
        loading="lazy"
      />

      <div className="container-editorial relative py-20 sm:py-24 lg:py-28 flex flex-col items-center text-center">
        <ChapterLabel n="V" label="The Entrance" light />

        {/* Wax seal */}
        <div className="scene-drift mt-10 sm:mt-12 relative" style={d(260)}>
          <div
            aria-hidden
            className="absolute inset-0 -m-8 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, hsl(var(--gold) / 0.22), transparent 70%)",
            }}
          />
          <div
            className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full flex items-center justify-center border border-[hsl(var(--gold)/0.45)] scene-float"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, hsl(var(--oxblood)) 0%, hsl(var(--oxblood-deep)) 70%)",
              boxShadow:
                "inset 0 1px 0 hsl(var(--gold) / 0.25), 0 18px 44px -14px hsl(0 0% 0% / 0.6)",
            }}
          >
            <Monogram size={56} variant="gold" />
          </div>
        </div>

        <h2
          className="scene-reveal font-display text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[1.05] tracking-tight mt-12 max-w-[18ch]"
          style={d(420)}
        >
          When you are ready,
          <br />
          <span className="italic text-[hsl(var(--gold))]">
            the room opens.
          </span>
        </h2>

        <div
          className="scene-rule mx-auto mt-10 h-px w-44 sm:w-72"
          style={{
            ...d(640),
            background:
              "linear-gradient(to right, transparent, hsl(var(--gold) / 0.9), transparent)",
          }}
        />

        <div
          className="scene-reveal mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          style={d(820)}
        >
          <button
            onClick={handleEnter}
            className="btn-gold-dark group"
            aria-label="Enter the Experience"
          >
            <span>Enter the Experience</span>
            <ArrowDown
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-500 group-hover:translate-y-0.5"
            />
          </button>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.36em] text-parchment/55">
            Or continue scrolling
          </span>
        </div>
      </div>
    </SceneShell>
  );
}

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
      <path d="M2 14 L2 2 L14 2" stroke="hsl(var(--gold))" strokeWidth="0.8" strokeLinecap="round" opacity="0.85" />
      <path d="M2 20 L2 8" stroke="hsl(var(--gold))" strokeWidth="0.4" opacity="0.45" />
      <path d="M8 2 L20 2" stroke="hsl(var(--gold))" strokeWidth="0.4" opacity="0.45" />
    </svg>
  </div>
);

/* ============================================================
   Public component
   ============================================================ */
export const ScrollScenesIntro = () => {
  return (
    <div id="scroll-scenes" className="relative isolate">
      <Scene1 />
      <Scene2 />
      <Scene3 />
      <Scene4 />
      <Scene5 />
    </div>
  );
};
