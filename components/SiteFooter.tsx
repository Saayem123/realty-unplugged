import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="ru-footer">
      <div className="ru-footer__inner">
        <div>
          <div className="ru-footer__brand">
            Realty <span>Unplugged</span>
          </div>
          <p>
            Your trusted partner for clear, no-nonsense real estate guidance,
            property listings and advisory services.
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:info@realtyunplugged.com">info@realtyunplugged.com</a>
          <a href="tel:+919818027516">+91 9818027516</a>
          <p>
            Shop No. 11, 3rd Floor, Omaxe Celebration Mall, Sohna Road,
            Gurgaon&ndash;122018
          </p>
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
