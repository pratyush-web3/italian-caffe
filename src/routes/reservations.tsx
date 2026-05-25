import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/reservations")({
  component: ReservationsPage,
  head: () => ({
    meta: [
      { title: "Prenotazioni — LUCÉRE" },
      {
        name: "description",
        content:
          "Prenota un tavolo da Lucére, caffè italiano a Milano. Colazione, brunch, pranzo, aperitivo e cena.",
      },
    ],
  }),
});

function ReservationsPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Prenotazioni"
        title="Tenete un tavolo per noi."
        intro="Per il caffè al banco non serve prenotare: si entra, si saluta, si beve. Per fermarvi più a lungo — brunch, pranzo, aperitivo o cena — vi chiediamo di scriverci. Confermiamo entro due ore."
      />

      <section className="px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-[1100px] grid md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            {sent ? (
              <div className="border border-border bg-card p-12 text-center">
                <p className="eyebrow text-brass">Grazie</p>
                <h2 className="mt-4 font-display text-4xl text-espresso">
                  La vostra richiesta è arrivata.
                </h2>
                <p className="mt-4 text-walnut font-light">
                  Vi scriveremo a breve per confermare il tavolo. A presto da Lucére.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-7"
              >
                <div className="grid md:grid-cols-2 gap-7">
                  <Field label="Nome" name="nome" placeholder="Maria Bianchi" />
                  <Field label="Cognome" name="cognome" placeholder="" />
                </div>
                <div className="grid md:grid-cols-2 gap-7">
                  <Field label="Email" name="email" type="email" placeholder="maria@email.it" />
                  <Field label="Telefono" name="tel" type="tel" placeholder="+39 333 1234567" />
                </div>
                <div className="grid md:grid-cols-3 gap-7">
                  <Field label="Data" name="data" type="date" />
                  <Field label="Ora" name="ora" type="time" defaultValue="20:00" />
                  <Field
                    label="Persone"
                    name="persone"
                    type="number"
                    min={1}
                    max={20}
                    defaultValue={2}
                  />
                </div>
                <div>
                  <label className="eyebrow block mb-3">Servizio</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["Colazione", "Brunch", "Pranzo", "Aperitivo / Cena"].map((s) => (
                      <label key={s} className="cursor-pointer">
                        <input
                          type="radio"
                          name="servizio"
                          className="peer sr-only"
                          defaultChecked={s === "Aperitivo / Cena"}
                        />
                        <span className="block border border-border peer-checked:border-espresso peer-checked:bg-espresso peer-checked:text-cream py-3 px-4 text-center text-sm transition-colors">
                          {s}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="eyebrow block mb-3">Note (opzionale)</label>
                  <textarea
                    rows={4}
                    placeholder="Compleanno, intolleranze, tavolo vicino alla finestra, sedia per bambini..."
                    className="w-full bg-transparent border border-border p-4 text-walnut placeholder:text-walnut/40 outline-none focus:border-espresso font-light"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-espresso text-cream px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-walnut transition-colors"
                >
                  Invia richiesta
                </button>
                <p className="text-xs text-walnut/70 font-light">
                  Inviando la richiesta acconsentite al trattamento dei dati secondo la nostra
                  Privacy Policy.
                </p>
              </form>
            )}
          </div>

          <aside className="md:col-span-5 md:pl-8 space-y-10">
            <div>
              <p className="eyebrow">Informazioni utili</p>
              <h3 className="mt-3 font-display text-2xl text-espresso">Policy di prenotazione</h3>
              <ul className="mt-5 space-y-3 text-walnut font-light leading-relaxed text-sm">
                <li>· Manteniamo il tavolo per 15 minuti oltre l'orario prenotato.</li>
                <li>· Per gruppi oltre le 8 persone vi chiediamo un menù concordato.</li>
                <li>· Cancellazioni gratuite fino a 6 ore prima dell'orario prenotato.</li>
                <li>· No-show: trattenuti € 20 per ospite tramite il pre-autorizzato.</li>
                <li>· Accettiamo cani di piccola taglia nella sala interna.</li>
              </ul>
            </div>
            <div className="border-t border-border pt-10">
              <p className="eyebrow">Per richieste speciali</p>
              <p className="mt-3 text-walnut font-light leading-relaxed">
                Per eventi privati, catering, prenotazioni di gruppo o richieste particolari,
                scriveteci direttamente — rispondiamo personalmente.
              </p>
              <a
                href="mailto:prenotazioni@lucere.it"
                className="mt-4 inline-block text-espresso border-b border-brass pb-1 text-sm"
              >
                prenotazioni@lucere.it
              </a>
              <p className="mt-2 text-walnut font-light text-sm">+39 02 7600 4421</p>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <div>
      <label className="eyebrow block mb-3">{label}</label>
      <input
        {...rest}
        className="w-full bg-transparent border-b border-border py-3 text-walnut placeholder:text-walnut/40 outline-none focus:border-espresso font-light"
      />
    </div>
  );
}
