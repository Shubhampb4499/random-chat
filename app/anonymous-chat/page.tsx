import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anonymous Chat - Talk to Strangers Without Signup | ChatNova",
  description:
    "Start anonymous chat with strangers instantly. No signup, no login and completely private. Meet new people safely on ChatNova.",
  keywords: [
    "Anonymous Chat",
    "Anonymous Text Chat",
    "Private Chat",
    "Chat Without Signup",
    "Anonymous Stranger Chat",
    "ChatNova",
  ],
  alternates: {
    canonical: "https://chatnova.in/anonymous-chat",
  },
};

export default function AnonymousChatPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-white">

      <h1 className="text-5xl font-bold mb-6">
        Anonymous Chat
      </h1>

      <p className="text-gray-300 text-lg leading-8 mb-8">
        ChatNova makes anonymous chatting simple and secure. You can start
        talking with random strangers without creating an account or sharing
        your identity. Every conversation begins privately, allowing you to
        meet new people while staying completely anonymous.
      </p>

      <Link
        href="/chat"
        className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
      >
        🚀 Start Anonymous Chat
      </Link>
      <section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    Why Choose Anonymous Chat?
  </h2>

  <p className="text-gray-300 leading-8 mb-6">
    Anonymous chat allows you to have conversations without revealing your
    identity. Whether you want to meet new people, discuss common interests,
    or simply enjoy casual conversations, ChatNova gives you complete privacy.
  </p>

  <p className="text-gray-300 leading-8 mb-6">
    Unlike traditional messaging platforms, ChatNova does not require your
    email address, phone number, or social media account. Simply click the
Start Anonymous Chat button and begin talking instantly.
  </p>

</section>

<section className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    Benefits of Anonymous Chat
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        🔐 Complete Privacy
      </h3>

      <p className="text-gray-300">
        Stay anonymous while chatting without sharing personal information.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        ⚡ Instant Connection
      </h3>

      <p className="text-gray-300">
        Meet random strangers within seconds with one click.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        🌎 Meet People Worldwide
      </h3>

      <p className="text-gray-300">
        Connect with users from different countries and cultures.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        💬 Free Text Chat
      </h3>

      <p className="text-gray-300">
        Enjoy unlimited anonymous text chatting completely free.
      </p>
    </div>

  </div>

</section>
<section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    How Anonymous Chat Works
  </h2>

  <div className="space-y-6 text-gray-300 leading-8">

    <p>
      ChatNova is built to make anonymous chatting quick and simple. Click the
      <strong> Start Anonymous Chat </strong> button and you will instantly be
      connected with another random user.
    </p>

    <p>
      No registration is required. You don't need to provide your email,
      phone number or any personal details before starting a conversation.
    </p>

    <p>
      Whenever you want, you can leave the conversation and instantly connect
      with another stranger using the <strong>Next Stranger</strong> option.
    </p>

  </div>

</section>

<section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    Is Anonymous Chat Safe?
  </h2>

  <p className="text-gray-300 leading-8 mb-6">
    Anonymous chat can be enjoyable when used responsibly. Never share your
    personal information such as your phone number, home address, passwords,
    banking details or social media accounts with strangers.
  </p>

  <p className="text-gray-300 leading-8 mb-6">
    If another user behaves inappropriately, simply disconnect from the chat
    and report the conversation. ChatNova encourages respectful and friendly
    communication.
  </p>

  <p className="text-gray-300 leading-8">
    Our goal is to provide a private, secure and enjoyable anonymous text chat
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
        Is anonymous chat really anonymous?
      </h3>

      <p className="text-gray-300 leading-8">
        Yes. ChatNova does not ask for your name, email address or phone number
        before you start chatting.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Is ChatNova free?
      </h3>

      <p className="text-gray-300 leading-8">
        Yes. ChatNova is completely free to use. There are no signup fees or
        hidden charges.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Can I leave the conversation anytime?
      </h3>

      <p className="text-gray-300 leading-8">
        Absolutely. You can disconnect instantly and start chatting with another
        random stranger whenever you want.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Is anonymous chat safe?
      </h3>

      <p className="text-gray-300 leading-8">
        Anonymous chat is safe when you avoid sharing personal information and
        immediately report inappropriate users.
      </p>
    </div>

  </div>

</section>

<section className="mt-20 bg-gray-900 rounded-2xl p-10 text-center">

  <h2 className="text-4xl font-bold mb-4">
    Start Anonymous Chat Today
  </h2>

  <p className="text-gray-300 text-lg mb-8">
    Meet new people, enjoy private conversations and experience free anonymous
    text chat with strangers on ChatNova.
  </p>

  <Link
    href="/chat"
    className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold"
  >
    🚀 Start Anonymous Chat
  </Link>

</section>

    </main>
  );
}