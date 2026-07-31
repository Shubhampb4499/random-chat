import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Random Chat - Chat with Random Strangers Online | ChatNova",
  description:
    "Start free random text chat with strangers instantly. No signup, no login required. Meet new people anonymously with ChatNova.",
  keywords: [
    "Random Chat",
    "Random Text Chat",
    "Anonymous Chat",
    "Chat with Random Strangers",
    "Free Random Chat",
    "Online Chat",
  ],
  alternates: {
    canonical: "https://chatnova.in/random-chat",
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is ChatNova completely free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. ChatNova is completely free to use."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to create an account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. ChatNova does not require registration or login."
      }
    },
    {
      "@type": "Question",
      "name": "Is my identity anonymous?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. ChatNova allows anonymous text chat without sharing personal information."
      }
    },
    {
      "@type": "Question",
      "name": "Can I leave a chat anytime?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can disconnect anytime and instantly connect with another stranger."
      }
    }
  ]
};
export default function RandomChatPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-white">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>

      <h1 className="text-5xl font-bold mb-6">
        Random Chat with Strangers
      </h1>

      <p className="text-gray-300 text-lg leading-8 mb-8">
        ChatNova is a free random chat platform where you can instantly connect
        with strangers from around the world. There is no registration, no
        login, and no need to share your personal information. Simply start
        chatting and meet new people in a safe and anonymous environment.
      </p>

      <Link
        href="/chat"
        className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
      >
        🚀 Start Random Chat
      </Link>
      <section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    Why Choose ChatNova for Random Chat?
  </h2>

  <p className="text-gray-300 leading-8 mb-6">
    ChatNova is designed for people who want a simple, fast and anonymous
    chatting experience. Unlike many chat platforms, you do not need to create
    an account or provide any personal information before starting a
    conversation.
  </p>

  <p className="text-gray-300 leading-8 mb-6">
    Whether you want to make new friends, practice English, talk to people from
    different countries or simply have a casual conversation, ChatNova helps
    you connect with random strangers in just one click.
  </p>

</section>

<section className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    Features of ChatNova
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        🔒 Anonymous Chat
      </h3>

      <p className="text-gray-300">
        No registration or login required. Your identity stays private.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        ⚡ Instant Matching
      </h3>

      <p className="text-gray-300">
        Connect with random strangers instantly without waiting.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        💬 Text Chat Only
      </h3>

      <p className="text-gray-300">
        Simple and distraction-free text conversations with strangers.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        🌍 Meet New People
      </h3>

      <p className="text-gray-300">
        Chat with people from different countries and cultures.
      </p>
    </div>

  </div>

</section>
<section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    How Random Chat Works
  </h2>

  <div className="space-y-6 text-gray-300 leading-8">

    <p>
      Using ChatNova is simple. Click the <strong>Start Random Chat</strong> button and
      you will be matched with another random user instantly.
    </p>

    <p>
      There is no registration process, no profile creation and no personal
      information required. Every conversation starts anonymously.
    </p>

    <p>
      If you don't enjoy the conversation, simply click the
      <strong> Next Stranger </strong>
      button to connect with someone new.
    </p>

  </div>

</section>

<section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    Is Random Chat Safe?
  </h2>

  <p className="text-gray-300 leading-8 mb-6">
    ChatNova provides anonymous text chat, but users should always avoid
    sharing personal information such as phone numbers, addresses, passwords,
    bank details or social media accounts.
  </p>

  <p className="text-gray-300 leading-8">
    If someone behaves inappropriately, you can immediately disconnect and use
    the Report feature. Our goal is to provide a safe, anonymous and enjoyable random text chat experience for everyone..
  </p>

</section>
<section className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    Frequently Asked Questions
  </h2>

  <div className="space-y-8">

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Is ChatNova completely free?
      </h3>

      <p className="text-gray-300 leading-8">
        Yes. ChatNova is completely free to use. You can start chatting with
        random strangers without paying any fees.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Do I need to create an account?
      </h3>

      <p className="text-gray-300 leading-8">
        No. ChatNova does not require registration or login. You can start a
        random text chat instantly.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Is my identity anonymous?
      </h3>

      <p className="text-gray-300 leading-8">
        Yes. ChatNova does not ask for your name or personal information before
        starting a conversation.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Can I leave a chat anytime?
      </h3>

      <p className="text-gray-300 leading-8">
        Yes. You can disconnect at any time and instantly connect with another
        random stranger.
      </p>
    </div>

  </div>

</section>

<section className="mt-20 text-center bg-gray-900 rounded-2xl p-10">

  <h2 className="text-4xl font-bold mb-4">
    Ready to Meet Someone New?
  </h2>

  <p className="text-gray-300 mb-8 text-lg">
    Start your free anonymous random text chat now and connect with strangers
    from around the world.
  </p>

  <Link
    href="/chat"
    className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold"
  >
    🚀 Start Random Chat
  </Link>

</section>

    </main>
  );
}