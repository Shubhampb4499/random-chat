import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ChatNova",
  description:
    "Read the ChatNova Privacy Policy to understand how information, cookies and third-party services may be handled when you use our anonymous chat platform.",
  keywords: [
    "ChatNova Privacy Policy",
    "Privacy Policy",
    "Anonymous Chat Privacy",
    "ChatNova Privacy",
    "Random Chat Privacy",
  ],
  alternates: {
    canonical: "https://chatnova.in/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main>
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold mb-8">
          Privacy Policy
        </h1>

        <p className="mb-8 text-gray-300">
          Last Updated: July 2026
        </p>

        <p className="text-gray-300 leading-8">
          Your privacy is important to ChatNova. This Privacy Policy
          explains the general approach ChatNova takes to information,
          cookies and third-party services when you use our anonymous
          random chat platform.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Welcome to ChatNova
        </h2>

        <p className="text-gray-300 leading-8">
          ChatNova is a free anonymous random chat platform that allows
          users to connect with strangers without creating an account.
          We aim to keep the chat experience simple and minimize the
          personal information required to use the service.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Information We Collect
        </h2>

        <p className="text-gray-300 leading-8">
          ChatNova does not require users to create an account before
          starting a chat. We do not ask users to provide their name,
          email address or phone number as a requirement for using the
          chat service.
        </p>

        <p className="text-gray-300 leading-8 mt-4">
          Like most websites, technical information may be processed
          automatically by the website or its infrastructure to operate,
          maintain and secure the service. The exact information processed
          may depend on the technologies and services used by ChatNova.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Chat Conversations
        </h2>

        <p className="text-gray-300 leading-8">
          ChatNova is designed for anonymous text conversations. Users
          should avoid sharing sensitive personal information such as
          passwords, OTPs, financial information, home addresses or other
          private details with strangers.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Cookies
        </h2>

        <p className="text-gray-300 leading-8">
          ChatNova may use cookies or similar technologies where necessary
          to operate the website, improve functionality, understand website
          usage or support third-party services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Google Analytics
        </h2>

        <p className="text-gray-300 leading-8">
          If Google Analytics is enabled on ChatNova, it may collect
          information about how visitors interact with the website. This
          information can help us understand website usage and improve
          the service.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Advertising and Google AdSense
        </h2>

        <p className="text-gray-300 leading-8">
          ChatNova may display advertisements in the future. If Google
          AdSense or another advertising service is enabled, that service
          may use cookies or similar technologies in accordance with its
          own policies to provide and measure advertisements.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Third-Party Services
        </h2>

        <p className="text-gray-300 leading-8">
          ChatNova may use third-party services for analytics, hosting,
          security, infrastructure, advertising or other website
          functionality. These services may process information according
          to their own privacy policies and applicable terms.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Data Security
        </h2>

        <p className="text-gray-300 leading-8">
          We take reasonable steps to maintain the security and reliability
          of the ChatNova service. However, no internet-based service can
          guarantee absolute security, and users should avoid sharing
          sensitive personal information in anonymous conversations.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Children's Privacy
        </h2>

        <p className="text-gray-300 leading-8">
          ChatNova is intended for users who are 18 years of age or older.
          We do not knowingly intend to provide the service to children
          under 18.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Changes to This Privacy Policy
        </h2>

        <p className="text-gray-300 leading-8">
          We may update this Privacy Policy when our services, technologies
          or practices change. Any updated version will be published on this
          page with a revised "Last Updated" date.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Contact
        </h2>

        <p className="text-gray-300 leading-8">
          If you have questions about this Privacy Policy, please contact
          ChatNova through our{" "}
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