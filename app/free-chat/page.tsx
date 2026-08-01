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
      <section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    Why Choose Free Chat?
  </h2>

  <p className="text-gray-300 leading-8 mb-6">
    ChatNova gives everyone the opportunity to chat online without paying
    anything. Whether you want to make new friends, practice a language or
    simply enjoy casual conversations, our platform is completely free.
  </p>

  <p className="text-gray-300 leading-8 mb-6">
    Unlike many chat platforms that require subscriptions or premium plans,
    ChatNova offers unlimited anonymous text chat without hidden charges.
  </p>

</section>

<section className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    Why Millions Prefer Free Chat
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        💸 Completely Free
      </h3>

      <p className="text-gray-300">
        No subscriptions, no hidden fees and unlimited chatting.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        ⚡ Instant Access
      </h3>

      <p className="text-gray-300">
        Start chatting immediately without creating an account.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        🔒 Anonymous
      </h3>

      <p className="text-gray-300">
        Stay private while enjoying conversations with strangers.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        🌍 Global Community
      </h3>

      <p className="text-gray-300">
        Meet people from different countries and cultures anytime.
      </p>
    </div>

  </div>

</section>
<section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    How Free Chat Works
  </h2>

  <div className="space-y-6 text-gray-300 leading-8">

    <p>
      ChatNova makes free chatting incredibly simple. Click the
      <strong> Start Free Chat </strong>
      button and you will instantly be connected with another random user.
    </p>

    <p>
      There is no signup, no registration and no payment required. Every
      conversation starts instantly, allowing you to meet new people without
      wasting time.
    </p>

    <p>
      Whenever you want a new conversation, simply click
      <strong> Next Stranger </strong>
      and ChatNova will connect you with someone else immediately.
    </p>

  </div>

</section>

<section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    Is Free Chat Safe?
  </h2>

  <p className="text-gray-300 leading-8 mb-6">
    Free chat can be enjoyable when used responsibly. Never share sensitive
    information such as your phone number, passwords, bank details or home
    address with strangers.
  </p>

  <p className="text-gray-300 leading-8 mb-6">
    If another user behaves inappropriately, simply disconnect from the chat
    and report the conversation. ChatNova encourages respectful and friendly
    communication.
  </p>

  <p className="text-gray-300 leading-8">
    Our goal is to provide a fast, secure and completely free chatting
    experience for everyone.
  </p>

</section>
<section className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    Frequently Asked Questions
  </h2>

  <div className="space-y-8">

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Is ChatNova really free?
      </h3>

      <p className="text-gray-300 leading-8">
        Yes. ChatNova is completely free to use with unlimited anonymous text chatting.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Do I need to register?
      </h3>

      <p className="text-gray-300 leading-8">
        No. You can start chatting immediately without creating an account.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Can I chat from my mobile?
      </h3>

      <p className="text-gray-300 leading-8">
        Yes. ChatNova works on desktop, tablet and mobile browsers.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Can I leave a conversation anytime?
      </h3>

      <p className="text-gray-300 leading-8">
        Yes. You can disconnect instantly and connect with another stranger whenever you want.
      </p>
    </div>

  </div>

</section>

<section className="mt-20 bg-gray-900 rounded-2xl p-10 text-center">

  <h2 className="text-4xl font-bold mb-4">
    Start Free Chat Now
  </h2>

  <p className="text-gray-300 text-lg mb-8">
    Join thousands of users who enjoy free anonymous conversations every day on ChatNova.
  </p>

  <Link
    href="/chat"
    className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold"
  >
    🚀 Start Free Chat
  </Link>

</section>

    </main>
  );
}