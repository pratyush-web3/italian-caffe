import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/", label: "Casa" },
  { to: "/menu", label: "Carta" },
  { to: "/about", label: "Casa Olivéto" },
  { to: "/journal", label: "Quaderno" },
  { to: "/gallery", label: "Galleria" },
  { to: "/private-events", label: "Eventi" },
  { to: "/catering", label: "Catering" },
  { to: "/contact", label: "Contatti" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-avorio/95 backdrop-blur-md border-b border-border/70"
          : "bg-avorio/90 backdrop-blur-md border-b border-border/40"
      }`}
    >
      <div className="mx-auto flex max-w-375 items-center justify-between px-6 py-5 md:px-12">
        <Link to="/" className="group flex items-baseline gap-3 leading-none">
          <span className="font-display italic text-3xl md:text-[34px] text-bosco">Olivéto</span>
          <span className="hidden sm:inline-block h-3 w-px bg-terra/70" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[12px] tracking-[0.22em] uppercase text-bosco/85">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative py-1 transition-colors hover:text-terra [&.active]:text-terra"
              activeProps={{ className: "active" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/reservations"
            className="hidden md:inline-flex items-center gap-2 bg-terra px-5 py-2.5 text-[11px] uppercase tracking-[0.3em] text-avorio transition-colors hover:bg-bosco"
          >
            Prenota il tuo tavolo
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center text-bosco"
            aria-label="Menù"
          >
            <span className="block h-px w-6 bg-bosco relative before:absolute before:-top-2 before:left-0 before:h-px before:w-6 before:bg-bosco after:absolute after:top-2 after:left-0 after:h-px after:w-6 after:bg-bosco" />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 bg-avorio border-b border-border ${
          open ? "max-h-160 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="py-3 border-b border-border/60 text-sm uppercase tracking-[0.26em] text-bosco"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/reservations"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center bg-terra px-5 py-3 text-xs uppercase tracking-[0.3em] text-avorio"
          >
            Prenota il tuo tavolo
          </Link>
        </nav>
      </div>
    </header>
  );
}
