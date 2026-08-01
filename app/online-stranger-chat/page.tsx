import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Stranger Chat | ChatNova",
  description:
    "Start online stranger chat instantly with random people. No signup, no login, free anonymous text chat on ChatNova.",
  keywords: [
    "Online Stranger Chat",
    "Stranger Chat Online",
    "Anonymous Stranger Chat",
    "Random Stranger Chat",
    "ChatNova",
  ],
  alternates: {
    canonical: "https://chatnova.in/online-stranger-chat",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Online Stranger Chat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ChatNova lets you instantly connect with random strangers online through anonymous text chat."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to register?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. You can start chatting without signup."
      }
    }
  ]
};

export default function OnlineStrangerChatPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-white">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <h1 className="text-5xl font-bold mb-6">
        Online Stranger Chat
      </h1>

      <p className="text-gray-300 text-lg leading-8 mb-8">
        Meet strangers online instantly with ChatNova. Start anonymous text
        conversations without creating an account and enjoy a fast, secure and
        completely free chatting experience.
      </p>

      <Link
        href="/chat"
        className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
      >
        🚀 Start Online Stranger Chat
      </Link>

      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Why Choose ChatNova?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              🌍 Meet New People
            </h3>

            <p className="text-gray-300">
              Connect with strangers from around the world.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              🔒 Anonymous
            </h3>

            <p className="text-gray-300">
              No personal information required.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              ⚡ Instant Matching
            </h3>

            <p className="text-gray-300">
              Start chatting in seconds.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              💬 Text Only
            </h3>

            <p className="text-gray-300">
              Fast and distraction-free conversations.
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
              Is Online Stranger Chat free?
            </h3>

            <p className="text-gray-300">
              Yes. ChatNova is completely free.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Can I leave anytime?
            </h3>

            <p className="text-gray-300">
              Yes. Disconnect anytime and connect with another stranger.
            </p>
          </div>

        </div>

      </section>

      <section className="mt-20 bg-gray-900 rounded-2xl p-10 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Start Chatting Today
        </h2>

        <p className="text-gray-300 mb-8">
          Join thousands of users enjoying anonymous online stranger chat.
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