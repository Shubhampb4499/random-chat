import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Chat - Chat Online with Strangers for Free | ChatNova",
  description:
    "Enjoy free online chat with strangers. No signup, no login and completely anonymous. Start chatting instantly on ChatNova.",
  keywords: [
    "Free Chat",
    "Free Online Chat",
    "Chat Free",
    "Anonymous Free Chat",
    "Random Free Chat",
    "ChatNova",
  ],
  alternates: {
    canonical: "https://chatnova.in/free-chat",
  },
};

export default function FreeChatPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-white">

      <h1 className="text-5xl font-bold mb-6">
        Free Chat with Strangers
      </h1>

      <p className="text-gray-300 text-lg leading-8 mb-8">
        ChatNova offers completely free online chat with strangers. There are
        no hidden charges, no registration requirements and no subscriptions.
        Meet new people instantly through anonymous text chat.
      </p>

      <Link
        href="/chat"
        className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
      >
        🚀 Start Free Chat
      </Link>

    </main>
  );
}