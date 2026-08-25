import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Personal Loans", href: "#products" },
  { label: "Business Finance", href: "#products" },
  { label: "Appliance Scheme", href: "#products" },
  { label: "About Us", href: "#profile" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-transparent bg-navy-deep/30 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-6 px-5 lg:px-10">
        <a href="#top" className="group flex flex-col leading-none">
          <span
            className={`font-display text-[0.95rem] font-bold tracking-[0.14em] uppercase sm:text-lg ${
              scrolled ? "text-navy" : "text-background"
            }`}
          >
            JAM-Fortune <span className="hidden sm:inline">Financial Services Ltd</span>
          </span>
          <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.45em] text-bronze uppercase">
            God 1st
          </span>
        </a>

        <nav className="hidden items-center gap-8 xl:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`border-b-2 border-transparent pb-1 text-[0.72rem] font-semibold tracking-[0.16em] uppercase transition-colors hover:border-bronze hover:text-bronze ${
                scrolled ? "text-slate" : "text-background/85"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-none bg-navy px-6 py-3.5 text-[0.7rem] font-bold tracking-[0.18em] text-background uppercase transition-colors hover:bg-bronze hover:text-navy-deep sm:inline-flex"
          >
            Apply for Loan
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`p-2 xl:hidden ${scrolled ? "text-navy" : "text-background"}`}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-5 py-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-xs font-semibold tracking-[0.16em] text-slate uppercase last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 mb-4 bg-navy px-6 py-4 text-center text-xs font-bold tracking-[0.18em] text-background uppercase"
            >
              Apply for Loan
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
