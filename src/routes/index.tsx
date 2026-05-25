import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import hero from "@/assets/hero-cafe.jpg";
import espresso from "@/assets/espresso.jpg";
import pastries from "@/assets/pastries.jpg";
import barista from "@/assets/barista.jpg";
import aperitivo from "@/assets/aperitivo.jpg";
import facade from "@/assets/facade.jpg";
import courtyard from "@/assets/courtyard.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Olivéto — Caffè & Cortile · Firenze, Santo Spirito" },
      {
        name: "description",
        content:
          "Tostiamo sopra l'Arno, impastiamo la notte, apriamo all'alba. Olivéto, caffè fiorentino in un cortile di Santo Spirito dal 2012.",
      },
      { property: "og:image", content: hero },
    ],
  }),
});

function Home() {
  return (
    <SiteLayout>
      {/* MAGAZINE MASTHEAD */}
      <section className="relative w-full overflow-hidden bg-avorio pt-0 md:pt-0 pb-10">
        <div className="mx-auto max-w-375 px-6 md:px-10">
          <div className="mt-6 md:mt-10 grid gap-8 md:grid-cols-12 items-start">
            <div className="md:col-span-7">
              <p className="eyebrow text-terra">Edizione di Santo Spirito</p>
              <h1 className="mt-5 font-display text-[clamp(3.2rem,9vw,8rem)] leading-[0.92] text-bosco">
                Sotto l'ulivo,
                <br />
                <em className="italic font-normal text-terra">tutto si fa più lento.</em>
              </h1>
            </div>
            <div className="md:col-span-5 md:pl-8 md:border-l border-bosco/20 flex flex-col justify-start">
              <p className="text-base md:text-lg leading-relaxed text-bosco/85">
                Olivéto è una bottega del caffè nascosta in un cortile fiorentino. Tre tavoli
                dentro, sei fuori, un ulivo vecchio di quarant'anni che fa ombra alla macchina
                espresso. Apriamo quando suona la campana di Santo Spirito.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/reservations"
                  className="inline-flex items-center gap-2 bg-bosco px-6 py-3.5 text-[11px] uppercase tracking-[0.32em] text-avorio hover:bg-terra transition-colors"
                >
                  Prenota un tavolo
                </Link>
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 px-2 py-3.5 text-[11px] uppercase tracking-[0.32em] text-bosco border-b border-terra"
                >
                  Sfoglia la carta →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="mx-auto max-w-375 px-6 md:px-10 mt-0">
          <div className="relative h-[58vh] md:h-[78vh] min-h-120 overflow-hidden">
            <img
              src={hero}
              alt="Cortile interno di Olivéto a Firenze con ulivi in vaso e tavoli di marmo"
              className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
              width={1600}
              height={1000}
            />
            <div className="grain absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-4 text-avorio">
              <p className="text-[11px] tracking-[0.32em] uppercase max-w-md bg-bosco/60 md:bg-transparent rounded-sm px-3 py-2 md:px-0 md:py-0 backdrop-blur-[2px]">
                Il cortile dell'ulivo, ore 7:18 — Fotografia di Lavinia Bertelli
              </p>
              <p className="mt-3 md:mt-0 hidden md:block font-display italic text-2xl text-avorio/90">
                «La luce qui arriva sempre obliqua.»
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE — sourcing strip */}
      <section className="border-y border-bosco/20 bg-pietra/40 overflow-hidden py-5">
        <div className="marquee-track text-[11px] tracking-[0.42em] uppercase text-oliva">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-12 pr-12">
              <span>Tostato sopra l'Arno</span>
              <span>·</span>
              <span>Latte di Mucca Pisana</span>
              <span>·</span>
              <span>Pasta madre dal 2012</span>
              <span>·</span>
              <span>Olio Frantoio Pruneti</span>
              <span>·</span>
              <span>Vini di piccoli vignaioli toscani</span>
              <span>·</span>
              <span>Pane di Altamura</span>
              <span>·</span>
            </span>
          ))}
        </div>
      </section>

      {/* EDITORIAL — Letter from Caterina */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-[1500px] grid gap-10 md:gap-16 md:grid-cols-12">
          <div className="md:col-span-4 md:sticky md:top-32 self-start">
            <p className="eyebrow text-terra">N° 01 · Lettera della casa</p>
            <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1] text-bosco">
              «Aprire un caffè è un modo gentile di stare al mondo.»
            </h2>
            <p className="mt-8 text-sm tracking-[0.24em] uppercase text-oliva">
              — Caterina Bartolini, fondatrice
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="drop-cap text-lg md:text-[19px] leading-[1.75] text-bosco/90">
              Quando dodici anni fa ho preso le chiavi di questo cortile, c'era soltanto un ulivo
              storto e un muro pieno di gerani secchi. Non sapevo se Firenze avesse bisogno di un
              altro caffè. Sapevo però che io avevo bisogno di un posto dove tornare ogni mattina
              senza sentirmi in dovere di sorridere. Così l'ho costruito, una sedia alla volta, con
              mio padre che brontolava ogni domenica e Vanna, mia nonna, che mi spediva da Lucca
              cassette di farina del suo mulino.
            </p>
            <p className="mt-6 text-lg md:text-[19px] leading-[1.75] text-bosco/85">
              Da Olivéto non ci sono regole, se non queste tre: il caffè si beve seduti quando si
              può, il pane si spezza a mano, e nessuno esce di qui senza aver detto buongiorno a
              qualcuno. Tostiamo i chicchi noi stessi, in una vecchia officina sopra il Lungarno
              delle Grazie, lavorando piccoli lotti che cambiano con le stagioni — perché un caffè
              di gennaio non può sapere di luglio.
            </p>
            <p className="mt-6 text-lg md:text-[19px] leading-[1.75] text-bosco/85">
              Se passate di qui, fermatevi un po'. La fretta, fuori da questa porta, vi aspetterà
              comunque.
            </p>
            <div className="mt-10 flex items-center gap-5">
              <span className="rule" />
              <Link
                to="/about"
                className="text-[11px] tracking-[0.32em] uppercase text-bosco border-b border-terra pb-1"
              >
                Conosci la nostra storia →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ASYMMETRIC SPLIT — espresso ritual */}
      <section className="bg-bosco text-avorio py-20 md:py-28 px-6 md:px-10 relative overflow-hidden">
        <div className="grain absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-[1500px] grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-5">
            <p className="eyebrow text-terra">N° 02 · Il banco</p>
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] text-avorio">
              Sette grammi.
              <br />
              <em className="italic">Venticinque secondi.</em>
              <br />
              Una piccola eternità.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-avorio/80 max-w-md">
              La nostra miscela <em>“Cortile”</em> è un assemblaggio di tre origini: Sidamo etiope
              per il fiore, Antigua del Guatemala per il corpo, e una piccola percentuale di Robusta
              del Kerala tostata scura, per la crema densa che a Firenze ci si aspetta.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-avorio/20 pt-8 text-avorio">
              <div>
                <dt className="eyebrow text-avorio/50">Tostatura</dt>
                <dd className="mt-2 font-display text-3xl text-terra">Media-scura</dd>
              </div>
              <div>
                <dt className="eyebrow text-avorio/50">Lotto</dt>
                <dd className="mt-2 font-display text-3xl text-terra">12 kg</dd>
              </div>
              <div>
                <dt className="eyebrow text-avorio/50">Note</dt>
                <dd className="mt-2 font-display text-xl text-terra italic">
                  cacao, fico, miele scuro
                </dd>
              </div>
            </dl>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <img
              src={espresso}
              alt="Espresso servito in tazza di ceramica blu su marmo bianco di Carrara"
              loading="lazy"
              className="w-full h-[440px] md:h-[640px] object-cover transition-transform duration-[1200ms] ease-out transform hover:scale-[1.03] animate-fade-in"
              width={1200}
              height={1400}
            />
            <p className="mt-3 text-[11px] tracking-[0.3em] uppercase text-avorio/50">
              Caffè “Cortile” servito al banco — fotografia di L. Bertelli
            </p>
          </div>
        </div>
      </section>

      {/* MAGAZINE GRID — Carta del giorno */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 border-b border-bosco/30 pb-6">
            <div>
              <p className="eyebrow text-terra">N° 03 · Carta di Ottobre</p>
              <h2 className="mt-4 font-display text-5xl md:text-7xl text-bosco">Dal banco, oggi</h2>
            </div>
            <Link
              to="/menu"
              className="text-[11px] uppercase tracking-[0.32em] text-bosco border-b border-terra pb-1"
            >
              La carta intera →
            </Link>
          </div>

          <div className="grid gap-px bg-bosco/15 md:grid-cols-12">
            {/* large feature */}
            <article className="md:col-span-7 bg-avorio p-8 md:p-14">
              <p className="eyebrow text-oliva">Caffetteria · firma della casa</p>
              <h3 className="mt-5 font-display text-5xl md:text-6xl text-bosco leading-tight">
                Caffè <em className="italic text-terra">«Cortile»</em>
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-bosco/80 max-w-xl">
                La nostra miscela d'autore, tostata ogni martedì nel laboratorio sopra il Lungarno.
                Estratto a 9 bar, servito in tazza di ceramica grezza di Montelupo. Si beve in
                piedi, al banco, come vuole l'usanza.
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-bosco/20 pt-5">
                <span className="text-[11px] tracking-[0.32em] uppercase text-oliva">
                  25 ml · al banco
                </span>
                <span className="font-display text-3xl text-terra">€ 1,60</span>
              </div>
            </article>

            <article className="md:col-span-5 bg-avorio p-8 md:p-14">
              <p className="eyebrow text-oliva">Pasticceria</p>
              <h3 className="mt-5 font-display text-4xl text-bosco">
                Bombolone alla crema chantilly
              </h3>
              <p className="mt-4 leading-relaxed text-bosco/80">
                Lievito madre di Vanna, friggitura nello strutto, riempito a mano con crema
                chantilly alla vaniglia di Tahiti. Cento al giorno, finiscono entro le undici.
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-bosco/20 pt-5">
                <span className="text-[11px] tracking-[0.32em] uppercase text-oliva">Pezzo</span>
                <span className="font-display text-2xl text-terra">€ 3,20</span>
              </div>
            </article>

            <article className="md:col-span-4 bg-avorio p-8 md:p-12">
              <p className="eyebrow text-oliva">Salato · pranzo</p>
              <h3 className="mt-5 font-display text-3xl text-bosco">Schiacciata all'olio nuovo</h3>
              <p className="mt-3 leading-relaxed text-bosco/80">
                Pasta madre 28 ore, olio extravergine Frantoio Pruneti raccolto a novembre, sale di
                Cervia.
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-bosco/20 pt-4">
                <span className="text-[11px] tracking-[0.32em] uppercase text-oliva">200 g</span>
                <span className="font-display text-2xl text-terra">€ 4,50</span>
              </div>
            </article>

            <article className="md:col-span-4 bg-avorio p-8 md:p-12">
              <p className="eyebrow text-oliva">Aperitivo · ore 18</p>
              <h3 className="mt-5 font-display text-3xl text-bosco">Negroni del Cortile</h3>
              <p className="mt-3 leading-relaxed text-bosco/80">
                Gin Peter in Florence, Vermouth Antica Formula, Campari. Servito con un'oliva
                taggiasca e una scorza d'arancia tarocco.
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-bosco/20 pt-4">
                <span className="text-[11px] tracking-[0.32em] uppercase text-oliva">
                  Coppa bassa
                </span>
                <span className="font-display text-2xl text-terra">€ 10,00</span>
              </div>
            </article>

            <article className="md:col-span-4 bg-avorio p-8 md:p-12">
              <p className="eyebrow text-oliva">Dolce della settimana</p>
              <h3 className="mt-5 font-display text-3xl text-bosco">Torta della nonna di Vanna</h3>
              <p className="mt-3 leading-relaxed text-bosco/80">
                Frolla al limone, crema pasticcera al rum, pinoli di San Rossore. La ricetta è del
                1968 e non si tocca.
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-bosco/20 pt-4">
                <span className="text-[11px] tracking-[0.32em] uppercase text-oliva">Fetta</span>
                <span className="font-display text-2xl text-terra">€ 5,50</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN EDITORIAL — Pastries + Courtyard */}
      <section className="bg-pietra/50 py-20 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-[1500px] grid gap-10 md:gap-14 md:grid-cols-12">
          <article className="md:col-span-7">
            <img
              src={pastries}
              alt="Sfogliata appena sfornata su tavolo di legno antico"
              loading="lazy"
              className="w-full h-[480px] md:h-[640px] object-cover transition-transform duration-[1000ms] ease-out transform hover:scale-[1.03] animate-fade-in"
              width={1200}
              height={1400}
            />
            <p className="mt-4 eyebrow text-oliva">Reportage · Notte in laboratorio</p>
            <h3 className="mt-3 font-display text-4xl md:text-5xl text-bosco leading-tight">
              Davide impasta alle quattro,
              <br />
              Firenze dorme ancora.
            </h3>
            <p className="mt-5 leading-relaxed text-bosco/80 max-w-xl">
              Il nostro pasticcere Davide Lorusso arriva in Via dei Serragli quando in piazza Pitti
              i tassisti spengono il motore. Lavora impasti ad alta idratazione con lievito madre
              rinfrescato da undici anni, una pasta viva che porta sempre con sé quando cambia
              città. «Una pasta madre», dice, «è come un cane: ti segue, ma devi nutrirla.»
            </p>
          </article>
          <aside className="md:col-span-5 md:pl-10 md:border-l border-bosco/20">
            <img
              src={courtyard}
              alt="Cortile di Olivéto con ulivo e anfora di terracotta"
              loading="lazy"
              className="w-full h-[420px] md:h-[520px] object-cover animate-fade-in"
              width={1080}
              height={1600}
            />
            <p className="mt-4 eyebrow text-oliva">Indirizzo</p>
            <h4 className="mt-3 font-display text-3xl text-bosco">
              Il cortile di Via dei Serragli
            </h4>
            <p className="mt-4 leading-relaxed text-bosco/80">
              Si entra da un portone azzurro al civico 47r, si attraversa l'androne, e ci si trova
              in un cortile di pietra serena con un ulivo nel mezzo. D'estate apriamo solo qui,
              sotto le foglie argentate. D'inverno accendiamo le stufe a legna.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-bosco border-b border-terra pb-1"
            >
              Come trovarci →
            </Link>
          </aside>
        </div>
      </section>

      {/* QUOTE / FRESCO — full bleed */}
      <section className="relative">
        <div className="relative h-[70vh] min-h-[480px] overflow-hidden">
          <img
            src={aperitivo}
            alt="Tavolo apparecchiato per l'aperitivo a Firenze, al tramonto"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
            width={1600}
            height={1100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bosco via-bosco/60 to-bosco/30" />
          <div className="grain absolute inset-0" />
          <div className="relative z-10 h-full flex items-center px-6 md:px-10">
            <div className="mx-auto max-w-[1500px] w-full grid md:grid-cols-12 gap-10">
              <div className="md:col-span-7 text-avorio">
                <p className="eyebrow text-terra">N° 04 · L'ora dell'aperitivo</p>
                <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.98]">
                  Alle sei in punto
                  <br />
                  <em className="italic">le sedie si voltano verso il sole.</em>
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-avorio/85 max-w-xl">
                  Dal martedì al sabato, dalle 18 alle 20:30, il banco si veste a festa: olive di
                  Cetona, taglieri di pecorino di Pienza, finocchiona di Greve, focacce calde di
                  Davide, vini di vignaioli che vengono di persona a portarci le bottiglie. Senza
                  prenotazione: si trova posto se c'è.
                </p>
              </div>
              <div className="md:col-span-4 md:col-start-9 text-avorio">
                <div className="border-l border-terra pl-6">
                  <p className="font-display italic text-2xl leading-snug">
                    «A Firenze l'aperitivo non è un'abitudine importata. È un modo di lasciare
                    andare il giorno con dignità.»
                  </p>
                  <p className="mt-5 text-[11px] tracking-[0.32em] uppercase text-terra">
                    — Indro, sommelier
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PEOPLE — barista portrait */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-[1500px] grid gap-10 md:grid-cols-12 items-center">
          <div className="md:col-span-5">
            <img
              src={barista}
              alt="Ritratto del barista al banco di Olivéto"
              loading="lazy"
              className="w-full h-[520px] md:h-[680px] object-cover grayscale-[0.15] transition-transform duration-[1000ms] ease-out hover:scale-[1.02] animate-fade-in"
              width={1200}
              height={1500}
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow text-terra">N° 05 · Ritratti</p>
            <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1] text-bosco">
              Tommaso, sette anni dietro il banco.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-bosco/85">
              Tommaso Galli è entrato da Olivéto a ventuno anni, dopo una stagione a Trieste, una a
              Melbourne, e una invernale a Cortina che ricorda con poco entusiasmo. Conosce a
              memoria il caffè di circa duecento clienti abituali. Sa dire «cappuccino» in dodici
              lingue. Ride sempre della stessa battuta del professor Benelli, che entra ogni mattina
              alle 7:42.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-bosco/80">
              <em>
                «Fare il barista è un mestiere antico. Si serve un caffè, ma in realtà si tiene
                compagnia.»
              </em>
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-bosco/20 pt-8">
              <div>
                <div className="font-display text-5xl text-terra">2012</div>
                <div className="mt-2 eyebrow text-oliva">Anno d'apertura</div>
              </div>
              <div>
                <div className="font-display text-5xl text-terra">28h</div>
                <div className="mt-2 eyebrow text-oliva">Lievitazione</div>
              </div>
              <div>
                <div className="font-display text-5xl text-terra">11</div>
                <div className="mt-2 eyebrow text-oliva">Contadini partner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUADERNO TEASER */}
      <section className="bg-pietra/40 py-20 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 border-b border-bosco/30 pb-6">
            <div>
              <p className="eyebrow text-terra">Il Quaderno</p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl text-bosco">Pagine sciolte</h2>
            </div>
            <Link
              to="/journal"
              className="text-[11px] uppercase tracking-[0.32em] text-bosco border-b border-terra pb-1"
            >
              Tutti gli articoli →
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-12">
            <article className="md:col-span-6 group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-bosco/10">
                <img
                  src={courtyard}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-[1.04] animate-fade-in"
                />
              </div>
              <p className="mt-5 eyebrow text-terra">Reportage · ottobre</p>
              <h3 className="mt-3 font-display text-4xl md:text-5xl text-bosco leading-tight">
                Tre giorni a Pereta con i nostri olivicoltori
              </h3>
              <p className="mt-4 leading-relaxed text-bosco/80 max-w-xl">
                Siamo andati in Maremma per la raccolta dell'olio nuovo. Reti, scale, sole basso,
                una colazione di pane e olio sull'aia. Racconto di chi tiene in vita un mestiere di
                duemila anni.
              </p>
            </article>

            <div className="md:col-span-6 space-y-8">
              {[
                {
                  tag: "Rituali · settembre",
                  title: "Cosa racconta una tazzina lasciata sul banco",
                  excerpt:
                    "Una piccola archeologia del caffè bevuto in piedi, tra fretta e tenerezza.",
                },
                {
                  tag: "Vini · agosto",
                  title: "Tre vignaioli del Chianti che ci hanno cambiato la carta",
                  excerpt:
                    "Pancrazi, Monteraponi, Le Boncie. Vini vivi, fatti come si faceva un tempo.",
                },
                {
                  tag: "Stagioni · luglio",
                  title: "Granita di limone, pomeriggi senza fretta",
                  excerpt:
                    "La ricetta che ci ha insegnato la signora Anna di Noto, e perché in Toscana funziona.",
                },
              ].map((p) => (
                <article
                  key={p.title}
                  className="group cursor-pointer border-b border-bosco/15 pb-7 last:border-0"
                >
                  <p className="eyebrow text-terra">{p.tag}</p>
                  <h3 className="mt-3 font-display text-2xl md:text-3xl text-bosco group-hover:text-terra transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-bosco/75 leading-relaxed">{p.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section className="relative">
        <div className="relative h-[78vh] min-h-[560px] overflow-hidden">
          <img
            src={facade}
            alt="Facciata di Olivéto a Firenze, Via dei Serragli"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
            width={1600}
            height={1100}
          />
          <div className="absolute inset-0 bg-bosco/75" />
          <div className="grain absolute inset-0" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-avorio px-6">
            <p className="eyebrow text-terra">Via dei Serragli, 47r · 50124 Firenze</p>
            <h2 className="mt-6 font-display text-5xl md:text-8xl max-w-4xl leading-[0.98]">
              <em className="italic">Vi aspettiamo</em>
              <br />
              come si aspetta un vecchio amico.
            </h2>
            <p className="mt-8 text-avorio/85 max-w-xl text-lg">
              Aperti dal martedì alla domenica, dalle sette e mezza. Senza prenotazione per un caffè
              o una pasta. Con prenotazione, se volete fermarvi a pranzo o all'ora del vino.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/reservations"
                className="inline-flex items-center gap-3 bg-terra px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-avorio hover:bg-avorio hover:text-bosco transition-colors"
              >
                Prenota un tavolo
              </Link>
              <a
                href="tel:+390552398472"
                className="inline-flex items-center gap-3 border border-avorio/50 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-avorio hover:border-terra hover:text-terra transition-colors"
              >
                +39 055 239 8472
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
