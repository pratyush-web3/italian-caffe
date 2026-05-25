import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import espresso from "@/assets/espresso.jpg";
import beans from "@/assets/beans.jpg";
import pastries from "@/assets/pastries.jpg";
import aperitivo from "@/assets/aperitivo.jpg";
import barista from "@/assets/barista.jpg";

export const Route = createFileRoute("/journal")({
  component: JournalPage,
  head: () => ({
    meta: [
      { title: "Diario — LUCÉRE" },
      {
        name: "description",
        content:
          "Storie, riflessioni e ricette dal banco di Lucére. Caffè, pasticceria, Milano e arte dell'ospitalità.",
      },
    ],
  }),
});

const POSTS = [
  {
    tag: "Rituali",
    date: "12 Novembre 2025",
    title: "Cosa racconta una tazzina vuota",
    excerpt:
      "Sul fondo di un espresso si legge una piccola autobiografia. Una riflessione sul tempo lento dei caffè italiani e sulla bellezza dei gesti ripetuti.",
    image: espresso,
    minutes: 6,
  },
  {
    tag: "Origini",
    date: "28 Ottobre 2025",
    title: "Da Sidamo a Via della Spiga",
    excerpt:
      "Il viaggio di un chicco di Arabica dall'altopiano etiope al nostro torrefattore di Lambrate. Quattromila chilometri, sei mani, una sola tazzina.",
    image: beans,
    minutes: 9,
  },
  {
    tag: "Pasticceria",
    date: "14 Ottobre 2025",
    title: "Le notti di Davide",
    excerpt:
      "Cosa succede nel nostro laboratorio dalla mezzanotte alle sette del mattino. Un ritratto del nostro pastry chef e dei suoi impasti.",
    image: pastries,
    minutes: 7,
  },
  {
    tag: "Milano",
    date: "30 Settembre 2025",
    title: "L'ora dell'aperitivo, spiegata a un viaggiatore",
    excerpt:
      "Perché tra le sei e le otto Milano cambia luce, ritmo e voce. Una piccola guida sentimentale al rito più milanese di tutti.",
    image: aperitivo,
    minutes: 8,
  },
  {
    tag: "Stagioni",
    date: "16 Settembre 2025",
    title: "L'inverno entra dalla finestra",
    excerpt:
      "Quando le giornate si accorciano, il caffè diventa rifugio. Note di lavoro sulla nostra carta di dicembre e qualche pensiero sul tempo che cambia.",
    image: espresso,
    minutes: 5,
  },
  {
    tag: "Ospitalità",
    date: "02 Settembre 2025",
    title: "Ricordarsi i nomi",
    excerpt:
      "La differenza tra un cliente e un ospite sta in una sola cosa: la memoria. Riflessione sul servire come forma di gentilezza quotidiana.",
    image: barista,
    minutes: 6,
  },
];

function JournalPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Diario · Storie dal banco"
        title="Lettere lente da un caffè italiano"
        intro="Una rivista digitale che pubblichiamo quando abbiamo qualcosa da raccontare. Senza calendario, senza fretta. Si parla di caffè, di mani, di Milano, di stagioni, di clienti diventati amici."
      />

      {/* Featured */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1400px] grid gap-12 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <img
              src={POSTS[0].image}
              alt={POSTS[0].title}
              loading="lazy"
              className="w-full h-[420px] md:h-[600px] object-cover"
              width={1200}
              height={1400}
            />
          </div>
          <div className="md:col-span-5 md:pl-8">
            <p className="eyebrow text-brass">
              {POSTS[0].tag} · {POSTS[0].date}
            </p>
            <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05]">
              {POSTS[0].title}
            </h2>
            <p className="mt-6 text-lg text-walnut leading-relaxed font-light">
              {POSTS[0].excerpt}
            </p>
            <button className="mt-8 text-xs uppercase tracking-[0.3em] text-espresso border-b border-brass pb-2">
              Leggi l'articolo · {POSTS[0].minutes} min
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-28 md:py-40 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.slice(1).map((p) => (
              <article key={p.title} className="group cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-[300px] object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                    width={1200}
                    height={900}
                  />
                </div>
                <p className="eyebrow text-brass mt-6">
                  {p.tag} · {p.date}
                </p>
                <h3 className="mt-3 font-display text-2xl md:text-3xl text-espresso group-hover:text-walnut transition-colors leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-walnut leading-relaxed font-light">{p.excerpt}</p>
                <span className="mt-5 inline-block text-[11px] uppercase tracking-[0.28em] text-espresso border-b border-brass pb-1">
                  Continua · {p.minutes} min
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
