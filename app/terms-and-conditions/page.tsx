import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions | Realty Unplugged",
  description:
    "The terms and conditions governing your use of the Realty Unplugged website and services.",
};

const PH = ({ children }: { children: string }) => (
  <span className="ru-placeholder">{children}</span>
);

export default function TermsAndConditions() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      effectiveDate="[EFFECTIVE DATE]"
      intro="These Terms & Conditions govern your access to and use of the Realty Unplugged website and the services we offer. By using our website, you confirm that you accept these terms and agree to comply with them. If you do not agree, please do not use our site."
    >
      <h2>1. About These Terms</h2>
      <p>
        “Realty Unplugged”, “we”, “us” and “our” refer to the operator of this
        website. “You” and “your” refer to any visitor or user of the site.
        These terms apply to the entire website and to every communication
        between you and us.
      </p>

      <h2>2. Use of the Website</h2>
      <ul>
        <li>You agree to use the website only for lawful purposes.</li>
        <li>
          You must not misuse the site by knowingly introducing malicious code
          or attempting to gain unauthorised access to our systems.
        </li>
        <li>
          You must not use the content or listings for any purpose that is
          fraudulent, misleading or harmful to others.
        </li>
        <li>
          We may restrict or suspend access to the website at any time without
          notice where we consider it necessary.
        </li>
      </ul>

      <h2>3. Property Information &amp; Listings</h2>
      <p>
        Property details, prices, availability and other listing information are
        provided for general guidance only and may change without notice. While
        we take care to keep information accurate, we do not warrant that it is
        complete, current or error-free. Any property transaction should be
        verified independently before you rely on it.
      </p>

      <h2>4. No Professional Advice</h2>
      <p>
        Information on this website is provided for general informational
        purposes and does not constitute legal, financial, investment or other
        professional advice. You should obtain independent professional advice
        before making any decision based on the content of this site.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        All content on this website — including text, graphics, logos, images
        and design — is owned by or licensed to Realty Unplugged and is
        protected by applicable intellectual property laws. You may view and
        print content for your own personal, non-commercial use only. You may
        not reproduce, distribute or exploit any content without our prior
        written permission.
      </p>

      <h2>6. Third-Party Links</h2>
      <p>
        Our website may include links to third-party websites and resources. We
        provide these links for convenience only and do not endorse or accept
        responsibility for the content or practices of those sites.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Realty Unplugged shall not be
        liable for any loss or damage — direct, indirect or consequential —
        arising from your use of, or inability to use, this website or from
        reliance on any information contained on it.
      </p>

      <h2>8. Indemnity</h2>
      <p>
        You agree to indemnify and hold harmless Realty Unplugged and its team
        from any claims, losses or expenses arising out of your breach of these
        terms or your misuse of the website.
      </p>

      <h2>9. Privacy</h2>
      <p>
        Your use of the website is also governed by our{" "}
        <a href="/privacy-policy">Privacy Policy</a>, which explains how we
        handle your personal information.
      </p>

      <h2>10. Changes to These Terms</h2>
      <p>
        We may revise these Terms &amp; Conditions at any time. The current
        version will always be posted on this page, and your continued use of
        the website constitutes acceptance of the updated terms.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These terms are governed by and construed in accordance with applicable
        law, and any disputes shall be subject to the exclusive jurisdiction of
        the competent courts of <PH>[JURISDICTION]</PH>.
      </p>

      <div className="ru-callout">
        <h2 style={{ marginTop: 0, border: "none", paddingBottom: 0 }}>
          12. Contact Us
        </h2>
        <p>If you have any questions about these Terms &amp; Conditions:</p>
        <p>
          <strong>Realty Unplugged</strong>
          <br />
          Email: <PH>[EMAIL]</PH>
          <br />
          Phone: <PH>[PHONE]</PH>
          <br />
          Address: <PH>[ADDRESS]</PH>
        </p>
      </div>
    </LegalLayout>
  );
}
