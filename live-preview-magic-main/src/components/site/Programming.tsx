import { useReveal } from "@/hooks/useReveal";
import prog1 from "@/assets/programming-1.jpg";
import prog2 from "@/assets/programming-2.jpg";
import prog3 from "@/assets/programming-3.jpg";

const rows = [
  {
    n: "01",
    title: "Conversations",
    sub: "In private rooms",
    body: "Long-form exchanges between the artist, curators, and a small circle of guests &mdash; held offline, in selected European cities.",
    img: prog3,
  },
  {
    n: "02",
    title: "Editions",
    sub: "Hand-numbered, hand-released",
    body: "Considered editions, prepared slowly with collaborating presses and offered first to the salon before any wider audience.",
    img: prog2,
  },
  {
    n: "03",
    title: "Invitations",
    sub: "Sealed, by name",
    body: "Personal invitations to studio visits, viewings, and gatherings &mdash; sent in writing, accepted in writing.",
    img: prog1,
  },
];

export const Programming = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="programming" className="py-28 sm:py-36 lg:py-44">
      <div className="container-editorial">
        <div ref={ref} className="fade-up">
          <div className="flex items-baseline gap-5 mb-6">
            <span className="num-display text-7xl sm:text-8xl leading-none">04</span>
            <span className="label-eyebrow pb-3">Cultural Programming</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] text-charcoal max-w-3xl mb-16 lg:mb-20">
            Three movements,
            <br />
            <span className="italic text-forest">held across the year.</span>
          </h2>

          <div className="space-y-px bg-hairline/60">
            {rows.map((r) => (
              <article
                key={r.n}
                className="group bg-parchment grid grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center py-8 sm:py-10 lg:py-12 px-2 sm:px-6 transition-colors duration-700 hover:bg-parchment-soft"
              >
                {/* number */}
                <div className="col-span-2 lg:col-span-1">
                  <span className="num-display text-4xl sm:text-5xl lg:text-6xl">{r.n}</span>
                </div>

                {/* title */}
                <div className="col-span-10 lg:col-span-4">
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-[40px] leading-tight text-charcoal group-hover:text-oxblood transition-colors duration-500">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-gold-deep">{r.sub}</p>
                </div>

                {/* copy */}
                <div className="col-span-12 lg:col-span-4 order-3 lg:order-none">
                  <p className="text-[14px] leading-relaxed text-charcoal/70 max-w-md">{r.body}</p>
                </div>

                {/* image */}
                <div className="col-span-12 lg:col-span-3 order-4 lg:order-none">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-gold-soft">
                    <img
                      src={r.img}
                      alt={`${r.title} — editorial composition.`}
                      className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                      loading="lazy"
                      width={1280}
                      height={1024}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
