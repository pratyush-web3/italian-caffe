import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy-policy")({
  component: Privacy,
  head: () => ({ meta: [{ title: "Privacy Policy — LUCÉRE" }] }),
});

function Privacy() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Documento legale"
        title="Privacy Policy"
        intro="Ultimo aggiornamento: 1 ottobre 2025"
      />
      <article className="mx-auto max-w-3xl px-6 md:px-10 pb-32 prose-content space-y-8 text-walnut font-light leading-relaxed">
        <Section h="1. Titolare del trattamento">
          <p>
            Il titolare del trattamento dei dati personali è <strong>Lucére S.r.l.</strong>, con
            sede legale in Via della Spiga 14, 20121 Milano (MI), P.IVA 09732410961, in persona del
            legale rappresentante pro tempore. Per qualsiasi richiesta relativa al trattamento dei
            vostri dati potete scriverci all'indirizzo{" "}
            <a className="border-b border-brass" href="mailto:privacy@lucere.it">
              privacy@lucere.it
            </a>
            .
          </p>
        </Section>
        <Section h="2. Tipologie di dati raccolti">
          <p>
            Raccogliamo dati personali che voi stessi ci fornite (nome, cognome, email, numero di
            telefono, data di nascita per programmi fedeltà), dati di prenotazione (data, ora,
            numero di ospiti, eventuali intolleranze alimentari) e dati di navigazione (indirizzo
            IP, tipo di browser, pagine visitate) tramite cookie tecnici e analitici.
          </p>
        </Section>
        <Section h="3. Finalità del trattamento">
          <p>I vostri dati vengono trattati esclusivamente per:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>gestire le prenotazioni di tavoli, eventi privati e servizi di catering;</li>
            <li>rispondere a richieste di contatto e informazioni;</li>
            <li>inviare, previo vostro esplicito consenso, la nostra newsletter mensile;</li>
            <li>adempiere a obblighi di legge in materia fiscale, contabile e amministrativa;</li>
            <li>migliorare la qualità del servizio offerto.</li>
          </ul>
        </Section>
        <Section h="4. Base giuridica">
          <p>
            Il trattamento si fonda sull'esecuzione di un contratto (art. 6, par. 1, lett. b GDPR),
            su vostro consenso esplicito per le comunicazioni di marketing (art. 6, par. 1, lett. a
            GDPR) e sul legittimo interesse del titolare per finalità organizzative interne.
          </p>
        </Section>
        <Section h="5. Conservazione dei dati">
          <p>
            I dati di prenotazione vengono conservati per 24 mesi dall'ultima visita. I dati fiscali
            sono conservati per 10 anni come previsto dalla normativa italiana. I dati per finalità
            di marketing vengono conservati fino a vostra revoca del consenso.
          </p>
        </Section>
        <Section h="6. I vostri diritti">
          <p>
            In qualunque momento potete esercitare i diritti previsti dagli artt. 15-22 del GDPR:
            accesso, rettifica, cancellazione, limitazione, portabilità e opposizione. Per farlo è
            sufficiente scrivere a privacy@lucere.it. Avete inoltre diritto di proporre reclamo
            all'Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it).
          </p>
        </Section>
        <Section h="7. Cookie">
          <p>
            Il nostro sito utilizza cookie tecnici necessari al funzionamento e, previo vostro
            consenso, cookie analitici anonimi per comprendere come viene utilizzato il sito. Non
            utilizziamo cookie di profilazione o di terze parti per finalità pubblicitarie.
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
