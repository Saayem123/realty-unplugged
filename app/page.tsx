import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

const items = [
  {
    href: "/privacy-policy",
    title: "Privacy Policy",
    desc: "How we collect, use and protect your personal information.",
  },
  {
    href: "/terms-and-conditions",
    title: "Terms & Conditions",
    desc: "The rules and terms for using our website and services.",
  },
  {
    href: "/disclaimer",
    title: "Disclaimer",
    desc: "The limits and intended use of the information we provide.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <section className="ru-hero">
        <div className="ru-hero__inner">
          <span className="ru-hero__eyebrow">Realty Unplugged</span>
          <h1>Legal &amp; Policies</h1>
          <div className="ru-hero__bar" />
          <p className="ru-hero__meta">
            The policies that govern your use of Realty Unplugged.
          </p>
        </div>
      </section>
      <div className="ru-index">
        <p className="ru-intro">
          Transparency matters to us. The documents below explain how we handle
          your data, the terms under which we provide our services, and the
          limits of the information shared on this website.
        </p>
        <div className="ru-index__grid" data-reveal>
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="ru-index__card">
              <span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </span>
              <span className="ru-index__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
      <SiteFooter />
      <Reveal />
    </>
  );
}
