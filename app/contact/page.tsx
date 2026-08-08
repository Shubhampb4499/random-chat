import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact ChatNova | Support and Feedback",
  description:
    "Contact ChatNova for support, feedback, safety concerns or questions about the anonymous random chat platform.",
  keywords: [
    "Contact ChatNova",
    "ChatNova Support",
    "ChatNova Contact",
    "Anonymous Chat Support",
    "Random Chat Support",
  ],
  alternates: {
    canonical: "https://chatnova.in/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold mb-8">
          Contact Us
        </h1>

        <p className="text-gray-300 leading-8 mb-8">
          Have a question, feedback or a concern about ChatNova? You can
          contact our support team by email. We welcome feedback that can
          help us improve the ChatNova experience.
        </p>

        <section className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">
            📧 Email Support
          </h2>

          <p className="text-gray-300 leading-8 mb-4">
            For general questions, technical issues, feedback or other
            support-related requests, contact us at:
          </p>

          <a
            href="mailto:support@chatnova.in"
            className="text-blue-400 hover:text-blue-300 underline text-lg"
          >
            support@chatnova.in
          </a>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            🛡️ Safety Concerns
          </h2>

          <p className="text-gray-300 leading-8">
            If you experience inappropriate or abusive behaviour while using
            ChatNova, leave the conversation and use the available safety or
            reporting options. You can also contact us at{" "}
            <a
              href="mailto:support@chatnova.in"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              support@chatnova.in
            </a>
            {" "}with relevant details.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            📚 Helpful Information
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">

            <Link
              href="/privacy-policy"
              className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
            >
              <h3 className="font-semibold">
                Privacy Policy
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Learn about privacy and information handling.
              </p>
            </Link>

            <Link
              href="/community-guidelines"
              className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
            >
              <h3 className="font-semibold">
                Community Guidelines
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Read the rules for safe and respectful chatting.
              </p>
            </Link>

            <Link
              href="/terms"
              className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
            >
              <h3 className="font-semibold">
                Terms of Service
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Read the terms for using ChatNova.
              </p>
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
}