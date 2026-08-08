import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community Guidelines | ChatNova",
  description:
    "Read ChatNova community guidelines for safe, respectful and responsible anonymous chatting. Learn about age requirements, prohibited content and user safety.",
  keywords: [
    "ChatNova Community Guidelines",
    "Chat Rules",
    "Anonymous Chat Rules",
    "Random Chat Guidelines",
    "Chat Safety Rules",
    "Online Chat Safety",
  ],
  alternates: {
    canonical: "https://chatnova.in/community-guidelines",
  },
};

export default function CommunityGuidelines() {
  return (
    <main>
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold mb-8">
          Community Guidelines
        </h1>

        <p className="text-gray-300 leading-8 mb-8">
          ChatNova is committed to providing a safe and respectful
          environment for everyone. By using ChatNova, you agree to follow
          these community guidelines and use the platform responsibly.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            🔞 Age Requirement
          </h2>

          <p className="text-gray-300 leading-8">
            ChatNova is intended only for users who are 18 years of age or
            older. Users who do not meet the applicable age requirement
            should not use the platform.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            🚫 Prohibited Content and Behaviour
          </h2>

          <p className="text-gray-300 leading-8 mb-4">
            Users must not use ChatNova to create, share or encourage
            harmful, abusive or illegal content or behaviour.
          </p>

          <ul className="list-disc pl-6 text-gray-300 space-y-2 leading-7">
            <li>No sexual or explicit conversations.</li>
            <li>No nudity or obscene content.</li>
            <li>No harassment, bullying or intimidation.</li>
            <li>No hate speech or discriminatory behaviour.</li>
            <li>No threats, violence or encouragement of harm.</li>
            <li>No promotion or coordination of illegal activities.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            🔒 Protect Personal Information
          </h2>

          <p className="text-gray-300 leading-8 mb-4">
            Never share sensitive personal or financial information with
            strangers. Users should take reasonable steps to protect their
            privacy while chatting online.
          </p>

          <ul className="list-disc pl-6 text-gray-300 space-y-2 leading-7">
            <li>Do not share phone numbers.</li>
            <li>Do not share email addresses.</li>
            <li>Do not share home addresses or exact locations.</li>
            <li>Do not share passwords or OTPs.</li>
            <li>Do not share banking or financial information.</li>
            <li>Avoid sharing private social media or contact details.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            ⚠️ Report and Leave Uncomfortable Conversations
          </h2>

          <p className="text-gray-300 leading-8">
            If another user makes you uncomfortable, engages in abusive
            behaviour or violates these guidelines, leave the conversation
            and use the available reporting or safety options. You can also
            contact ChatNova through the{" "}
            <Link
              href="/contact"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Contact page
            </Link>
            {" "}when appropriate.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            ⚖️ Enforcement
          </h2>

          <p className="text-gray-300 leading-8">
            Accounts or users that violate these guidelines may be subject
            to warnings, restrictions, suspension or removal from ChatNova,
            depending on the nature and seriousness of the violation.
            ChatNova may also respond to lawful requests from competent
            authorities where required by applicable law.
          </p>
        </section>

        <section className="border-t border-gray-800 pt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Related Information
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

            <Link
              href="/contact"
              className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
            >
              <h3 className="font-semibold">
                Contact Us
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Contact the ChatNova team.
              </p>
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
}