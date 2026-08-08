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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ChatNova free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ChatNova offers free online text chatting without requiring a subscription or payment.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You can start chatting instantly without creating an account.",
      },
    },
    {
      "@type": "Question",
      name: "Can I leave the chat anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can disconnect at any time and connect with another random stranger.",
      },
    },
    {
      "@type": "Question",
      name: "Is online chat anonymous?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ChatNova does not require your name, phone number or email address before you start chatting.",
      },
    },
  ],
};

export default function OnlineChatPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Hero */}
        <section>
          <h1 className="text-5xl font-bold mb-6">
            Online Chat with Strangers
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-8">
            ChatNova lets you enjoy online chat with strangers instantly.
            No registration, no login and no personal information required.
            Connect with people from around the world through fast and
            anonymous text chat.
          </p>

          <Link
            href="/chat"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
          >
            🚀 Start Online Chat
          </Link>
        </section>

        {/* Features */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">
            Why Use ChatNova for Online Chat?
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
                💬 Free Text Chat
              </h3>

              <p className="text-gray-300">
                Enjoy free text chatting without creating an account.
              </p>
            </div>

          </div>
        </section>

        {/* How it works */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            How Does Online Chat Work?
          </h2>

          <div className="space-y-5 text-gray-300 leading-8">

            <p>
              ChatNova makes online chatting simple and fast. Click the{" "}
              <strong className="text-white">
                Start Online Chat
              </strong>{" "}
              button and you will be connected with another random user.
            </p>

            <p>
              You do not need to register or create an account. Simply open
              the chat, start your conversation and meet new people online.
            </p>

            <p>
              If you want to meet someone else, click{" "}
              <strong className="text-white">
                Next Stranger
              </strong>{" "}
              and ChatNova will match you with another available user.
            </p>

          </div>
        </section>

        {/* Safety */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Stay Safe While Chatting Online
          </h2>

          <p className="text-gray-300 leading-8">
            Avoid sharing sensitive personal information such as your home
            address, phone number, passwords or financial details with
            strangers. If another user behaves inappropriately, leave the
            conversation and use the available reporting or safety options.
          </p>
        </section>

        {/* FAQ */}
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
                Yes. ChatNova offers free online text chatting without
                requiring any subscription or payment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Do I need an account?
              </h3>

              <p className="text-gray-300 leading-8">
                No. You can start chatting instantly without creating an
                account or logging in.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I leave the chat anytime?
              </h3>

              <p className="text-gray-300 leading-8">
                Yes. You can disconnect at any time and immediately connect
                with another random stranger.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Is online chat anonymous?
              </h3>

              <p className="text-gray-300 leading-8">
                Yes. ChatNova does not require your name, phone number or
                email address before you start chatting.
              </p>
            </div>

          </div>
        </section>

        {/* Related Pages */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">
            Explore More Chat Options
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <Link
              href="/random-chat"
              className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
            >
              <h3 className="font-semibold text-lg">
                Random Chat
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                Meet random strangers instantly through anonymous chat.
              </p>
            </Link>

            <Link
              href="/anonymous-chat"
              className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
            >
              <h3 className="font-semibold text-lg">
                Anonymous Chat
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                Chat with strangers without sharing your identity.
              </p>
            </Link>

            <Link
              href="/chat-with-strangers"
              className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
            >
              <h3 className="font-semibold text-lg">
                Chat with Strangers
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                Meet people from around the world.
              </p>
            </Link>

            <Link
              href="/free-chat"
              className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
            >
              <h3 className="font-semibold text-lg">
                Free Chat
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                Enjoy free online text conversations.
              </p>
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
}