import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import hero from "@/assets/hero-cafe.jpg";
import espresso from "@/assets/espresso.jpg";
import pastries from "@/assets/pastries.jpg";
import barista from "@/assets/barista.jpg";
import aperitivo from "@/assets/aperitivo.jpg";
import beans from "@/assets/beans.jpg";
import facade from "@/assets/facade.jpg";
import room from "@/assets/private-room.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Galleria — LUCÉRE" },
      {
        name: "description",
        content:
          "Immagini dal caffè Lucére a Milano. Interni, banco, pasticceria, aperitivi, persone.",
      },
    ],
  }),
});

const IMGS = [
  {
    src: hero,
    alt: "Il banco di Lucére alla luce dell'alba",
    span: "md:col-span-8 md:row-span-2 h-[420px] md:h-[640px]",
  },
  { src: espresso, alt: "Espresso su marmo bianco", span: "md:col-span-4 h-[300px] md:h-[310px]" },
  { src: pastries, alt: "Pasticceria del mattino", span: "md:col-span-4 h-[300px] md:h-[320px]" },
  { src: barista, alt: "Mani di barista", span: "md:col-span-4 h-[300px] md:h-[420px]" },
  { src: aperitivo, alt: "Aperitivo al tramonto", span: "md:col-span-8 h-[300px] md:h-[420px]" },
  { src: beans, alt: "Chicchi di caffè", span: "md:col-span-6 h-[300px] md:h-[380px]" },
  { src: room, alt: "Sala privata dei Marchetti", span: "md:col-span-6 h-[300px] md:h-[380px]" },
  {
    src: facade,
    alt: "Facciata su Via della Spiga",
    span: "md:col-span-12 h-[300px] md:h-[520px]",
  },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Galleria"
        title="Frammenti di Via della Spiga."
        intro="Un piccolo archivio visivo. Immagini scattate nei mesi e negli anni — al banco, in cucina, in sala, sulla terrazza. Senza filtri, senza messa in scena."
      />

      <section className="px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-4">
          {IMGS.map((i, idx) => (
            <figure key={idx} className={`relative overflow-hidden ${i.span}`}>
              <img
                src={i.src}
                alt={i.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1800ms] hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
