import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import pastries from "@/assets/pastries.jpg";
import aperitivo from "@/assets/aperitivo.jpg";

export const Route = createFileRoute("/catering")({
  component: CateringPage,
  head: () => ({
    meta: [
      { title: "Catering — LUCÉRE" },
      {
        name: "description",
        content:
          "Catering di colazioni, coffee break e aperitivi a Milano. Lucére porta il proprio caffè italiano nei vostri uffici, showroom e set fotografici.",
      },
    ],
  }),
});

function CateringPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Catering & Coffee Service"
        title="Portiamo Lucére da voi."
        intro="Colazioni d'ufficio, coffee break per riunioni, aperitivi in showroom, breakfast per shooting fotografici. Veniamo con il nostro banco mobile, le nostre tazzine, i nostri baristi."
      />

      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[1100px] grid md:grid-cols-3 gap-px bg-border">
          {[
            {
              t: "La Colazione",
              p: "da € 18 / persona",
              d: "Cornetti caldi, mini-pasticceria, succo di agrumi spremuto, caffetteria completa servita al momento.",
              best: "Riunioni mattutine, eventi stampa, set",
            },
            {
              t: "Il Coffee Break",
              p: "da € 12 / persona",
              d: "Espresso, cappuccino, tè in foglia, biscotteria fine, mini-cake al limone e cioccolato.",
              best: "Conferenze, workshop, board meeting",
            },
            {
              t: "L'Aperitivo Milanese",
              p: "da € 32 / persona",
              d: "Cocktail signature, vini al calice, focacce calde, taglieri di salumi, finger food caldi e freddi.",
              best: "Vernissage, lanci stampa, sere d'estate",
            },
          ].map((c) => (
            <div key={c.t} className="bg-cream p-10 md:p-12 flex flex-col">
              <p className="eyebrow text-brass">{c.best}</p>
              <h3 className="mt-4 font-display text-3xl text-espresso">{c.t}</h3>
              <p className="mt-2 font-serif-display text-xl text-walnut">{c.p}</p>
              <p className="mt-6 text-walnut font-light leading-relaxed flex-1">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1400px] grid md:grid-cols-2 gap-px bg-border">
          <img
            src={pastries}
            alt="Pasticceria per catering"
            loading="lazy"
            className="h-[420px] md:h-[520px] w-full object-cover"
          />
          <img
            src={aperitivo}
            alt="Aperitivo a domicilio"
            loading="lazy"
            className="h-[420px] md:h-[520px] w-full object-cover"
          />
        </div>
      </section>

      <section className="py-28 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl text-espresso text-center">Come funziona</h2>
          <ol className="mt-12 space-y-10">
            {[
              [
                "I",
                "Ci scrivete",
                "Data, numero di ospiti, indirizzo, formato preferito. Rispondiamo entro la giornata lavorativa.",
              ],
              [
                "II",
                "Costruiamo insieme il menù",
                "Vi mandiamo due o tre proposte personalizzate, con vini e cocktail abbinati.",
              ],
              [
                "III",
                "Arriviamo in anticipo",
                "Il nostro team è in postazione almeno 90 minuti prima per allestire tutto in silenzio.",
              ],
              [
                "IV",
                "Vi lasciamo in ordine",
                "Sparecchiamo, ripuliamo, portiamo via tutto. Non resta niente, solo il ricordo.",
              ],
            ].map(([n, t, d]) => (
              <li key={n} className="grid grid-cols-[auto_1fr] gap-8 border-b border-border pb-10">
                <span className="font-serif-display text-4xl text-brass">{n}</span>
                <div>
                  <h3 className="font-display text-2xl text-espresso">{t}</h3>
                  <p className="mt-2 text-walnut font-light leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-16 text-center">
            <a
              href="mailto:catering@lucere.it"
              className="inline-flex items-center bg-espresso text-cream px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-walnut transition-colors"
            >
              catering@lucere.it
            </a>
            <p className="mt-4 text-walnut/80 font-light text-sm">
              Minimo 15 persone · Milano e provincia · Su richiesta in tutta Lombardia
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
