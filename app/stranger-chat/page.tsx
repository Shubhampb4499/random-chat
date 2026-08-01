import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stranger Chat - Talk with Random Strangers | ChatNova",
  description:
    "Start stranger chat instantly with people from around the world. No signup, no login, completely anonymous text chat on ChatNova.",
  keywords: [
    "Stranger Chat",
    "Chat with Strangers",
    "Anonymous Stranger Chat",
    "Random Stranger Chat",
    "Online Stranger Chat",
    "ChatNova",
  ],
  alternates: {
    canonical: "https://chatnova.in/stranger-chat",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Stranger Chat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stranger Chat lets you instantly talk with random people online without registration."
      }
    },
    {
      "@type": "Question",
      "name": "Is Stranger Chat free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. ChatNova Stranger Chat is completely free."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to sign up?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. You can start chatting instantly without creating an account."
      }
    }
  ]
};

export default function StrangerChatPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-white">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <h1 className="text-5xl font-bold mb-6">
        Stranger Chat
      </h1>

      <p className="text-gray-300 text-lg leading-8 mb-8">
        ChatNova Stranger Chat helps you instantly connect with random strangers
        online. Meet new people, enjoy anonymous conversations and make friends
        without registration.
      </p>

      <Link
        href="/chat"
        className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
      >
        🚀 Start Stranger Chat
      </Link>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Why Use Stranger Chat?
        </h2>

        <p className="text-gray-300 leading-8 mb-6">
          Stranger Chat lets you meet people from different countries and
          cultures instantly. Every conversation starts anonymously and no
          personal information is required.
        </p>

        <p className="text-gray-300 leading-8">
          Whether you want casual conversations, practice English or simply
          meet new people, ChatNova makes it easy.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">
          Features
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">🌍 Global Users</h3>
            <p className="text-gray-300">
              Meet random people from different countries.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">⚡ Instant Matching</h3>
            <p className="text-gray-300">
              Connect with strangers within seconds.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">🔒 Anonymous</h3>
            <p className="text-gray-300">
              No signup. No login. No identity sharing.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">💬 Text Chat</h3>
            <p className="text-gray-300">
              Fast and secure anonymous text conversations.
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
              Is Stranger Chat anonymous?
            </h3>

            <p className="text-gray-300">
              Yes. ChatNova does not require personal information before you
              start chatting.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is Stranger Chat safe?
            </h3>

            <p className="text-gray-300">
              Never share passwords, phone numbers or financial details with
              strangers.
            </p>
          </div>

        </div>
      </section>

      <section className="mt-20 bg-gray-900 rounded-2xl p-10 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Start Stranger Chat Now
        </h2>

        <p className="text-gray-300 text-lg mb-8">
          Connect instantly with strangers and enjoy free anonymous chatting.
        </p>

        <Link
          href="/chat"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold"
        >
          🚀 Start Stranger Chat
        </Link>

      </section>

    </main>
  );
}