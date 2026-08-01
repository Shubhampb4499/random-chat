import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Private Chat | Secure Anonymous Chat | ChatNova",

  description:
    "Enjoy secure private chat with strangers online. No signup, no login and completely anonymous text chat on ChatNova.",

  keywords: [
    "Private Chat",
    "Private Text Chat",
    "Secure Chat",
    "Anonymous Private Chat",
    "Online Private Chat",
    "ChatNova",
  ],

  alternates: {
    canonical: "https://chatnova.in/private-chat",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "Is ChatNova private?",

      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ChatNova allows anonymous private conversations without registration."
      }
    },
    {
      "@type": "Question",
      name: "Do I need an account?",

      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You can start chatting instantly."
      }
    }
  ]
};

export default function PrivateChatPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-white">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <h1 className="text-5xl font-bold mb-6">
        Private Chat
      </h1>

      <p className="text-gray-300 text-lg leading-8 mb-8">
        ChatNova provides a private chat experience where you can connect with
        strangers anonymously without registration. Your conversations remain
        simple, fast and completely private.
      </p>

      <Link
        href="/chat"
        className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
      >
        🚀 Start Private Chat
      </Link>
      <section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    Why Choose Private Chat?
  </h2>

  <p className="text-gray-300 leading-8 mb-6">
    Private chat allows you to communicate without revealing your identity.
    Whether you want casual conversations, make new friends or simply enjoy
    anonymous chatting, ChatNova provides a safe environment.
  </p>

  <p className="text-gray-300 leading-8 mb-6">
    Unlike traditional messaging apps, ChatNova does not require registration,
    phone numbers or email addresses. You can begin chatting instantly with one click.
  </p>

</section>

<section className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    Features of ChatNova Private Chat
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        🔒 Complete Privacy
      </h3>

      <p className="text-gray-300">
        Chat without sharing your identity or personal details.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        ⚡ Instant Connection
      </h3>

      <p className="text-gray-300">
        Connect with strangers instantly without signup.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        💬 Anonymous Text Chat
      </h3>

      <p className="text-gray-300">
        Enjoy secure text conversations anytime.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        🌍 Meet New People
      </h3>

      <p className="text-gray-300">
        Talk with people from around the world in a private environment.
      </p>
    </div>

  </div>

</section>
<section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    How Private Chat Works
  </h2>

  <div className="space-y-6 text-gray-300 leading-8">

    <p>
      ChatNova makes private chatting simple. Click the
      <strong> Start Private Chat </strong>
      button and you will instantly be connected with another random user.
    </p>

    <p>
      There is no signup, registration or profile creation required. Every
      conversation begins anonymously.
    </p>

    <p>
      Whenever you want, you can leave the conversation and instantly connect
      with another stranger.
    </p>

  </div>

</section>

<section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    Is Private Chat Safe?
  </h2>

  <p className="text-gray-300 leading-8 mb-6">
    Private chat is safest when you avoid sharing personal information like
    your phone number, address, passwords or banking details.
  </p>

  <p className="text-gray-300 leading-8">
    If someone behaves inappropriately, simply disconnect and start a new chat.
    ChatNova encourages respectful and friendly conversations.
  </p>

</section>

<section className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    Frequently Asked Questions
  </h2>

  <div className="space-y-8">

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Is private chat really private?
      </h3>

      <p className="text-gray-300 leading-8">
        Yes. ChatNova does not require your personal information before you
        start chatting.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Is ChatNova free?
      </h3>

      <p className="text-gray-300 leading-8">
        Yes. ChatNova is completely free.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Can I disconnect anytime?
      </h3>

      <p className="text-gray-300 leading-8">
        Absolutely. You can leave the conversation whenever you want.
      </p>
    </div>

  </div>

</section>

<section className="mt-20 bg-gray-900 rounded-2xl p-10 text-center">

  <h2 className="text-4xl font-bold mb-4">
    Start Private Chat Today
  </h2>

  <p className="text-gray-300 text-lg mb-8">
    Enjoy secure anonymous conversations with strangers on ChatNova.
  </p>

  <Link
    href="/chat"
    className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold"
  >
    🚀 Start Private Chat
  </Link>

</section>

<section className="mt-20">

  <h2 className="text-3xl font-bold mb-8">
    Explore More Chat Pages
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

    <Link href="/random-chat" className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl">
      <h3 className="font-semibold text-lg">Random Chat</h3>
    </Link>

    <Link href="/anonymous-chat" className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl">
      <h3 className="font-semibold text-lg">Anonymous Chat</h3>
    </Link>

    <Link href="/text-chat" className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl">
      <h3 className="font-semibold text-lg">Text Chat</h3>
    </Link>

    <Link href="/online-chat" className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl">
      <h3 className="font-semibold text-lg">Online Chat</h3>
    </Link>

  </div>

</section>

    </main>
  );
}