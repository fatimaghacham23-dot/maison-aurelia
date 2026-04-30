import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Monogram } from "./Monogram";

const links = [
  { href: "#salon", label: "The Salon" },
  { href: "#access", label: "Selected Access" },
  { href: "#programming", label: "Programming" },
  { href: "#faq", label: "Enquiries" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-shadow duration-500 bg-parchment/95 backdrop-blur-md border-b border-gold-soft ${
        scrolled ? "shadow-[0_8px_24px_-18px_hsl(25_14%_12%/0.35)]" : ""
      }`}
    >
      <div className="container-editorial flex h-16 sm:h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Monogram size={34} />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-[19px] tracking-tight text-charcoal">
              Maison <span className="italic text-oxblood">Aurelia</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.32em] text-gold-deep mt-1">
              Private Cultural Salon
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline text-[11px] uppercase tracking-[0.24em] text-charcoal/80 hover:text-oxblood transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#inquire" className="hidden md:inline-flex btn-primary !py-3 !px-6">
          <span>Request Access</span>
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-oxblood p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-[55] bg-parchment transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-editorial pt-12 pb-12 flex flex-col gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-charcoal"
            >
              {l.label}
            </a>
          ))}
          <div className="hairline-gold mt-4" />
          <a
            href="#inquire"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            <span>Request Access</span>
          </a>
        </div>
      </div>
    </header>
  );
};
