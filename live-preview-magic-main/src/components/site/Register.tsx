import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Monogram } from "./Monogram";
import { toast } from "sonner";
import { ArrowUpRight } from "lucide-react";

export const Inquire = () => {
  const ref = useReveal<HTMLDivElement>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Your request has been received.", {
        description: "The salon replies personally, in writing.",
      });
    }, 700);
  };

  const fieldCls =
    "w-full bg-parchment border border-gold/30 rounded-sm px-5 py-4 text-[15px] text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all";

  const selectCls =
    "w-full bg-parchment border border-gold/30 rounded-sm px-5 py-4 text-[15px] text-charcoal focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all appearance-none cursor-pointer";

  const labelCls = "text-[10px] uppercase tracking-[0.32em] text-gold mb-2.5 block";

  return (
    <section id="inquire" className="relative py-28 sm:py-36 lg:py-44 bg-forest-deep overflow-hidden">
      {/* atmospheric */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(700px 500px at 90% 10%, hsl(var(--gold) / 0.12), transparent 60%), radial-gradient(700px 500px at 10% 90%, hsl(var(--oxblood) / 0.20), transparent 60%)",
        }}
      />

      <div className="container-editorial relative">
        <div ref={ref} className="fade-up grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* LEFT */}
          <div className="lg:col-span-5 text-parchment">
            <div className="flex items-baseline gap-5 mb-6">
              <span className="num-display text-7xl sm:text-8xl leading-none">05</span>
              <span className="label-eyebrow-light pb-3">Inquiry</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[60px] leading-[1.05]">
              Request private
              <br />
              <span className="italic text-gold">access.</span>
            </h2>
            <p className="mt-8 text-[15px] leading-relaxed text-parchment/75 max-w-md">
              Each request is read by hand and replied to in writing. Tell us a little about what brings you to the salon.
            </p>

            <div className="mt-12 panel-dark p-6 max-w-sm">
              <div className="flex items-center gap-4">
                <Monogram size={36} variant="gold" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.32em] text-gold">Confidence</p>
                  <p className="font-display italic text-lg mt-1">Held in privacy. Always.</p>
                </div>
              </div>
              <div className="hairline-gold my-5" />
              <ul className="space-y-2.5 text-[12px] text-parchment/70">
                <li className="flex items-center gap-3"><span className="h-px w-5 bg-gold" /> No public list</li>
                <li className="flex items-center gap-3"><span className="h-px w-5 bg-gold" /> No marketing follow-up</li>
                <li className="flex items-center gap-3"><span className="h-px w-5 bg-gold" /> Replies sent personally</li>
              </ul>
            </div>
          </div>

          {/* RIGHT — form panel */}
          <div className="lg:col-span-7">
            <div className="bg-parchment rounded-sm border border-gold/40 shadow-elevated p-7 sm:p-10 lg:p-12 relative">
              {/* gold corners */}
              <div className="absolute top-3 left-3 w-10 h-px bg-gold" />
              <div className="absolute top-3 left-3 w-px h-10 bg-gold" />
              <div className="absolute bottom-3 right-3 w-10 h-px bg-gold" />
              <div className="absolute bottom-3 right-3 w-px h-10 bg-gold" />

              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.32em] text-gold-deep">Form of Request</p>
                  <p className="font-display text-2xl text-charcoal mt-1">Salon Correspondence</p>
                </div>
                <Monogram size={40} variant="oxblood" />
              </div>
              <div className="hairline-gold mb-8" />

              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <label className="block">
                    <span className={labelCls}>Name</span>
                    <input required name="name" type="text" autoComplete="name" className={fieldCls} placeholder="Your full name" />
                  </label>
                  <label className="block">
                    <span className={labelCls}>Email</span>
                    <input required name="email" type="email" autoComplete="email" className={fieldCls} placeholder="you@example.com" />
                  </label>
                </div>

                <label className="block">
                  <span className={labelCls}>Area of interest</span>
                  <select name="interest" className={selectCls} defaultValue="">
                    <option value="" disabled>Select an area…</option>
                    <option>Private previews</option>
                    <option>Curated editions</option>
                    <option>Cultural gatherings</option>
                    <option>Archive access</option>
                    <option>General correspondence</option>
                  </select>
                </label>

                <label className="block">
                  <span className={labelCls}>Message</span>
                  <textarea name="message" rows={5} className={`${fieldCls} resize-none`} placeholder="A few words on what brings you to the salon" />
                </label>

                <div className="hairline-gold !mt-10" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 !mt-8">
                  <span className="text-[11px] uppercase tracking-[0.24em] text-charcoal/55">
                    Replies sent in writing
                  </span>
                  <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto disabled:opacity-60">
                    <span>{submitting ? "Sending…" : "Request Private Access"}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
