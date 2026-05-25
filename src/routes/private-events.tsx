import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import room from "@/assets/private-room.jpg";
import aperitivo from "@/assets/aperitivo.jpg";

export const Route = createFileRoute("/private-events")({
  component: EventsPage,
  head: () => ({
    meta: [
      { title: "Eventi privati — LUCÉRE" },
      {
        name: "description",
        content:
          "La Sala dei Marchetti, il Banco e la nostra terrazza: tre spazi per cene private, presentazioni e celebrazioni a Milano.",
      },
    ],
  }),
});

function EventsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Eventi privati"
        title="Per le sere che vorrete ricordare."
        intro="Compleanni, anniversari, presentazioni di libri, cene aziendali, lanci stampa: da Lucére ospitiamo eventi privati con la stessa cura con cui prepariamo un cappuccino al mattino."
      />

      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1400px] relative h-[60vh] min-h-[460px] overflow-hidden">
          <img
            src={room}
            alt="Sala privata di Lucére"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            width={1600}
            height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
          <div className="relative z-10 h-full flex items-end p-10 md:p-16 text-cream">
            <div>
              <p className="eyebrow text-cream/70">La Sala dei Marchetti</p>
              <h2 className="mt-3 font-display text-4xl md:text-6xl">
                Un salotto di noce per ventiquattro ospiti.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-[1100px] space-y-20">
          <Space
            name="La Sala dei Marchetti"
            cap="Fino a 24 ospiti seduti"
            desc="Il nostro salotto privato al primo piano. Tavolo unico in noce massello, lampadario veneziano in vetro soffiato, parete di libri e una grande finestra che si apre sui tetti milanesi. Perfetta per cene di rappresentanza, lanci editoriali, riunioni a porte chiuse."
            inc={[
              "Tavolo unico per 16–24 persone",
              "Servizio dedicato di un cameriere e un sommelier",
              "Menù degustazione concordato con la chef",
              "Wi-Fi privato, schermo 4K, sistema audio",
            ]}
          />
          <Space
            name="Il Banco"
            cap="Fino a 40 ospiti in piedi"
            desc="Privatizzazione completa del banco e della sala caffetteria fuori orario. Pensato per aperitivi di lavoro, vernissage, presentazioni di libri o piccoli party post-evento. Atmosfera viva, milanese, raccolta."
            inc={[
              "Cocktail bar a tema concordato",
              "Buffet di assaggi della cucina",
              "Allestimento floreale Studio Botanico Milano",
              "DJ set acustico su richiesta",
            ]}
          />
          <Space
            name="La Terrazza Spiga"
            cap="Fino a 30 ospiti — da maggio a settembre"
            desc="Una piccola terrazza affacciata sul cortile interno di Via della Spiga, con glicine secolare e tavolini in marmo. Riservata per cene estive sotto le luci e cocktail al tramonto."
            inc={[
              "Solo nei mesi caldi, su disponibilità",
              "Menù estivo di stagione",
              "Bar mobile con cocktail e vini al calice",
              "Coperture per pioggia leggera",
            ]}
          />
        </div>
      </section>

      <section className="bg-espresso text-cream py-28 px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-cream/60">Per parlarne</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-cream">
            Raccontateci la serata che avete in mente.
          </h2>
          <p className="mt-6 text-cream/80 font-light leading-relaxed">
            Lavoreremo con voi sul menù, il vino, la luce, la musica. Ogni evento è scritto su
            misura: non abbiamo pacchetti standard, perché non esistono serate standard.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:eventi@lucere.it"
              className="border border-cream/60 px-7 py-4 text-xs uppercase tracking-[0.3em] hover:bg-cream hover:text-espresso transition-colors"
            >
              eventi@lucere.it
            </a>
            <Link
              to="/contact"
              className="bg-cream text-espresso px-7 py-4 text-xs uppercase tracking-[0.3em] hover:bg-brass"
            >
              Scrivici
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24">
        <div className="mx-auto max-w-[1400px] relative h-[44vh] min-h-[340px] overflow-hidden">
          <img
            src={aperitivo}
            alt="Aperitivo privato"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            width={1400}
            height={1000}
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function Space({
  name,
  cap,
  desc,
  inc,
}: {
  name: string;
  cap: string;
  desc: string;
  inc: string[];
}) {
  return (
    <div className="grid md:grid-cols-12 gap-10 border-b border-border pb-20">
      <div className="md:col-span-4">
        <p className="eyebrow text-brass">{cap}</p>
        <h3 className="mt-4 font-display text-3xl md:text-4xl text-espresso">{name}</h3>
      </div>
      <div className="md:col-span-8 space-y-6">
        <p className="text-walnut font-light leading-relaxed text-lg">{desc}</p>
        <ul className="grid sm:grid-cols-2 gap-3 text-walnut font-light">
          {inc.map((i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="text-brass">·</span>
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
