import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Random Chat - Chat with Random Strangers Online Free",
  description:
    "Start free random chat with strangers instantly. No signup, no login. Meet new people anonymously on ChatNova.",
  alternates: {
    canonical: "https://chatnova.in/random-chat",
  },
};

export default function RandomChatPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-white">

      <h1 className="text-5xl font-bold mb-6">
        Random Chat
      </h1>

      <p className="text-gray-300 text-lg mb-8">
        ChatNova lets you instantly connect with random strangers from around the world.
        No registration, no personal information, and completely anonymous.
      </p>

      <Link
        href="/chat"
        className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"
      >
        🚀 Start Random Chat
      </Link>

    </main>
  );
}