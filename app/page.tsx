"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SafetyPopup from "../components/SafetyPopup";

export default function Home() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {showPopup && (
        <SafetyPopup
          onContinue={() => {
            setShowPopup(false);
            router.push("/chat");
          }}
        />
      )}

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

        <h1 className="text-5xl font-bold mb-6">
          💬 ChatNova - Free Random Chat
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mb-8">
          Meet random strangers instantly without signup.
          Chat anonymously, safely and completely free.
        </p>

        <button
          onClick={() => setShowPopup(true)}
          className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-xl font-semibold"
        >
          🚀 Start Chat
        </button>

        <p className="mt-8 text-green-400 font-semibold">
          🟢 Users Online
        </p>

      </section>

      {/* What is ChatNova */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-6">
          What is ChatNova?
        </h2>

        <p className="text-gray-300 leading-8">
          ChatNova is a free anonymous random chat platform where you can
          instantly connect with strangers from around the world. No account,
          no signup and no personal information required.
        </p>

      </section>

      {/* Why Choose */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-8">
          Why Choose ChatNova?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">
              🔒 Anonymous
            </h3>

            <p className="text-gray-300">
              Chat without revealing your identity.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">
              ⚡ Instant Matching
            </h3>

            <p className="text-gray-300">
              Meet strangers instantly.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">
              💯 Free
            </h3>

            <p className="text-gray-300">
              No subscription required.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">
              🌍 Worldwide
            </h3>

            <p className="text-gray-300">
              Connect with people across the globe.
            </p>
          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="font-semibold">
              Is ChatNova free?
            </h3>

            <p className="text-gray-300">
              Yes. ChatNova is completely free to use.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Do I need to create an account?
            </h3>

            <p className="text-gray-300">
              No. You can start chatting instantly without signup.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Is ChatNova anonymous?
            </h3>

            <p className="text-gray-300">
              Yes. We do not require your personal information to start chatting.
            </p>
          </div>

        </div>

      </section>
            {/* Explore Chat Categories */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Explore Chat Categories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <Link href="/random-chat" className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition">
            <h3 className="text-xl font-bold mb-2">🎲 Random Chat</h3>
            <p className="text-gray-400">
              Meet random strangers instantly.
            </p>
          </Link>

          <Link href="/anonymous-chat" className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition">
            <h3 className="text-xl font-bold mb-2">🔒 Anonymous Chat</h3>
            <p className="text-gray-400">
              Stay completely private.
            </p>
          </Link>

          <Link href="/chat-with-strangers" className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition">
            <h3 className="text-xl font-bold mb-2">🌍 Chat with Strangers</h3>
            <p className="text-gray-400">
              Meet people worldwide.
            </p>
          </Link>

          <Link href="/text-chat" className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition">
            <h3 className="text-xl font-bold mb-2">💬 Text Chat</h3>
            <p className="text-gray-400">
              Fast anonymous text chat.
            </p>
          </Link>

          <Link href="/online-chat" className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition">
            <h3 className="text-xl font-bold mb-2">🟢 Online Chat</h3>
            <p className="text-gray-400">
              Chat online instantly.
            </p>
          </Link>

          <Link href="/random-text-chat" className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition">
            <h3 className="text-xl font-bold mb-2">⚡ Random Text Chat</h3>
            <p className="text-gray-400">
              Quick random conversations.
            </p>
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">

        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap gap-6 justify-center text-gray-400">

          <a href="/privacy-policy">Privacy Policy</a>

          <a href="/terms">Terms & Conditions</a>

          <a href="/about">About</a>

          <a href="/contact">Contact</a>

        </div>

      </footer>

    </main>
  );
}