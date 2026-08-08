import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Text Chat Online | Free Anonymous Text Chat | ChatNova",
  description:
    "Use ChatNova for free online text chat with strangers. Start an anonymous text conversation without signup or login and switch conversations whenever you want.",
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
      name: "What is text chat on ChatNova?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatNova provides text-based conversations with randomly matched strangers. You can start chatting without creating an account.",
      },
    },
    {
      "@type": "Question",
      name: "Is ChatNova text chat free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ChatNova's text chat is free to use and does not require a subscription.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an account to use text chat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. ChatNova does not require registration or login before starting a text chat.",
      },
    },
    {
      "@type": "Question",
      name: "Can I leave a text chat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can leave a conversation and use the chat controls to connect with another stranger.",
      },
    },
  ],
};

export default function TextChatPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-white">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-6">
          Text Chat Online
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          ChatNova lets you have simple text conversations with randomly
          matched strangers online. You can start chatting without creating
          an account or logging in, making it easy to begin a conversation
          without a lengthy registration process.
        </p>

        <Link
          href="/chat"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
        >
          🚀 Start Text Chat
        </Link>

      </section>

      {/* Features */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-8">
          Text Chat Features
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              💬 Text-Based Conversations
            </h3>

            <p className="text-gray-300 leading-7">
              Chat through text messages without needing a camera or
              microphone.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              🔒 No Registration Required
            </h3>

            <p className="text-gray-300 leading-7">
              Start a conversation without creating a profile or signing in.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              ⚡ Quick Matching
            </h3>

            <p className="text-gray-300 leading-7">
              Get connected with another available stranger when you start
              a chat.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              🌍 Meet People Worldwide
            </h3>

            <p className="text-gray-300 leading-7">
              Text conversations can introduce you to people from different
              places and backgrounds.
            </p>
          </div>

        </div>

      </section>

      {/* How it works */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          How Does Text Chat Work?
        </h2>

        <div className="space-y-5 text-gray-300 leading-8">

          <p>
            Start by selecting the{" "}
            <strong className="text-white">Start Text Chat</strong> button.
            ChatNova then takes you to the chat experience where you can
            communicate with a randomly matched stranger.
          </p>

          <p>
            The conversation is text-based, so you can communicate through
            messages without using a camera or microphone.
          </p>

          <p>
            If you no longer want to continue a conversation, you can leave
            the chat and look for another stranger using the available chat
            controls.
          </p>

        </div>

      </section>

      {/* Safety */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Stay Safe While Using Text Chat
        </h2>

        <div className="space-y-5 text-gray-300 leading-8">

          <p>
            Random conversations can involve people you do not know.
            Avoid sharing sensitive information such as your home address,
            phone number, passwords, financial details or other private
            information.
          </p>

          <p>
            If another user behaves inappropriately, end the conversation
            rather than continuing an uncomfortable interaction.
          </p>

        </div>

      </section>

      {/* FAQ */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-semibold mb-2">
              What is text chat on ChatNova?
            </h3>

            <p className="text-gray-300 leading-8">
              ChatNova provides text-based conversations with randomly
              matched strangers. You can start chatting without creating
              an account.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is ChatNova text chat free?
            </h3>

            <p className="text-gray-300 leading-8">
              Yes. ChatNova's text chat is free to use and does not require
              a subscription.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Do I need an account to use text chat?
            </h3>

            <p className="text-gray-300 leading-8">
              No. ChatNova does not require registration or login before
              starting a text chat.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Can I leave a text chat?
            </h3>

            <p className="text-gray-300 leading-8">
              Yes. You can leave a conversation and use the chat controls
              to connect with another stranger.
            </p>
          </div>

        </div>

      </section>

      {/* Related pages */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-8">
          Explore More Chat Options
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

          <Link
            href="/random-chat"
            className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl transition"
          >
            <h3 className="font-semibold text-lg">
              Random Chat
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Start a conversation with a randomly matched stranger.
            </p>
          </Link>

          <Link
            href="/anonymous-chat"
            className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl transition"
          >
            <h3 className="font-semibold text-lg">
              Anonymous Chat
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Learn more about anonymous conversations.
            </p>
          </Link>

          <Link
            href="/online-chat"
            className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl transition"
          >
            <h3 className="font-semibold text-lg">
              Online Chat
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Explore online text conversations.
            </p>
          </Link>

          <Link
            href="/free-chat"
            className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl transition"
          >
            <h3 className="font-semibold text-lg">
              Free Chat
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Find out more about free chat on ChatNova.
            </p>
          </Link>

        </div>

      </section>

    </main>
  );
}