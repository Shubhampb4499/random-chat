import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Chat - Free Anonymous Chat with Strangers | ChatNova",
  description:
    "Enjoy free online chat with strangers instantly. No signup, no login and completely anonymous. Start chatting online now with ChatNova.",
  keywords: [
    "Online Chat",
    "Online Chat with Strangers",
    "Anonymous Online Chat",
    "Free Online Chat",
    "Text Chat Online",
    "ChatNova",
  ],
  alternates: {
    canonical: "https://chatnova.in/online-chat",
  },
};

export default function OnlineChatPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-white">

      <h1 className="text-5xl font-bold mb-6">
        Online Chat with Strangers
      </h1>

      <p className="text-gray-300 text-lg leading-8 mb-8">
        ChatNova lets you enjoy online chat with strangers instantly. No
        registration, no login and no personal information required. Connect
        with people from around the world through fast and anonymous text chat.
      </p>

      <Link
        href="/chat"
        className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
      >
        🚀 Start Online Chat
      </Link>
      <section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    Why Choose Online Chat?
  </h2>

  <p className="text-gray-300 leading-8 mb-6">
    Online chat is one of the easiest ways to meet new people without leaving
    your home. ChatNova allows you to connect instantly with strangers from
    different countries through fast and anonymous text conversations.
  </p>

  <p className="text-gray-300 leading-8 mb-6">
    Whether you want to make new friends, have interesting discussions or
    simply pass your free time, ChatNova provides a secure and simple online
    chatting experience.
  </p>

</section>

<section className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    Why Use ChatNova?
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        ⚡ Instant Online Chat
      </h3>

      <p className="text-gray-300">
        Start chatting with strangers in just one click.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        🔒 Anonymous
      </h3>

      <p className="text-gray-300">
        No signup, no login and no personal information required.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        🌍 Global Community
      </h3>

      <p className="text-gray-300">
        Meet people from different countries and cultures.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        💬 Unlimited Free Chat
      </h3>

      <p className="text-gray-300">
        Enjoy unlimited text chatting completely free.
      </p>
    </div>

  </div>

</section>
<section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    How Online Chat Works
  </h2>

  <div className="space-y-6 text-gray-300 leading-8">

    <p>
      ChatNova makes online chatting simple and fast. Click the
      <strong> Start Online Chat </strong>
      button and you'll instantly be connected with another random user.
    </p>

    <p>
      You don't need to register or create an account. Simply open the chat,
      start your conversation and enjoy meeting new people online.
    </p>

    <p>
      If you want to meet someone else, click
      <strong> Next Stranger </strong>
      and ChatNova will instantly match you with another user.
    </p>

  </div>

</section>

<section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    Is Online Chat Safe?
  </h2>

  <p className="text-gray-300 leading-8 mb-6">
    Online chat is enjoyable when you protect your privacy. Never share your
    phone number, passwords, bank details, home address or other personal
    information with strangers.
  </p>

  <p className="text-gray-300 leading-8 mb-6">
    If another user behaves inappropriately, disconnect immediately and report
    the conversation. ChatNova encourages safe and respectful communication.
  </p>

  <p className="text-gray-300 leading-8">
    Our mission is to provide a secure, anonymous and enjoyable online chat
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
        Is ChatNova free to use?
      </h3>

      <p className="text-gray-300 leading-8">
        Yes. ChatNova offers completely free online text chatting without
        requiring any subscription or payment.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Do I need an account?
      </h3>

      <p className="text-gray-300 leading-8">
        No. You can start chatting instantly without creating an account.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Can I leave the chat anytime?
      </h3>

      <p className="text-gray-300 leading-8">
        Yes. You can disconnect at any time and immediately connect with another
        random stranger.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Is online chat anonymous?
      </h3>

      <p className="text-gray-300 leading-8">
        Yes. ChatNova does not ask for your name, phone number or email address
        before you start chatting.
      </p>
    </div>

  </div>

</section>

<section className="mt-20 bg-gray-900 rounded-2xl p-10 text-center">

  <h2 className="text-4xl font-bold mb-4">
    Start Online Chat Today
  </h2>

  <p className="text-gray-300 text-lg mb-8">
    Meet new people, enjoy anonymous conversations and experience fast online
    text chat with strangers on ChatNova.
  </p>

  <Link
    href="/chat"
    className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold"
  >
    🚀 Start Online Chat
  </Link>

</section>

    </main>
  );
}