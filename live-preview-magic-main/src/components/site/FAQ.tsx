import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useReveal } from "@/hooks/useReveal";

const faqs = [
  { q: "What is Maison Aurelia?", a: "A private digital salon &mdash; a small cultural house presenting selected experiences, artist stories, and refined patron engagement. It is shaped in the European tradition of the studio salon." },
  { q: "How does one come into contact?", a: "Through a written request. Every note is read by hand and replied to in writing. There is no public list, and no general newsletter." },
  { q: "Is there a fee to request access?", a: "No. Requesting access carries no obligation and no cost. If a particular programme involves a contribution, that is discussed personally." },
  { q: "Where is the salon based?", a: "We move between studios and selected rooms across Europe. Most correspondence is digital; gatherings are held in person, by invitation." },
  { q: "Who is this designed for?", a: "Patrons, collectors, institutions, and cultural friends who prefer fewer, more considered things &mdash; and who appreciate a slower kind of conversation around the work." },
];

export const FAQ = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="faq" className="py-28 sm:py-36 lg:py-44">
      <div className="container-editorial">
        <div ref={ref} className="fade-up grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-5 mb-6">
              <span className="num-display text-7xl sm:text-8xl leading-none">06</span>
              <span className="label-eyebrow pb-3">Enquiries</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] text-charcoal">
              Things often
              <br />
              <span className="italic text-oxblood">asked.</span>
            </h2>
            <p className="mt-8 text-[14px] leading-relaxed text-charcoal/65 max-w-xs">
              If something is not addressed here, write to us &mdash; we are happy to reply directly.
            </p>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="border-y border-gold/40">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-gold/30 last:border-b-0">
                  <AccordionTrigger className="py-7 text-left font-display text-xl sm:text-[26px] text-charcoal hover:no-underline hover:text-oxblood [&[data-state=open]]:text-oxblood [&[data-state=open]>svg]:rotate-45 [&>svg]:transition-transform [&>svg]:duration-500 [&>svg]:text-gold-deep">
                    <span className="flex items-baseline gap-5">
                      <span className="num-display text-2xl">{String(i + 1).padStart(2, "0")}</span>
                      <span>{f.q}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 pl-14 text-[15px] leading-relaxed text-charcoal/70 max-w-2xl">
                    <span dangerouslySetInnerHTML={{ __html: f.a }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
