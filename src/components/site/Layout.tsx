import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="pt-48 pb-16 md:pt-56 md:pb-24 px-6 md:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] text-espresso">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 text-lg leading-relaxed text-walnut/90 font-light max-w-2xl mx-auto">
            {intro}
          </p>
        )}
        <div className="mt-10 flex justify-center">
          <span className="rule" />
        </div>
      </div>
    </section>
  );
}
