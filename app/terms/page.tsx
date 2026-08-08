import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | ChatNova",
  description:
    "Read the ChatNova Terms & Conditions covering anonymous chat, user responsibilities, prohibited activities and use of the ChatNova platform.",
  keywords: [
    "ChatNova Terms",
    "Terms and Conditions",
    "ChatNova Terms of Service",
    "Anonymous Chat Terms",
    "Random Chat Rules",
  ],
  alternates: {
    canonical: "https://chatnova.in/terms",
  },
};

export default function TermsPage() {
  return (
    <main>
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold mb-8">
          Terms & Conditions
        </h1>

        <p className="text-gray-300 mb-8">
          Last Updated: July 2026
        </p>

        <p className="text-gray-300 leading-8">
          These Terms & Conditions govern your use of ChatNova, an
          anonymous random chat platform. By accessing or using ChatNova,
          you agree to follow these terms and the applicable laws and
          regulations.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Acceptance of Terms
        </h2>

        <p className="text-gray-300 leading-8">
          By using ChatNova, you acknowledge that you have read and
          understood these Terms & Conditions and agree to comply with
          them. If you do not agree with these terms, you should not use
          the service.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Age Requirement
        </h2>

        <p className="text-gray-300 leading-8">
          ChatNova is intended only for users who are 18 years of age or
          older. By using the service, you confirm that you meet this
          age requirement.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Anonymous Chat
        </h2>

        <p className="text-gray-300 leading-8">
          ChatNova allows users to connect with random strangers through
          anonymous text conversations. Users are responsible for their
          own behaviour, messages and interactions while using the
          platform.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          User Responsibilities
        </h2>

        <p className="text-gray-300 leading-8 mb-4">
          When using ChatNova, you agree to:
        </p>

        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Use the platform responsibly and respectfully.</li>
          <li>Follow applicable laws and regulations.</li>
          <li>Respect the privacy and safety of other users.</li>
          <li>Avoid sharing sensitive personal information.</li>
          <li>Leave conversations that become inappropriate or unsafe.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Prohibited Activities
        </h2>

        <p className="text-gray-300 leading-8 mb-4">
          Users must not use ChatNova for activities including, but not
          limited to:
        </p>

        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Harassment, bullying or abuse.</li>
          <li>Threats or intimidation.</li>
          <li>Hate speech or discriminatory behaviour.</li>
          <li>Sexual or explicit content.</li>
          <li>Illegal activities or unlawful content.</li>
          <li>Spam, scams or deceptive activity.</li>
          <li>Attempting to obtain another user's passwords or private information.</li>
          <li>Sharing passwords, OTPs or financial information.</li>
          <li>Using the service to harm, exploit or threaten other users.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Personal Information
        </h2>

        <p className="text-gray-300 leading-8">
          Users should not share sensitive personal information during
          anonymous conversations. This includes passwords, OTPs, financial
          information, home addresses, private contact details and other
          information that could compromise personal safety or privacy.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Enforcement
        </h2>

        <p className="text-gray-300 leading-8">
          ChatNova may take appropriate action when users violate these
          Terms & Conditions or the Community Guidelines. Depending on
          the circumstances, this may include restricting access,
          disconnecting a conversation, suspending access or permanently
          preventing a user from using the service.
        </p>

        <p className="text-gray-300 leading-8 mt-4">
          ChatNova may also respond to lawful requests from competent
          authorities where required by applicable law.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Service Availability
        </h2>

        <p className="text-gray-300 leading-8">
          ChatNova may change, suspend or discontinue parts of the service
          when necessary for maintenance, security, technical reasons or
          other operational requirements.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Disclaimer
        </h2>

        <p className="text-gray-300 leading-8">
          ChatNova provides the service on an "as is" and "as available"
          basis. We do not guarantee that the service will always be
          uninterrupted, error-free or available at all times.
        </p>

        <p className="text-gray-300 leading-8 mt-4">
          ChatNova does not control the behaviour or statements of
          individual users. Users are responsible for exercising their
          own judgment when interacting with strangers online.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Changes to These Terms
        </h2>

        <p className="text-gray-300 leading-8">
          ChatNova may update these Terms & Conditions when necessary.
          Updated terms will be published on this page with a revised
          "Last Updated" date. Continued use of the service after an
          update means that you agree to the updated terms.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Related Information
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mt-5">

          <Link
            href="/privacy-policy"
            className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
          >
            <h3 className="font-semibold text-lg">
              Privacy Policy
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Learn how ChatNova handles privacy and information.
            </p>
          </Link>

          <Link
            href="/community-guidelines"
            className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
          >
            <h3 className="font-semibold text-lg">
              Community Guidelines
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Read the rules for safe and respectful conversations.
            </p>
          </Link>

        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Contact
        </h2>

        <p className="text-gray-300 leading-8">
          If you have questions about these Terms & Conditions, please
          contact us through our{" "}
          <Link
            href="/contact"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Contact Us
          </Link>{" "}
          page.
        </p>

      </div>
    </main>
  );
}