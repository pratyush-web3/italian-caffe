import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contatti — LUCÉRE" },
      {
        name: "description",
        content:
          "Indirizzo, orari, contatti e indicazioni per raggiungere Lucére in Via della Spiga 14, Milano.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contatti"
        title="Dove trovarci, come scriverci."
        intro="Siamo in pieno Quadrilatero della Moda, a due passi da Montenapoleone. Aperti tutti i giorni della settimana, festivi compresi."
      />

      <section className="px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-275 grid md:grid-cols-12 gap-14">
          <div className="md:col-span-5 space-y-10">
            <Block title="Indirizzo">
              Via della Spiga, 14
              <br />
              20121 Milano (MI)
              <br />
              Italia
            </Block>
            <Block title="Telefono">
              +39 02 7600 4421
              <br />
              <span className="text-sm text-walnut/70">Lun — Dom · 07:00 — 22:00</span>
            </Block>
            <Block title="Email">
              <a href="mailto:ciao@lucere.it" className="border-b border-brass">
                ciao@lucere.it
              </a>
              <br />
              <a href="mailto:prenotazioni@lucere.it" className="border-b border-brass">
                prenotazioni@lucere.it
              </a>
              <br />
              <a href="mailto:eventi@lucere.it" className="border-b border-brass">
                eventi@lucere.it
              </a>
            </Block>
            <Block title="Come arrivare">
              MM3 Montenapoleone · 3 min a piedi
              <br />
              MM1 San Babila · 6 min a piedi
              <br />
              Tram 1 — fermata Manzoni / Croce Rossa
            </Block>
          </div>

          <div className="md:col-span-7 space-y-10">
            <div>
              <p className="eyebrow">Orari di apertura</p>
              <table className="mt-5 w-full text-walnut font-light">
                <tbody className="divide-y divide-border">
                  {[
                    ["Lunedì", "07:00 — 22:30"],
                    ["Martedì", "07:00 — 22:30"],
                    ["Mercoledì", "07:00 — 22:30"],
                    ["Giovedì", "07:00 — 23:00"],
                    ["Venerdì", "07:00 — 23:30"],
                    ["Sabato", "08:00 — 23:30"],
                    ["Domenica", "08:30 — 21:00"],
                  ].map(([d, h]) => (
                    <tr key={d}>
                      <td className="py-3 text-sm uppercase tracking-[0.2em]">{d}</td>
                      <td className="py-3 text-right font-serif-display text-lg text-espresso">
                        {h}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="aspect-4/3 w-full overflow-hidden border border-border">
              <iframe
                title="Mappa Lucére Milano"
                src="https://www.openstreetmap.org/export/embed.html?bbox=9.1925%2C45.4685%2C9.1985%2C45.4715&layer=mapnik&marker=45.47%2C9.1955"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <div className="mt-4 font-display text-2xl text-espresso leading-relaxed">{children}</div>
    </div>
  );
}
