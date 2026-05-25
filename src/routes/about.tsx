import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import facade from "@/assets/facade.jpg";
import beans from "@/assets/beans.jpg";
import barista from "@/assets/barista.jpg";
import pastries from "@/assets/pastries.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Filosofia & Storia — LUCÉRE" },
      {
        name: "description",
        content:
          "La storia di Lucére: dalla cucina di una nonna calabrese a un caffè italiano nel cuore di Milano. Filosofia, persone, materie prime.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="La nostra storia"
        title="Una luce piccola, accesa nel 2011."
        intro="Lucére nasce a Milano da un'idea semplice: restituire al caffè il suo tempo. Un luogo dove l'espresso si beve in piedi al banco, dove la pasticceria si fa la notte, dove ci si ricorda i nomi delle persone."
      />

      {/* Founder story */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[1400px] grid gap-16 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <img
              src={facade}
              alt="Facciata storica del caffè Lucére"
              loading="lazy"
              className="w-full h-[560px] object-cover"
              width={1600}
              height={1100}
            />
          </div>
          <div className="md:col-span-6 md:pl-8">
            <p className="eyebrow">Capitolo I · Le origini</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.1]">
              Da una cucina calabrese a Via della Spiga.
            </h2>
            <div className="mt-8 space-y-5 text-walnut font-light leading-relaxed text-lg">
              <p>
                Elena Marchetti è cresciuta a Tropea, in una casa dove il caffè si faceva con la
                napoletana e dove i biscotti di mandorla della nonna Carmela profumavano la cucina
                ogni domenica. Trasferitasi a Milano per studiare architettura, ha cercato per anni
                un caffè che le ricordasse casa. Non l'ha mai trovato.
              </p>
              <p>
                Nell'autunno del 2011, insieme al fratello Tommaso — sommelier e curioso di
                tostature — apre il primo Lucére in una piccola bottega di Via della Spiga, dove un
                tempo c'era un sarto. Hanno tenuto le pareti in legno scuro, il pavimento in marmo
                di Carrara, e hanno aggiunto un banco lungo dodici metri fatto su misura da un
                artigiano di Cantù.
              </p>
              <p>
                «Volevamo un posto che somigliasse alla casa di nostra nonna, ma che avesse i ritmi
                e l'eleganza di Milano. Un caffè italiano, fatto come si deve, senza fretta.»
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-bone/60">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-3xl md:text-5xl leading-[1.25] italic text-espresso">
            «La velocità è una conquista moderna. La lentezza è una scelta. Da Lucére abbiamo scelto
            la seconda — ogni mattina, da quattordici anni.»
          </p>
          <p className="mt-8 eyebrow text-walnut">— Tommaso Marchetti, co-fondatore</p>
        </div>
      </section>

      {/* Roasting */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px] grid gap-16 md:grid-cols-12 items-center">
          <div className="md:col-span-5 md:pr-8 order-2 md:order-1">
            <p className="eyebrow">Capitolo II · La tostatura</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.1]">
              Tostiamo piano, in piccoli lotti, a Lambrate.
            </h2>
            <div className="mt-8 space-y-5 text-walnut font-light leading-relaxed text-lg">
              <p>
                La nostra torrefazione vive in un capannone industriale di Via Conte Rosso, a
                Lambrate. Una Probat del 1962, restaurata a mano, ci accompagna in ogni lotto.
                Tostiamo non più di 25 chili alla volta — più piccoli i lotti, più precisa la
                lavorazione.
              </p>
              <p>
                La nostra miscela della casa è composta da quattro origini: Yirgacheffe etiope per
                le note floreali, Antigua guatemalteca per la struttura, Mandheling di Sumatra per
                il corpo, e una piccola percentuale di Robusta indiana che dà profondità al finale.
                Ogni partita viene assaggiata a freddo prima di entrare nei sacchi.
              </p>
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <img
              src={beans}
              alt="Chicchi di caffè appena tostati"
              loading="lazy"
              className="w-full h-[520px] md:h-[680px] object-cover"
              width={1200}
              height={1400}
            />
          </div>
        </div>
      </section>

      {/* Sourcing values list */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-bone/40">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center mb-16">
            <p className="eyebrow">Capitolo III · Le materie prime</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Conosciamo chi coltiva e chi munge.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              {
                t: "Caffè",
                d: "Quattro origini single-estate selezionate ogni anno. Lavoriamo direttamente con cooperative etiopi e guatemalteche, senza intermediari.",
              },
              {
                t: "Latte",
                d: "Fattoria della Valsassina, allevamento di Bruna Alpina al pascolo. Consegnato fresco ogni mattina alle sei.",
              },
              {
                t: "Farine",
                d: "Molino Quaglia di Vighizzolo d'Este. Farine macinate a pietra, da grani teneri italiani 100%.",
              },
              {
                t: "Burro",
                d: "Burro di centrifuga normanno per i lievitati, burro di malga lombardo per la cucina.",
              },
              {
                t: "Cioccolato",
                d: "Domori per le creme, Valrhona per le coperture, fondente piemontese delle Langhe per la cioccolata calda.",
              },
              {
                t: "Olio",
                d: "Olio extravergine monocultivar Taggiasca dalla Liguria, frantoio Roi di Badalucco.",
              },
            ].map((v) => (
              <div key={v.t} className="bg-cream p-10">
                <h3 className="font-display text-2xl text-espresso">{v.t}</h3>
                <p className="mt-3 text-walnut leading-relaxed font-light">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pastry */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px] grid gap-16 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <img
              src={pastries}
              alt="Pasticceria artigianale"
              loading="lazy"
              className="w-full h-[560px] object-cover"
              width={1200}
              height={1400}
            />
          </div>
          <div className="md:col-span-6 md:pl-8">
            <p className="eyebrow">Capitolo IV · La pasticceria</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.1]">
              Lievito madre dal 2012. Mai sostituito.
            </h2>
            <div className="mt-8 space-y-5 text-walnut font-light leading-relaxed text-lg">
              <p>
                Davide Lorusso, pastry chef pugliese, è entrato da Lucére nel 2014 e da allora il
                laboratorio è il suo regno. Lavora la notte, dalla mezzanotte alle sette del
                mattino, perché «i lievitati hanno bisogno di silenzio».
              </p>
              <p>
                Il nostro lievito madre è stato rinfrescato per la prima volta nell'aprile del 2012.
                Da allora viene nutrito ogni dodici ore, sempre con la stessa farina, sempre con la
                stessa acqua. È un essere vivo: ha un carattere, ha umori, e va trattato con
                rispetto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-espresso text-cream">
        <div className="mx-auto max-w-[1400px] grid gap-16 md:grid-cols-12 items-center">
          <div className="md:col-span-5">
            <img
              src={barista}
              alt="Un barista al lavoro"
              loading="lazy"
              className="w-full h-[560px] object-cover"
              width={1200}
              height={1500}
            />
          </div>
          <div className="md:col-span-7 md:pl-8">
            <p className="eyebrow text-cream/60">Capitolo V · L'ospitalità</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.1] text-cream">
              Servire è una forma di gentilezza.
            </h2>
            <div className="mt-8 space-y-5 text-cream/85 font-light leading-relaxed text-lg">
              <p>
                Da noi non si chiama «cliente», si chiama «ospite». È una differenza piccola, ma per
                noi cambia tutto. Significa ricordare se preferisci il caffè più stretto. Significa
                portare un bicchiere d'acqua frizzante senza che tu lo chieda. Significa non
                interrompere mai una conversazione.
              </p>
              <p>
                Crediamo che un buon servizio sia invisibile: arriva quando serve, scompare quando
                non serve. È fatto di attenzione, non di formalità.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slow philosophy */}
      <section className="py-32 md:py-40 px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Epilogo · La lentezza</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.1]">
            Non vendiamo caffè.
            <br />
            <em className="italic font-light">Difendiamo un'idea di tempo.</em>
          </h2>
          <p className="mt-10 text-walnut leading-relaxed font-light text-lg">
            In un mondo che corre, fermarsi è un atto politico. Sedersi al banco, scambiare due
            parole con il barista, leggere il giornale mentre la schiuma del cappuccino si posa —
            sono gesti antichi, piccoli, e per noi sacri. Continueremo a difenderli finché avremo un
            banco da pulire la mattina e una porta da aprire.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
