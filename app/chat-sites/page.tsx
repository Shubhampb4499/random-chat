import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Chat Sites in 2026 | ChatNova",
  description:
    "Discover one of the best free chat sites to meet strangers online. Chat anonymously without signup on ChatNova.",
  keywords: [
    "Chat Sites",
    "Best Chat Sites",
    "Free Chat Sites",
    "Online Chat Sites",
    "Anonymous Chat Site",
    "ChatNova",
  ],
  alternates: {
    canonical: "https://chatnova.in/chat-sites",
  },
};

export default function ChatSitesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-white">

      <h1 className="text-5xl font-bold mb-6">
        Best Chat Sites
      </h1>

      <p className="text-gray-300 text-lg leading-8 mb-8">
        Looking for the best chat sites to meet new people? ChatNova lets you
        chat with strangers instantly without registration. Safe, anonymous and
        completely free.
      </p>

      <Link
        href="/chat"
        className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
      >
        🚀 Start Chat
      </Link>

      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Why ChatNova?
        </h2>

        <ul className="space-y-4 text-gray-300 leading-8">
          <li>✅ Anonymous conversations</li>
          <li>✅ No signup required</li>
          <li>✅ Instant random matching</li>
          <li>✅ Free unlimited text chat</li>
          <li>✅ Meet people worldwide</li>
        </ul>

      </section>

      <section className="mt-20 bg-gray-900 rounded-2xl p-10 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Join ChatNova Today
        </h2>

        <p className="text-gray-300 mb-8">
          Experience one of the best free chat sites available online.
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