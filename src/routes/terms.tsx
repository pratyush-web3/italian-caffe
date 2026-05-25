import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({ meta: [{ title: "Termini & Condizioni — LUCÉRE" }] }),
});

function Terms() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Documento legale"
        title="Termini & Condizioni"
        intro="In vigore dal 1 ottobre 2025"
      />
      <article className="mx-auto max-w-3xl px-6 md:px-10 pb-32 space-y-10 text-walnut font-light leading-relaxed">
        <Section h="1. Oggetto">
          <p>
            Le presenti condizioni regolano l'utilizzo del sito www.lucere.it e dei servizi offerti
            da Lucére S.r.l., compresi prenotazioni di tavoli, eventi privati, catering e iscrizione
            alla newsletter.
          </p>
        </Section>
        <Section h="2. Prenotazioni">
          <p>
            La prenotazione di un tavolo è confermata solo a seguito di nostra comunicazione scritta
            (email o SMS). Manteniamo il tavolo per 15 minuti oltre l'orario indicato; trascorso
            questo tempo senza nostre notizie ci riserviamo il diritto di assegnare il tavolo ad
            altri ospiti.
          </p>
          <p>
            Per gruppi superiori alle 8 persone potremo richiedere una pre-autorizzazione sulla
            carta di credito a garanzia. In caso di no-show o cancellazione tardiva (meno di 6 ore
            prima) sarà trattenuto un importo pari a € 20 per ospite.
          </p>
        </Section>
        <Section h="3. Servizio">
          <p>
            Sui prezzi indicati nella nostra carta non è applicato alcun supplemento di servizio
            obbligatorio. Le mance sono lasciate alla libera discrezione dell'ospite. Per ogni
            servizio al tavolo è applicato un coperto pari a € 2,50 per persona, comprensivo di pane
            e olio extravergine.
          </p>
        </Section>
        <Section h="4. Allergeni e intolleranze">
          <p>
            Il nostro personale di sala è formato per illustrare la presenza di allergeni nelle
            preparazioni. Tuttavia, lavorando con prodotti freschi in un unico laboratorio, non
            possiamo escludere contaminazioni crociate. Vi invitiamo a comunicare allergie gravi al
            momento della prenotazione.
          </p>
        </Section>
        <Section h="5. Buoni regalo">
          <p>
            I buoni regalo Lucére hanno validità di 24 mesi dalla data di emissione, sono nominali
            ma trasferibili e possono essere utilizzati per qualsiasi prodotto o servizio in carta.
            Non sono rimborsabili in denaro.
          </p>
        </Section>
        <Section h="6. Catering ed eventi">
          <p>
            La conferma di un evento privato o servizio di catering richiede un acconto pari al 30%
            del preventivo, da versare entro 7 giorni dalla conferma. Il saldo è dovuto entro la
            data dell'evento. Cancellazioni gratuite fino a 30 giorni prima; oltre tale termine sarà
            trattenuto l'acconto.
          </p>
        </Section>
        <Section h="7. Modalità di pagamento">
          <p>
            Accettiamo pagamenti in contanti (entro i limiti di legge), tramite carta di credito e
            debito (Visa, Mastercard, American Express), bonifico bancario e principali sistemi di
            pagamento digitale.
          </p>
        </Section>
        <Section h="8. Reclami e foro competente">
          <p>
            Eventuali reclami possono essere inoltrati a ciao@lucere.it. Per ogni controversia
            inerente l'interpretazione, l'esecuzione e la risoluzione delle presenti condizioni è
            competente in via esclusiva il Foro di Milano.
          </p>
        </Section>
      </article>
    </SiteLayout>
  );
}

function Section({ h, children }: { h: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl text-espresso mb-4">{h}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
