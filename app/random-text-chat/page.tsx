import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Random Text Chat | Free Anonymous Chat | ChatNova",
  description:
    "Start random text chat instantly with strangers online. No signup, no login and completely anonymous. ChatNova is free and secure.",
  keywords: [
    "Random Text Chat",
    "Anonymous Text Chat",
    "Free Text Chat",
    "Chat with Strangers",
    "Online Text Chat",
    "ChatNova",
  ],
  alternates: {
    canonical: "https://chatnova.in/random-text-chat",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Random Text Chat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Random Text Chat lets you instantly connect with strangers through anonymous text conversations."
      }
    },
    {
      "@type": "Question",
      name: "Is ChatNova free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ChatNova is completely free and requires no signup."
      }
    }
  ]
};

export default function RandomTextChatPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-white">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <h1 className="text-5xl font-bold mb-6">
        Random Text Chat
      </h1>

      <p className="text-gray-300 text-lg leading-8 mb-8">
        ChatNova allows you to start random text chat with strangers instantly.
        No registration, no login and complete privacy. Meet new people from
        anywhere in the world through anonymous text conversations.
      </p>

      <Link
        href="/chat"
        className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
      >
        🚀 Start Random Text Chat
      </Link>

      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Why Use Random Text Chat?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              💬 Text Only
            </h3>

            <p className="text-gray-300">
              Simple conversations without camera or microphone.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              🔒 Anonymous
            </h3>

            <p className="text-gray-300">
              Stay private without creating an account.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              🌍 Global Community
            </h3>

            <p className="text-gray-300">
              Meet people from different countries instantly.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              ⚡ Instant Match
            </h3>

            <p className="text-gray-300">
              Find a random stranger within seconds.
            </p>
          </div>

        </div>

      </section>

      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is Random Text Chat anonymous?
            </h3>

            <p className="text-gray-300">
              Yes. ChatNova does not ask for your identity before chatting.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Can I disconnect anytime?
            </h3>

            <p className="text-gray-300">
              Yes. You can instantly switch to another random stranger.
            </p>
          </div>

        </div>

      </section>

      <section className="mt-20 bg-gray-900 rounded-2xl p-10 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Start Random Text Chat Now
        </h2>

        <p className="text-gray-300 text-lg mb-8">
          Join thousands of users chatting anonymously every day.
        </p>

        <Link
          href="/chat"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"
        >
          🚀 Start Chat
        </Link>

      </section>

    </main>
  );
}