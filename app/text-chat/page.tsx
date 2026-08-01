import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Text Chat Online | Free Anonymous Text Chat | ChatNova",
  description:
    "Start free text chat with strangers instantly. No signup, no login required. Enjoy anonymous text conversations on ChatNova.",
  keywords: [
    "Text Chat",
    "Free Text Chat",
    "Anonymous Text Chat",
    "Online Text Chat",
    "Text Chat with Strangers",
    "ChatNova",
  ],
  alternates: {
    canonical: "https://chatnova.in/text-chat",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ChatNova text chat free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ChatNova offers completely free text chatting.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to register?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You can start chatting instantly without registration.",
      },
    },
    {
      "@type": "Question",
      name: "Is text chat anonymous?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your personal identity is never required.",
      },
    },
  ],
};

export default function TextChatPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-white">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <h1 className="text-5xl font-bold mb-6">
        Text Chat
      </h1>

      <p className="text-gray-300 text-lg leading-8 mb-8">
        ChatNova lets you enjoy free anonymous text chat with strangers from
        around the world. No signup, no login and no personal information
        required. Simply click below and start chatting instantly.
      </p>

      <Link
        href="/chat"
        className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
      >
        🚀 Start Text Chat
      </Link>
      <section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    Why Use Text Chat?
  </h2>

  <p className="text-gray-300 leading-8 mb-6">
    Text chat is one of the simplest ways to communicate online. You can chat
    with strangers without using your camera or microphone, making every
    conversation comfortable and private.
  </p>

  <p className="text-gray-300 leading-8 mb-6">
    ChatNova allows users to connect instantly with random people from around
    the world. There is no registration, no login and no complicated setup.
    Just click Start Chat and begin your conversation.
  </p>

</section>

<section className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    Features of ChatNova Text Chat
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        💬 Instant Text Chat
      </h3>

      <p className="text-gray-300">
        Connect with random strangers in just one click.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        🔒 Anonymous Conversations
      </h3>

      <p className="text-gray-300">
        Stay private without revealing your personal identity.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        ⚡ Fast Matching
      </h3>

      <p className="text-gray-300">
        Meet a new stranger within seconds whenever you want.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        🌍 Worldwide Community
      </h3>

      <p className="text-gray-300">
        Chat with people from different countries and cultures.
      </p>
    </div>

  </div>

</section>
<section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    How Text Chat Works
  </h2>

  <div className="space-y-6 text-gray-300 leading-8">

    <p>
      ChatNova makes text chatting easy. Click the
      <strong> Start Text Chat </strong>
      button and you will instantly be connected with another random user.
    </p>

    <p>
      There is no registration process and no personal information required.
      Every conversation starts anonymously.
    </p>

    <p>
      If you want to meet someone new, simply disconnect and connect with
      another stranger in one click.
    </p>

  </div>

</section>

<section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    Is Text Chat Safe?
  </h2>

  <p className="text-gray-300 leading-8 mb-6">
    Text chat is safe when you avoid sharing sensitive information such as your
    phone number, address, passwords or financial details.
  </p>

  <p className="text-gray-300 leading-8">
    If another user behaves inappropriately, simply disconnect from the
    conversation. ChatNova is designed to provide a safe and enjoyable
    anonymous chatting experience.
  </p>

</section>

<section className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    Frequently Asked Questions
  </h2>

  <div className="space-y-8">

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Is text chat free?
      </h3>

      <p className="text-gray-300 leading-8">
        Yes. ChatNova offers completely free text chat.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Do I need an account?
      </h3>

      <p className="text-gray-300 leading-8">
        No. Registration is not required.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Can I leave anytime?
      </h3>

      <p className="text-gray-300 leading-8">
        Yes. You can disconnect whenever you want and instantly find another
        stranger.
      </p>
    </div>

  </div>

</section>

<section className="mt-20 text-center bg-gray-900 rounded-2xl p-10">

  <h2 className="text-4xl font-bold mb-4">
    Start Text Chat Now
  </h2>

  <p className="text-gray-300 text-lg mb-8">
    Meet new people, make friends and enjoy free anonymous text chat on
    ChatNova.
  </p>

  <Link
    href="/chat"
    className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold"
  >
    🚀 Start Text Chat
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

    <Link href="/online-chat" className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl">
      <h3 className="font-semibold text-lg">Online Chat</h3>
    </Link>

    <Link href="/free-chat" className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl">
      <h3 className="font-semibold text-lg">Free Chat</h3>
    </Link>

  </div>

</section>

    </main>
  );
}