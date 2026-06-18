import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Realty Unplugged",
  description:
    "How Realty Unplugged collects, uses, shares and protects your personal information.",
};

const PH = ({ children }: { children: string }) => (
  <span className="ru-placeholder">{children}</span>
);

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      effectiveDate="[EFFECTIVE DATE]"
      intro="Realty Unplugged (“we”, “us” or “our”) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what we collect when you use our website and services, why we collect it, and the choices you have."
    >
      <h2>1. Scope of this Policy</h2>
      <p>
        This Policy applies to information collected through our website,
        enquiry forms, email correspondence and any related services we offer.
        By using our website you agree to the practices described here. If you
        do not agree, please discontinue use of the site.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>Information you provide</h3>
      <ul>
        <li>
          Contact details such as your name, email address and phone number
          when you submit an enquiry, request a callback or subscribe to
          updates.
        </li>
        <li>
          Property preferences and requirements you share with us so we can
          assist you better.
        </li>
        <li>
          Any messages, feedback or documents you choose to send to us.
        </li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li>
          Technical data such as your IP address, browser type, device
          information and pages visited, gathered through cookies and similar
          technologies.
        </li>
        <li>
          Usage data that helps us understand how visitors interact with the
          site.
        </li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>To respond to your enquiries and provide the services you request.</li>
        <li>To share relevant property listings, updates and offers.</li>
        <li>To operate, maintain and improve our website and services.</li>
        <li>To send administrative messages and, where permitted, marketing communications.</li>
        <li>To comply with legal obligations and protect our rights.</li>
      </ul>

      <h2>4. Cookies &amp; Tracking Technologies</h2>
      <p>
        We use cookies to remember your preferences, measure site performance
        and improve your experience. You can control or disable cookies through
        your browser settings, though some features of the site may not function
        properly as a result.
      </p>

      <h2>5. Sharing of Information</h2>
      <p>
        We do not sell your personal information. We may share it with trusted
        service providers who help us operate the website and deliver our
        services, with professional advisers, or where required by law or to
        protect our legitimate interests. Any third parties are expected to
        handle your information securely and only for the purposes we specify.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We apply reasonable technical and organisational measures to protect
        your information against unauthorised access, loss or misuse. However,
        no method of transmission over the internet is completely secure, and we
        cannot guarantee absolute security.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to fulfil
        the purposes set out in this Policy or as required by applicable law,
        after which it is securely deleted or anonymised.
      </p>

      <h2>8. Your Rights</h2>
      <p>
        Depending on your location, you may have the right to access, correct,
        update or delete your personal information, object to certain
        processing, or withdraw consent. To exercise any of these rights, please
        contact us using the details below.
      </p>

      <h2>9. Third-Party Links</h2>
      <p>
        Our website may contain links to external sites that we do not control.
        We are not responsible for the privacy practices of those sites and
        encourage you to review their policies.
      </p>

      <h2>10. Children’s Privacy</h2>
      <p>
        Our services are not directed at children, and we do not knowingly
        collect personal information from minors. If you believe a child has
        provided us with information, please contact us so we can remove it.
      </p>

      <h2>11. Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The latest version
        will always be posted on this page with a revised effective date.
      </p>

      <div className="ru-callout">
        <h2 style={{ marginTop: 0, border: "none", paddingBottom: 0 }}>
          12. Contact Us
        </h2>
        <p>
          If you have questions about this Privacy Policy or how we handle your
          information, please reach out:
        </p>
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
