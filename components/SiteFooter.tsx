import Link from "next/link";

/* Contact details are placeholders — replace the bracketed
   values with Realty Unplugged's real email, phone & address. */
export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="ru-footer">
      <div className="ru-footer__inner">
        <div>
          <h4>Realty Unplugged</h4>
          <p>
            Your trusted partner for clear, no-nonsense real estate guidance,
            property listings and advisory services.
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:[EMAIL]">[EMAIL]</a>
          <a href="tel:[PHONE]">[PHONE]</a>
          <p>[ADDRESS]</p>
        </div>
        <div>
          <h4>Legal</h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
      <div className="ru-footer__bottom">
        © {year} Realty Unplugged. All rights reserved.
      </div>
    </footer>
  );
}
