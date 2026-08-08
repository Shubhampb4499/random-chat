import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Random Chat - Chat with Random Strangers Online | ChatNova",
  description:
    "Start free random text chat with strangers instantly. No signup or login required. Meet new people anonymously with ChatNova.",
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
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ChatNova completely free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ChatNova is completely free to use.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to create an account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. ChatNova does not require registration or login.",
      },
    },
    {
      "@type": "Question",
      name: "Is my identity anonymous?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatNova allows users to start text conversations without creating an account or sharing personal information.",
      },
    },
    {
      "@type": "Question",
      name: "Can I leave a chat anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can disconnect from a conversation at any time.",
      },
    },
  ],
};

export default function RandomChatPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Random Chat with Strangers
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-8 max-w-3xl mx-auto mb-8">
          ChatNova is a free random chat platform where you can connect with
          strangers from around the world. There is no registration or login
          required, and you can start a text conversation without creating a
          profile.
        </p>

        <Link
          href="/chat"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg transition"
        >
          🚀 Start Random Chat
        </Link>
      </section>

      {/* What is Random Chat */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Is Random Chat?
        </h2>

        <div className="space-y-5 text-gray-300 leading-8">
          <p>
            Random chat is an online conversation format that allows people to
            meet someone they do not already know. Instead of choosing a
            specific person, users are connected with another available
            participant.
          </p>

          <p>
            Random chat can be useful for people who want to have casual
            conversations, meet people from different backgrounds, or simply
            talk to someone new online.
          </p>

          <p>
            ChatNova focuses on simple text conversations. You do not need to
            create a public profile before starting a conversation.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Random Chat Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              🔒 Anonymous Conversations
            </h3>

            <p className="text-gray-300 leading-7">
              Start a conversation without creating an account or public
              profile.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              ⚡ Instant Matching
            </h3>

            <p className="text-gray-300 leading-7">
              Connect with another available user through the random matching
              system.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              💬 Text Chat
            </h3>

            <p className="text-gray-300 leading-7">
              Have simple text conversations without the need to create a
              profile.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              🌍 Meet New People
            </h3>

            <p className="text-gray-300 leading-7">
              Start conversations with people you may not have met before.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          How Does Random Chat Work?
        </h2>

        <div className="space-y-6 text-gray-300 leading-8">
          <p>
            Using ChatNova is simple. Click the{" "}
            <strong className="text-white">Start Random Chat</strong> button
            to enter the chat experience.
          </p>

          <p>
            The matching system looks for another available user. Once a
            match is available, you can start a text conversation.
          </p>

          <p>
            If you want to end the conversation, you can disconnect from the
            chat at any time.
          </p>
        </div>
      </section>

      {/* Safety */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Safety Tips for Random Chat
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10">
          When talking with people online, protect your personal information
          and leave conversations that make you uncomfortable.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <ul className="space-y-4 text-gray-300 leading-7">
              <li>• Do not share passwords or financial information.</li>
              <li>• Avoid sharing your home address or exact location.</li>
              <li>• Do not share sensitive personal information.</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <ul className="space-y-4 text-gray-300 leading-7">
              <li>• End conversations that make you uncomfortable.</li>
              <li>• Be respectful toward other users.</li>
              <li>
                • Review our{" "}
                <Link
                  href="/community-guidelines"
                  className="text-green-400 hover:underline"
                >
                  Community Guidelines
                </Link>
                .
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is ChatNova completely free?
            </h3>

            <p className="text-gray-300 leading-8">
              Yes. ChatNova is completely free to use. You can start chatting
              with random strangers without paying a subscription fee.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Do I need to create an account?
            </h3>

            <p className="text-gray-300 leading-8">
              No. ChatNova does not require registration or login before
              starting a random text chat.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is my identity anonymous?
            </h3>

            <p className="text-gray-300 leading-8">
              ChatNova allows you to start a conversation without creating an
              account or public profile. You should still avoid sharing
              sensitive personal information with strangers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Can I leave a chat anytime?
            </h3>

            <p className="text-gray-300 leading-8">
              Yes. You can disconnect from a conversation whenever you want.
            </p>
          </div>
        </div>
      </section>

      {/* Related Chat Pages */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Explore More Chat Options
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/anonymous-chat"
            className="bg-gray-900 hover:bg-gray-800 p-6 rounded-xl border border-gray-800 transition"
          >
            <h3 className="font-semibold text-lg">
              Anonymous Chat
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Learn more about anonymous online conversations.
            </p>
          </Link>

          <Link
            href="/chat-with-strangers"
            className="bg-gray-900 hover:bg-gray-800 p-6 rounded-xl border border-gray-800 transition"
          >
            <h3 className="font-semibold text-lg">
              Chat with Strangers
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Explore another way to meet new people online.
            </p>
          </Link>

          <Link
            href="/free-chat"
            className="bg-gray-900 hover:bg-gray-800 p-6 rounded-xl border border-gray-800 transition"
          >
            <h3 className="font-semibold text-lg">
              Free Chat
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Start a free online text conversation.
            </p>
          </Link>

          <Link
            href="/online-chat"
            className="bg-gray-900 hover:bg-gray-800 p-6 rounded-xl border border-gray-800 transition"
          >
            <h3 className="font-semibold text-lg">
              Online Chat
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Learn about online chat options on ChatNova.
            </p>
          </Link>
        </div>
      </section>

      {/* Trust Links */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <p className="text-gray-400 leading-7">
          Before using ChatNova, please review our{" "}
          <Link
            href="/privacy-policy"
            className="text-green-400 hover:underline"
          >
            Privacy Policy
          </Link>
          ,{" "}
          <Link
            href="/terms"
            className="text-green-400 hover:underline"
          >
            Terms & Conditions
          </Link>
          , and{" "}
          <Link
            href="/community-guidelines"
            className="text-green-400 hover:underline"
          >
            Community Guidelines
          </Link>
          .
        </p>
      </section>
    </main>
  );
}