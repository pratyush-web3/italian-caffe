import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-bosco text-avorio">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 py-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-4 space-y-5">
          <div className="font-display italic text-5xl text-avorio">Olivéto</div>
          <p className="text-[11px] tracking-[0.32em] uppercase text-terra">
            Caffè · Bottega · Cortile
          </p>
          <p className="text-sm leading-relaxed text-avorio/70 max-w-sm">
            Un piccolo caffè fiorentino nato nel 2012, dentro un cortile del Quartiere di Santo
            Spirito. Tostiamo i nostri chicchi sopra l'Arno, lavoriamo solo con contadini che
            conosciamo per nome, e crediamo che il tempo speso a tavola non vada mai sprecato.
          </p>
          <p className="text-xs tracking-[0.28em] uppercase text-terra">
            Via dei Serragli, 47r · 50124 Firenze
          </p>
        </div>

        <div className="md:col-span-2 space-y-3">
          <h4 className="eyebrow text-avorio/60">Quando</h4>
          <ul className="text-sm space-y-1.5 text-avorio/80">
            <li>Mar — Ven · 07:30 — 22:00</li>
            <li>Sabato · 08:00 — 23:00</li>
            <li>Domenica · 08:30 — 20:00</li>
            <li className="text-avorio/50">Lunedì · riposo</li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-3">
          <h4 className="eyebrow text-avorio/60">La Casa</h4>
          <ul className="text-sm space-y-1.5">
            <li>
              <Link to="/menu" className="hover:text-terra">
                Carta
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-terra">
                Casa Olivéto
              </Link>
            </li>
            <li>
              <Link to="/journal" className="hover:text-terra">
                Quaderno
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-terra">
                Galleria
              </Link>
            </li>
            <li>
              <Link to="/private-events" className="hover:text-terra">
                Eventi privati
              </Link>
            </li>
            <li>
              <Link to="/catering" className="hover:text-terra">
                Catering
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-4">
          <h4 className="eyebrow text-avorio/60">Il Quaderno mensile</h4>
          <p className="text-sm text-avorio/70">
            Una volta al mese, una lettera scritta a mano: un raccolto, una ricetta di mia nonna
            Vanna, un disco da ascoltare quando piove su Firenze.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border-b border-avorio/30 focus-within:border-terra transition-colors"
          >
            <input
              type="email"
              required
              placeholder="la-tua@email.it"
              className="flex-1 bg-transparent py-3 text-sm placeholder:text-avorio/40 outline-none"
            />
            <button
              type="submit"
              className="text-xs uppercase tracking-[0.28em] text-terra hover:text-avorio transition-colors px-2"
            >
              Iscriviti
            </button>
          </form>
          <div className="flex gap-5 pt-3 text-xs uppercase tracking-[0.28em] text-avorio/60">
            <a href="#" className="hover:text-terra">
              Instagram
            </a>
            <a href="#" className="hover:text-terra">
              Pinterest
            </a>
            <a href="#" className="hover:text-terra">
              Spotify
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-avorio/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12 py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-[11px] uppercase tracking-[0.28em] text-avorio/50">
          <span>
            © {new Date().getFullYear()} Olivéto S.r.l.s. · P.IVA 06917320485 · REA FI-672183
          </span>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-terra">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-terra">
              Termini
            </Link>
            <Link to="/contact" className="hover:text-terra">
              Scrivici
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
