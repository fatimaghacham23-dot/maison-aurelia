import approachWarm from "@/assets/approach-warm.jpg";
import { useReveal } from "@/hooks/useReveal";

const principles = [
  { k: "Patience", v: "We move at the pace of the work, not the calendar." },
  { k: "Restraint", v: "We choose less, and choose carefully — across every detail." },
  { k: "Warmth", v: "We treat every correspondence as a personal one." },
  { k: "Craft", v: "We work with people who measure their work in decades." },
];

export const Approach = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="approach" className="py-24 sm:py-32 lg:py-36">
      <div className="container-editorial">
        <div ref={ref} className="fade-up grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <figure className="panel overflow-hidden">
              <div className="aspect-[5/4] w-full">
                <img
                  src={approachWarm}
                  alt="A still life on warm marble — an open monograph, ceramic vessel, and dried olive."
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1280}
                  height={1024}
                />
              </div>
            </figure>
          </div>

          <div className="lg:col-span-6">
            <span className="label-eyebrow">III — Approach</span>
            <h2 className="mt-6 font-serif text-3xl sm:text-5xl lg:text-[56px] leading-[1.05] text-espresso">
              Quiet by design,
              <br />
              <span className="italic font-light text-bronze">considered by hand.</span>
            </h2>

            <p className="mt-8 text-[15px] sm:text-base leading-relaxed text-espresso-soft max-w-xl">
              The house holds a small set of guiding principles. They shape how we choose, how we write, and how we welcome the people who come to us.
            </p>

            <ul className="mt-10 divide-y divide-hairline border-y border-hairline">
              {principles.map((p) => (
                <li key={p.k} className="grid grid-cols-12 gap-6 py-5 items-baseline">
                  <span className="col-span-12 sm:col-span-3 font-serif text-xl text-espresso">{p.k}</span>
                  <span className="col-span-12 sm:col-span-9 text-[14px] leading-relaxed text-muted-foreground">{p.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
