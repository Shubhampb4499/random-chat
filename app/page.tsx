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

  <span className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
    🔥 No Signup • 100% Anonymous • Free Forever
  </span>

  <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl mb-6">
    Talk to Random Strangers Instantly with{" "}
    <span className="text-green-400">ChatNova</span>
  </h1>

  <p className="text-xl text-gray-300 max-w-3xl leading-8 mb-10">
    ChatNova is a free anonymous random chat platform where you can meet
    new people from around the world without registration. Start chatting
    instantly, stay private, and enjoy safe conversations anytime.
  </p>

  <div className="flex flex-col sm:flex-row gap-4">

    <button
      onClick={() => setShowPopup(true)}
      className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-xl font-semibold transition"
    >
      🚀 Start Chat
    </button>

    <Link
      href="/anonymous-chat"
      className="border border-gray-600 hover:border-green-500 px-8 py-4 rounded-xl text-xl transition"
    >
      Learn More
    </Link>

  </div>

  <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-400">

    <span>🔒 Anonymous</span>

    <span>⚡ Instant Matching</span>

    <span>🌍 Worldwide</span>

    <span>💯 Free</span>

  </div>

</section>

      {/* How ChatNova Works */}
<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold text-center mb-4">
    How ChatNova Works
  </h2>

  <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
    Start chatting with random strangers in just three simple steps.
    No signup, no registration and completely anonymous.
  </p>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800 hover:border-green-500 transition">

      <div className="text-5xl mb-5">🚀</div>

      <h3 className="text-2xl font-bold mb-3">
        Step 1
      </h3>

      <h4 className="text-xl font-semibold mb-3">
        Click Start Chat
      </h4>

      <p className="text-gray-400 leading-7">
        Press the Start Chat button to begin searching for a random stranger.
      </p>

    </div>

    <div className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800 hover:border-green-500 transition">

      <div className="text-5xl mb-5">⚡</div>

      <h3 className="text-2xl font-bold mb-3">
        Step 2
      </h3>

      <h4 className="text-xl font-semibold mb-3">
        Get Matched
      </h4>

      <p className="text-gray-400 leading-7">
        Our matching system instantly connects you with another online user.
      </p>

    </div>

    <div className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800 hover:border-green-500 transition">

      <div className="text-5xl mb-5">💬</div>

      <h3 className="text-2xl font-bold mb-3">
        Step 3
      </h3>

      <h4 className="text-xl font-semibold mb-3">
        Chat Anonymously
      </h4>

      <p className="text-gray-400 leading-7">
        Enjoy private conversations without revealing your identity.
      </p>

    </div>

  </div>

</section>

      {/* Why Choose ChatNova */}
<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold text-center mb-4">
    Why Choose ChatNova?
  </h2>

  <p className="text-gray-400 text-center max-w-3xl mx-auto mb-14">
    ChatNova offers a fast, secure and anonymous chatting experience for people
    looking to meet new strangers online.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 transition">
      <div className="text-4xl mb-4">🔒</div>
      <h3 className="text-2xl font-bold mb-3">
        100% Anonymous
      </h3>
      <p className="text-gray-400 leading-7">
        No signup, no registration and no personal details required.
      </p>
    </div>

    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 transition">
      <div className="text-4xl mb-4">⚡</div>
      <h3 className="text-2xl font-bold mb-3">
        Instant Matching
      </h3>
      <p className="text-gray-400 leading-7">
        Connect with random strangers instantly without waiting.
      </p>
    </div>

    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 transition">
      <div className="text-4xl mb-4">🌍</div>
      <h3 className="text-2xl font-bold mb-3">
        Worldwide Users
      </h3>
      <p className="text-gray-400 leading-7">
        Meet people from different countries and cultures.
      </p>
    </div>

    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 transition">
      <div className="text-4xl mb-4">💬</div>
      <h3 className="text-2xl font-bold mb-3">
        Real Conversations
      </h3>
      <p className="text-gray-400 leading-7">
        Enjoy natural one-to-one conversations with real people.
      </p>
    </div>

    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 transition">
      <div className="text-4xl mb-4">📱</div>
      <h3 className="text-2xl font-bold mb-3">
        Mobile Friendly
      </h3>
      <p className="text-gray-400 leading-7">
        ChatNova works perfectly on phones, tablets and desktops.
      </p>
    </div>

    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 transition">
      <div className="text-4xl mb-4">💚</div>
      <h3 className="text-2xl font-bold mb-3">
        Completely Free
      </h3>
      <p className="text-gray-400 leading-7">
        Start chatting without paying anything. No hidden charges.
      </p>
    </div>

  </div>

