import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Chat Sites in 2026 | Free Online Chat | ChatNova",
  description:
    "Explore free chat sites for meeting new people online. ChatNova offers anonymous random text chat without signup or login.",
  keywords: [
    "Chat Sites",
    "Best Chat Sites",
    "Free Chat Sites",
    "Online Chat Sites",
    "Anonymous Chat Site",
    "Random Chat Site",
    "Chat with Strangers",
    "Free Online Chat",
    "ChatNova",
  ],
  alternates: {
    canonical: "https://chatnova.in/chat-sites",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are chat sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chat sites are online platforms where people can communicate with other users through text or other forms of online conversation. Some chat sites focus on conversations with random strangers.",
      },
    },
    {
      "@type": "Question",
      name: "Is ChatNova a free chat site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ChatNova provides free anonymous random text chat without requiring users to create an account.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to sign up to use ChatNova?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. ChatNova does not require signup or login before starting a random text chat.",
      },
    },
    {
      "@type": "Question",
      name: "Can I chat with random strangers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ChatNova is designed to connect users with random available strangers for text conversations.",
      },
    },
  ],
};

export default function ChatSitesPage() {
  return (
    <main>
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
            Best Chat Sites
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-8">
            Looking for chat sites where you can meet new people online?
            ChatNova offers a simple way to start anonymous random text
            conversations without creating an account or logging in.
          </p>

          <Link
            href="/chat"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
          >
            🚀 Start Chat
          </Link>
        </section>

        {/* What are chat sites */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            What Are Chat Sites?
          </h2>

          <div className="space-y-5 text-gray-300 leading-8">
            <p>
              Chat sites are online platforms that allow people to communicate
              with other users. Depending on the platform, conversations may
              include text messaging, group discussions or random chats.
            </p>

            <p>
              Random chat sites are designed for people who want to meet and
              talk with users they do not already know. These platforms can
              make it easier to start a conversation without first building a
              social connection.
            </p>

            <p>
              ChatNova focuses on random text conversations, allowing users
              to connect with available strangers without creating an account.
            </p>
          </div>
        </section>

        {/* Why ChatNova */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">
            Why Use ChatNova?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                💬 Random Text Chat
              </h3>

              <p className="text-gray-300 leading-7">
                Start text conversations with random available users without
                requiring a camera or microphone.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                🔒 No Signup
              </h3>

              <p className="text-gray-300 leading-7">
                You can start chatting without creating an account or logging
                in.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                ⚡ Random Matching
              </h3>

              <p className="text-gray-300 leading-7">
                ChatNova looks for another available user for a random
                conversation.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                🌍 Meet New People
              </h3>

              <p className="text-gray-300 leading-7">
                Start conversations with people you may not otherwise meet
                online.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            How Does ChatNova Work?
          </h2>

          <div className="space-y-6 text-gray-300 leading-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                1. Open ChatNova
              </h3>

              <p>
                Open the ChatNova chat experience and choose to start a
                conversation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                2. Find a User
              </h3>

              <p>
                ChatNova searches for another available user for a random
                conversation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                3. Start Chatting
              </h3>

              <p>
                Once connected, you can exchange text messages with the other
                user.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                4. Find Someone New
              </h3>

              <p>
                If you want a different conversation, leave the current chat
                and use the Next Stranger option.
              </p>
            </div>
          </div>
        </section>

        {/* Safety */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Stay Safe on Chat Sites
          </h2>

          <p className="text-gray-300 leading-8 mb-5">
            When using online chat sites, remember that you may be talking
            with people you do not know. Protect your privacy and avoid
            sharing sensitive information.
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-300 leading-7">
            <li>Do not share passwords or financial information.</li>
            <li>Do not share your home address or exact location.</li>
            <li>Avoid sharing private contact details.</li>
            <li>Leave conversations that make you uncomfortable.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                What are chat sites?
              </h3>

              <p className="text-gray-300 leading-8">
                Chat sites are online platforms where people can communicate
                with other users through online conversations. Some platforms
                also allow users to chat with random strangers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Is ChatNova a free chat site?
              </h3>

              <p className="text-gray-300 leading-8">
                Yes. ChatNova provides free anonymous random text chat without
                requiring an account.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Do I need to sign up?
              </h3>

              <p className="text-gray-300 leading-8">
                No. You can start a random text chat without creating an
                account or logging in.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I chat with random strangers?
              </h3>

              <p className="text-gray-300 leading-8">
                Yes. ChatNova connects users with available strangers for
                random text conversations.
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
                Start a random conversation with a stranger.
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
                Chat anonymously without creating an account.
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
                Meet random people through anonymous text chat.
              </p>
            </Link>

            <Link
              href="/text-chat"
              className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
            >
              <h3 className="font-semibold text-lg">
                Text Chat
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                Start a free anonymous text conversation.
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 bg-gray-900 rounded-2xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Chatting?
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Start a free anonymous conversation with a random user on
            ChatNova.
          </p>

          <Link
            href="/chat"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
          >
            🚀 Start Chat
          </Link>
        </section>
      </div>
    </main>
  );
}