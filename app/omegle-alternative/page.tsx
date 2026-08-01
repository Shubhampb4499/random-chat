import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Omegle Alternative in 2026 | ChatNova",
  description:
    "Looking for the best Omegle alternative? ChatNova offers free anonymous random text chat with strangers. No signup required.",
  keywords: [
    "Omegle Alternative",
    "Best Omegle Alternative",
    "Omegle Replacement",
    "Anonymous Chat",
    "Random Chat",
    "ChatNova",
  ],
  alternates: {
    canonical: "https://chatnova.in/omegle-alternative",
  },
};

export default function OmegleAlternativePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-white">

      <h1 className="text-5xl font-bold mb-6">
        Best Omegle Alternative
      </h1>

      <p className="text-gray-300 text-lg leading-8 mb-8">
        Omegle has closed, but chatting with strangers is still possible.
        ChatNova is one of the best Omegle alternatives where you can instantly
        connect with random people through anonymous text chat without signup.
      </p>

      <Link
        href="/chat"
        className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
      >
        🚀 Start Chat Now
      </Link>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Why Choose ChatNova Instead of Omegle?
        </h2>

        <p className="text-gray-300 leading-8 mb-6">
          ChatNova provides a clean, secure and anonymous chatting experience.
          There is no registration, no login and no unnecessary complexity.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              🔒 Anonymous
            </h3>

            <p className="text-gray-300">
              Your identity stays private.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              ⚡ Instant Matching
            </h3>

            <p className="text-gray-300">
              Meet strangers within seconds.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              💬 Text Chat
            </h3>

            <p className="text-gray-300">
              Simple and fast conversations.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              🌍 Global Users
            </h3>

            <p className="text-gray-300">
              Meet people from different countries.
            </p>
          </div>

        </div>

      </section>

      <section className="mt-20 text-center bg-gray-900 rounded-2xl p-10">

        <h2 className="text-4xl font-bold mb-4">
          Ready to Chat?
        </h2>

        <p className="text-gray-300 mb-8">
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