</section>
{/* Safety & Privacy */}
<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold text-center mb-4">
    Chat Safely with ChatNova
  </h2>

  <p className="text-gray-400 text-center max-w-3xl mx-auto mb-14">
    Your privacy and safety are our top priorities. Follow these simple
    guidelines to enjoy a secure anonymous chatting experience.
  </p>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">

      <h3 className="text-2xl font-bold mb-6">
        🛡 Safety Tips
      </h3>

      <ul className="space-y-4 text-gray-300">

        <li>✅ Never share your phone number.</li>

        <li>✅ Never share your home address.</li>

        <li>✅ Never share banking information.</li>

        <li>✅ End the chat if someone behaves inappropriately.</li>

        <li>✅ Report abusive users immediately.</li>

      </ul>

    </div>

    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">

      <h3 className="text-2xl font-bold mb-6">
        🔒 Privacy Promise
      </h3>

      <p className="text-gray-300 leading-8 mb-6">

        ChatNova does not require registration to start chatting.
        We encourage users to stay anonymous and protect their
        personal information during conversations.

      </p>

      <div className="flex flex-wrap gap-4">

        <Link
          href="/privacy-policy"
          className="text-green-400 hover:underline"
        >
          Privacy Policy →
        </Link>

        <Link
          href="/community-guidelines"
          className="text-green-400 hover:underline"
        >
          Community Guidelines →
        </Link>

      </div>

    </div>

  </div>

</section>
      {/* FAQ */}
<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold text-center mb-4">
    Frequently Asked Questions
  </h2>

  <p className="text-gray-400 text-center max-w-3xl mx-auto mb-14">
    Everything you need to know before using ChatNova.
  </p>

  <div className="space-y-8">

    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <h3 className="text-xl font-semibold mb-3">
        Is ChatNova completely free?
      </h3>
      <p className="text-gray-400 leading-7">
        Yes. ChatNova is completely free to use. No signup or subscription is required.
      </p>
    </div>

    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <h3 className="text-xl font-semibold mb-3">
        Do I need an account?
      </h3>
      <p className="text-gray-400 leading-7">
        No. You can instantly start chatting without creating an account.
      </p>
    </div>

    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <h3 className="text-xl font-semibold mb-3">
        Is ChatNova anonymous?
      </h3>
      <p className="text-gray-400 leading-7">
        Yes. ChatNova is designed for anonymous conversations. Avoid sharing personal information.
      </p>
    </div>

    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <h3 className="text-xl font-semibold mb-3">
        Can I report abusive users?
      </h3>
      <p className="text-gray-400 leading-7">
        Yes. If someone violates our community guidelines, you can report them immediately.
      </p>
    </div>

    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <h3 className="text-xl font-semibold mb-3">
        Does ChatNova save my chats?
      </h3>
      <p className="text-gray-400 leading-7">
        ChatNova focuses on anonymous conversations. Please review our Privacy Policy for more information.
      </p>
    </div>

  </div>

</section>
            {/* Explore Chat Categories */}
