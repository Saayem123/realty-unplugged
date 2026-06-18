import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="ru-header">
      <div className="ru-header__inner">
        <Link href="/" className="ru-logo">
          Realty <span>Unplugged</span>
        </Link>
        <nav className="ru-nav">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </nav>
      </div>
    </header>
  );
}
