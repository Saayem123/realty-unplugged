import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <section className="ru-hero">
        <div className="ru-hero__inner">
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
        <div className="ru-index__grid">
          <Link href="/privacy-policy" className="ru-index__card">
            <h3>Privacy Policy</h3>
            <p>How we collect, use and protect your personal information.</p>
          </Link>
          <Link href="/terms-and-conditions" className="ru-index__card">
            <h3>Terms &amp; Conditions</h3>
            <p>The rules and terms for using our website and services.</p>
          </Link>
          <Link href="/disclaimer" className="ru-index__card">
            <h3>Disclaimer</h3>
            <p>The limits and intended use of the information we provide.</p>
          </Link>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