<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold text-center mb-4">
    Explore Chat Categories
  </h2>

  <p className="text-gray-400 text-center max-w-3xl mx-auto mb-14">
    Choose the type of anonymous chat experience that suits you best.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    <Link
      href="/random-chat"
      className="group bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="text-5xl mb-5">🎲</div>

      <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition">
        Random Chat
      </h3>

      <p className="text-gray-400 leading-7">
        Meet random strangers instantly and enjoy anonymous conversations.
      </p>
    </Link>

    <Link
      href="/anonymous-chat"
      className="group bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="text-5xl mb-5">🔒</div>

      <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition">
        Anonymous Chat
      </h3>

      <p className="text-gray-400 leading-7">
        Stay private while chatting with strangers online.
      </p>
    </Link>

    <Link
      href="/chat-with-strangers"
      className="group bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="text-5xl mb-5">🌍</div>

      <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition">
        Chat with Strangers
      </h3>

      <p className="text-gray-400 leading-7">
        Connect with new people from around the world.
      </p>
    </Link>

    <Link
      href="/text-chat"
      className="group bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="text-5xl mb-5">💬</div>

      <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition">
        Text Chat
      </h3>

      <p className="text-gray-400 leading-7">
        Fast and secure text conversations without registration.
      </p>
    </Link>

    <Link
      href="/online-chat"
      className="group bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="text-5xl mb-5">🟢</div>

      <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition">
        Online Chat
      </h3>

      <p className="text-gray-400 leading-7">
        Find online users and start chatting instantly.
      </p>
    </Link>

    <Link
      href="/omegle-alternative"
      className="group bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="text-5xl mb-5">⭐</div>

      <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition">
        Omegle Alternative
      </h3>

      <p className="text-gray-400 leading-7">
        Looking for an Omegle replacement? Try ChatNova today.
      </p>
    </Link>

  </div>

</section>

      {/* Footer */}
<footer className="border-t border-gray-800 mt-24 bg-black">

  <div className="max-w-6xl mx-auto px-6 py-14">

    <div className="grid md:grid-cols-3 gap-10">

      {/* Brand */}
      <div>

        <h3 className="text-2xl font-bold text-white mb-4">
          💬 ChatNova
        </h3>

        <p className="text-gray-400 leading-7">
          ChatNova is a free anonymous random chat platform where you can
          instantly connect with strangers worldwide without registration.
        </p>

      </div>

      {/* Quick Links */}
      <div>

        <h3 className="text-xl font-semibold mb-4">
          Quick Links
        </h3>

        <ul className="space-y-3 text-gray-400">

          <li>
            <Link href="/random-chat" className="hover:text-green-400 transition">
              Random Chat
            </Link>
          </li>

          <li>
            <Link href="/anonymous-chat" className="hover:text-green-400 transition">
              Anonymous Chat
            </Link>
          </li>

          <li>
            <Link href="/chat-with-strangers" className="hover:text-green-400 transition">
              Chat With Strangers
            </Link>
          </li>

          <li>
            <Link href="/omegle-alternative" className="hover:text-green-400 transition">
              Omegle Alternative
            </Link>
          </li>

        </ul>

      </div>

      {/* Legal */}
      <div>

        <h3 className="text-xl font-semibold mb-4">
          Legal
        </h3>

        <ul className="space-y-3 text-gray-400">

          <li>
            <Link href="/about" className="hover:text-green-400 transition">
              About
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-green-400 transition">
              Contact
            </Link>
          </li>

          <li>
            <Link href="/privacy-policy" className="hover:text-green-400 transition">
              Privacy Policy
            </Link>
          </li>

          <li>
            <Link href="/terms" className="hover:text-green-400 transition">
              Terms & Conditions
            </Link>
          </li>

          <li>
            <Link href="/community-guidelines" className="hover:text-green-400 transition">
              Community Guidelines
            </Link>
          </li>

        </ul>

      </div>

    </div>

    <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">

      © {new Date().getFullYear()} ChatNova. All Rights Reserved.

    </div>

  </div>

</footer>

    </main>
  );
}