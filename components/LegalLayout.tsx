import { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Reveal from "./Reveal";

type Props = {
  title: string;
  intro: string;
  effectiveDate: string;
  children: ReactNode;
};

export default function LegalLayout({
  title,
  intro,
  effectiveDate,
  children,
}: Props) {
  return (
    <>
      <SiteHeader />
      <section className="ru-hero">
        <div className="ru-hero__inner">
          <span className="ru-hero__eyebrow">Legal</span>
          <h1>{title}</h1>
          <div className="ru-hero__bar" />
          <p className="ru-hero__meta">Effective date: {effectiveDate}</p>
        </div>
      </section>
      <main className="ru-main">
        <article className="ru-card" data-reveal>
          <p className="ru-intro">{intro}</p>
          {children}
        </article>
      </main>
      <SiteFooter />
      <Reveal />
    </>
  );
}
