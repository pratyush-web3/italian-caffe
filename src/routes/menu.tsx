import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import beans from "@/assets/beans.jpg";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "La Carta — LUCÉRE" },
      {
        name: "description",
        content:
          "Caffetteria, colazione, pasticceria, brunch, pranzo, aperitivo e cantina. La carta completa di Lucére, caffè italiano a Milano.",
      },
    ],
  }),
});

type Item = { name: string; desc: string; price: string };
type Section = { title: string; sub: string; items: Item[] };

const SECTIONS: Section[] = [
  {
    title: "Caffetteria",
    sub: "La nostra miscela d'autore, tostata a Lambrate.",
    items: [
      {
        name: "Espresso Lucére",
        desc: "Miscela della casa, crema densa, finale lungo di cacao.",
        price: "€ 1,80",
      },
      {
        name: "Espresso macchiato",
        desc: "Con una nuvola di latte intero della Valsassina.",
        price: "€ 2,00",
      },
      {
        name: "Cappuccino",
        desc: "Latte montato a vapore, schiuma vellutata, cacao amaro.",
        price: "€ 2,40",
      },
      {
        name: "Marocchino",
        desc: "Espresso, cacao, schiuma di latte. Servito in vetro.",
        price: "€ 2,80",
      },
      {
        name: "Caffè in ghiaccio leccese",
        desc: "Espresso freddo, latte di mandorla artigianale, ghiaccio.",
        price: "€ 3,50",
      },
      {
        name: "Caffè al Marsala",
        desc: "Espresso corretto con Marsala Vergine 1980.",
        price: "€ 4,20",
      },
      {
        name: "Single-estate Yirgacheffe",
        desc: "Filtro V60. Note floreali di bergamotto e gelsomino.",
        price: "€ 5,50",
      },
      {
        name: "Cioccolata calda Piemonte",
        desc: "Cioccolato fondente 72% delle Langhe, panna fresca.",
        price: "€ 4,80",
      },
    ],
  },
  {
    title: "Pasticceria del mattino",
    sub: "Lievitati nati la notte, serviti fino alle 11:30.",
    items: [
      {
        name: "Cornetto al burro",
        desc: "Sfoglia a 36 ore, burro di centrifuga francese, zucchero a velo.",
        price: "€ 2,20",
      },
      {
        name: "Cornetto al pistacchio di Bronte",
        desc: "Crema di pistacchio puro al 45%, granella tostata.",
        price: "€ 3,50",
      },
      {
        name: "Cornetto alla crema di limone d'Amalfi",
        desc: "Crema pasticcera al limone Costa d'Amalfi IGP.",
        price: "€ 3,20",
      },
      {
        name: "Sfogliatella riccia napoletana",
        desc: "Ricotta di pecora, canditi di cedro, cannella.",
        price: "€ 3,80",
      },
      {
        name: "Maritozzo con la panna",
        desc: "Lievitato soffice, panna fresca montata al momento.",
        price: "€ 4,20",
      },
      {
        name: "Bombolone alla crema chantilly",
        desc: "Fritto a vista, chantilly alla vaniglia del Madagascar.",
        price: "€ 3,50",
      },
      {
        name: "Plumcake mandorle e arancia",
        desc: "Mandorle pugliesi, scorza candita di arancia di Ribera.",
        price: "€ 3,80",
      },
    ],
  },
  {
    title: "Brunch del weekend",
    sub: "Servito sabato e domenica, 10:00 — 14:30.",
    items: [
      {
        name: "Uova in cocotte al tartufo",
        desc: "Tuorli morbidi, fonduta di parmigiano 36 mesi, scaglie di tartufo nero.",
        price: "€ 16,00",
      },
      {
        name: "Ricotta al miele e fichi",
        desc: "Ricotta di bufala campana, miele di castagno della Lunigiana, fichi caramellati.",
        price: "€ 12,00",
      },
      {
        name: "Avocado, burrata e pomodorini confit",
        desc: "Burrata pugliese, datterino confit al timo, pane integrale tostato.",
        price: "€ 14,00",
      },
      {
        name: "Pancakes alla farina di castagne",
        desc: "Sciroppo di acero, ricotta montata, mirtilli del Trentino.",
        price: "€ 13,00",
      },
      {
        name: "Tagliere del salumiere",
        desc: "Prosciutto di Parma 24 mesi, finocchiona toscana, mortadella di Bologna IGP.",
        price: "€ 18,00",
      },
    ],
  },
  {
    title: "Pranzo & cucina del giorno",
    sub: "Tre piatti che cambiano ogni settimana, scritti a gesso sulla lavagna.",
    items: [
      {
        name: "Risotto alla milanese",
        desc: "Riso Carnaroli, zafferano dell'Aquila, midollo, burro acido.",
        price: "€ 22,00",
      },
      {
        name: "Spaghetti al pomodoro San Marzano",
        desc: "Pasta di Gragnano, pomodori del Vesuvio, basilico genovese.",
        price: "€ 18,00",
      },
      {
        name: "Vitello tonnato piemontese",
        desc: "Geretto di vitello cotto a bassa temperatura, salsa tonnata classica.",
        price: "€ 24,00",
      },
      {
        name: "Insalata di puntarelle e alici",
        desc: "Puntarelle romane, alici del Cantabrico, limone, olio EVO ligure.",
        price: "€ 16,00",
      },
      {
        name: "Cotoletta alla milanese alta",
        desc: "Costoletta di vitello con osso, panatura dorata, burro chiarificato.",
        price: "€ 32,00",
      },
    ],
  },
  {
    title: "Dolci & dessert",
    sub: "Dalla nostra pasticceria. Cambiano con le stagioni.",
    items: [
      {
        name: "Tiramisù al Marsala",
        desc: "Mascarpone montato, savoiardi inzuppati in caffè e Marsala, cacao amaro.",
        price: "€ 9,00",
      },
      {
        name: "Panna cotta al miele di lavanda",
        desc: "Panna fresca della Valsassina, miele di lavanda di Provenza.",
        price: "€ 8,50",
      },
      {
        name: "Torta caprese ai marroni",
        desc: "Cioccolato fondente 70%, marroni canditi, mascarpone.",
        price: "€ 10,00",
      },
      {
        name: "Gelato artigianale",
        desc: "Tre gusti del giorno. Chiedete al barista cosa abbiamo mantecato stamattina.",
        price: "€ 7,50",
      },
      {
        name: "Affogato al caffè",
        desc: "Gelato fiordilatte affogato in espresso doppio Lucére.",
        price: "€ 8,00",
      },
    ],
  },
  {
    title: "Aperitivo del banco",
    sub: "Tutti i giorni, 18:00 — 21:00. Con piccoli assaggi inclusi.",
    items: [
      {
        name: "Negroni del Banco",
        desc: "Gin lombardo, vermouth Cocchi, bitter Carlo Alberto. Scorza d'arancia di Ribera.",
        price: "€ 12,00",
      },
      {
        name: "Spritz Veneziano",
        desc: "Aperol, Prosecco di Valdobbiadene DOCG, soda, oliva taggiasca.",
        price: "€ 9,00",
      },
      {
        name: "Americano classico",
        desc: "Campari, vermouth Cocchi, soda, fetta d'arancia.",
        price: "€ 10,00",
      },
      {
        name: "Hugo all'elisir di sambuco",
        desc: "Prosecco, sciroppo di sambuco artigianale, menta fresca.",
        price: "€ 9,00",
      },
      {
        name: "Vermouth Cocchi al ghiaccio",
        desc: "Servito alla maniera piemontese, con scorza di limone.",
        price: "€ 8,00",
      },
    ],
  },
  {
    title: "Cantina & vini al calice",
    sub: "Una piccola selezione di vignaioli italiani indipendenti.",
    items: [
      {
        name: "Franciacorta Brut Satèn",
        desc: "Chardonnay 100%, sosta sui lieviti 30 mesi. Bottega del Vino, Erbusco.",
        price: "€ 11,00",
      },
      {
        name: "Vermentino di Bolgheri",
        desc: "Annata 2023. Note minerali, finale salino. Tenuta dell'Argentiera.",
        price: "€ 9,00",
      },
      {
        name: "Etna Rosso 'Outis'",
        desc: "Nerello Mascalese, suoli lavici. Tenute di Fessina, Sicilia.",
        price: "€ 12,00",
      },
      {
        name: "Barolo del Comune di Serralunga",
        desc: "Annata 2019. Nebbiolo da vigne di 50 anni. Schiavenza.",
        price: "€ 18,00",
      },
      {
        name: "Passito di Pantelleria",
        desc: "Zibibbo appassito al sole. Servito con biscotti di mandorle.",
        price: "€ 10,00",
      },
    ],
  },
];

function MenuPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="La carta"
        title="Quello che vi serviamo oggi"
        intro="La carta cambia con le stagioni e con quello che troviamo al mercato. Tutti i prezzi sono in euro, servizio incluso. Per intolleranze, parlate con il personale: cuciniamo con prodotti freschi e sappiamo cosa c'è in ogni piatto."
      />

      {/* Beans visual */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1400px] relative h-[44vh] min-h-[340px] overflow-hidden">
          <img
            src={beans}
            alt="Chicchi di caffè della miscela Lucére"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            width={1200}
            height={1400}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 to-transparent" />
          <div className="relative z-10 h-full flex items-center p-10 md:p-16 max-w-xl text-cream">
            <p className="font-display text-3xl md:text-4xl italic leading-snug">
              «Una carta non è una lista. È un invito a sedersi.»
            </p>
          </div>
        </div>
      </section>

      {/* Menu sections */}
      <div className="mx-auto max-w-4xl px-6 md:px-10 py-24 md:py-32 space-y-24">
        {SECTIONS.map((sec) => (
          <section key={sec.title}>
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl md:text-5xl text-espresso">{sec.title}</h2>
              <p className="mt-3 text-walnut/80 italic font-light">{sec.sub}</p>
              <div className="mt-6 flex justify-center">
                <span className="rule" />
              </div>
            </div>
            <ul className="divide-y divide-border">
              {sec.items.map((it) => (
                <li key={it.name} className="py-7 grid grid-cols-[1fr_auto] gap-6 items-baseline">
                  <div>
                    <h3 className="font-display text-2xl text-espresso">{it.name}</h3>
                    <p className="mt-2 text-walnut leading-relaxed font-light">{it.desc}</p>
                  </div>
                  <span className="font-serif-display text-lg text-brass whitespace-nowrap">
                    {it.price}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="text-center eyebrow text-walnut/70">
          Coperto € 2,50 · Servizio incluso · IVA assolta dall'esercente
        </p>
      </div>
    </SiteLayout>
  );
}
