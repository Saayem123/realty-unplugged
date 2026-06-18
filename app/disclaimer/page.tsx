import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Disclaimer | Realty Unplugged",
  description:
    "Disclaimer covering the limits and intended use of information provided by Realty Unplugged.",
};

export default function Disclaimer() {
  return (
    <LegalLayout
      title="Disclaimer"
      effectiveDate="18 June 2026"
      intro="The information provided by Realty Unplugged on this website is for general informational purposes only. By using our site, you acknowledge and accept the terms of this Disclaimer."
    >
      <h2>1. General Information</h2>
      <p>
        All content on this website is published in good faith and for general
        information only. Realty Unplugged makes no representation or warranty of
        any kind, express or implied, regarding the accuracy, adequacy,
        validity, reliability or completeness of any information on the site.
      </p>

      <h2>2. Property &amp; Listing Information</h2>
      <p>
        Property descriptions, images, prices, dimensions, availability and
        other listing details are indicative only and may change without notice.
        They do not form part of any offer or contract. Prospective buyers and
        tenants should independently verify all details and inspect properties
        before entering into any transaction.
      </p>

      <h2>3. Not Professional Advice</h2>
      <p>
        Nothing on this website constitutes legal, financial, tax, investment or
        real-estate advice. The content should not be relied upon as a substitute
        for advice from a qualified professional. Always seek independent advice
        tailored to your specific circumstances before making any decision.
      </p>

      <h2>4. No Guarantees</h2>
      <p>
        We do not guarantee any particular outcome, return or result from the use
        of the information on this website. Any reliance you place on such
        information is strictly at your own risk.
      </p>

      <h2>5. External Links Disclaimer</h2>
      <p>
        This website may contain links to external websites that are not provided
        or maintained by us. We do not guarantee the accuracy, relevance or
        completeness of any information on those external sites and are not
        responsible for their content.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        Under no circumstances shall Realty Unplugged be liable for any loss or
        damage of any kind incurred as a result of the use of this website or
        reliance on any information provided. Your use of the website and your
        reliance on any information is solely at your own risk.
      </p>

      <h2>7. Errors &amp; Omissions</h2>
      <p>
        While we strive to keep information up to date and correct, errors or
        omissions may occur. We reserve the right to make changes, corrections
        and improvements to the content at any time without notice.
      </p>

      <h2>8. Fair Use &amp; Trademarks</h2>
      <p>
        Any third-party names, logos or trademarks referenced on this website
        remain the property of their respective owners and are used for
        identification purposes only. Their use does not imply any affiliation or
        endorsement.
      </p>

      <h2>9. Consent</h2>
      <p>
        By using our website, you hereby consent to this Disclaimer and agree to
        its terms. If you do not agree, please refrain from using the site.
      </p>

      <div className="ru-callout">
        <h2 style={{ marginTop: 0, border: "none", paddingBottom: 0 }}>
          10. Contact Us
        </h2>
        <p>
          Should you have any feedback or questions regarding this Disclaimer:
        </p>
        <p>
          <strong>Realty Unplugged</strong>
          <br />
          Email: <a href="mailto:info@realtyunplugged.com">info@realtyunplugged.com</a>
          <br />
          Phone: <a href="tel:+919818027516">+91 9818027516</a>
          <br />
          Address: Shop No. 11, 3rd Floor, Omaxe Celebration Mall, Sohna Road,
          Gurgaon&ndash;122018
        </p>
      </div>
    </LegalLayout>
  );
}
