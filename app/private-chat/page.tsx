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
        text: "ChatNova allows anonymous conversations without requiring registration or personal details.",
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
      name: "Is private chat free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ChatNova is free to use.",
      },
    },
    {
      "@type": "Question",
      name: "Can I disconnect anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can leave the conversation whenever you want and start a new chat.",
      },
    },
  ],
};

export default function PrivateChatPage() {
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
            Private Chat
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-8">
            ChatNova provides a private chat experience where you can connect
            with strangers anonymously without registration. Enjoy simple,
            fast text conversations without creating a public profile.
          </p>

          <Link
            href="/chat"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
          >
            🚀 Start Private Chat
          </Link>
        </section>

        {/* Features */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">
            Private Chat Features
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                🔒 Anonymous Conversations
              </h3>

              <p className="text-gray-300 leading-7">
                Start conversations without creating an account or sharing
                personal details.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                ⚡ Instant Connection
              </h3>

              <p className="text-gray-300 leading-7">
                Connect with an available stranger and start chatting
                instantly.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                💬 Anonymous Text Chat
              </h3>

              <p className="text-gray-300 leading-7">
                Enjoy simple text conversations without unnecessary
                distractions.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                🌍 Meet New People
              </h3>

              <p className="text-gray-300 leading-7">
                Talk with random people from different places and
                backgrounds.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            How Private Chat Works
          </h2>

          <div className="space-y-5 text-gray-300 leading-8">
            <p>
              Click the <strong>Start Private Chat</strong> button to enter
              the ChatNova chat experience.
            </p>

            <p>
              ChatNova looks for another available user and connects you
              through an anonymous text conversation.
            </p>

            <p>
              You do not need to create a profile or register before
              starting a conversation.
            </p>

            <p>
              If you want to end the conversation, you can disconnect and
              start a new chat with another stranger.
            </p>
          </div>
        </section>

        {/* Safety */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Stay Safe in Private Chat
          </h2>

          <p className="text-gray-300 leading-8 mb-5">
            Anonymous conversations can help protect your identity, but you
            should still take care when talking with people online.
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-300 leading-7">
            <li>Do not share passwords or financial information.</li>
            <li>Avoid sharing your home address or exact location.</li>
            <li>Do not share sensitive personal information.</li>
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
                Is private chat really private?
              </h3>

              <p className="text-gray-300 leading-8">
                ChatNova does not require your name, email address or phone
                number before you start chatting. However, you should still
                avoid sharing sensitive personal information with strangers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Is ChatNova free?
              </h3>

              <p className="text-gray-300 leading-8">
                Yes. ChatNova is free to use.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Do I need an account?
              </h3>

              <p className="text-gray-300 leading-8">
                No. You can start chatting without creating an account.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I disconnect anytime?
              </h3>

              <p className="text-gray-300 leading-8">
                Yes. You can leave the conversation whenever you want and
                start a new chat.
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
                Connect with a random stranger through text chat.
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
                Start an anonymous conversation without signup.
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
                Enjoy simple anonymous text conversations.
              </p>
            </Link>

            <Link
              href="/online-chat"
              className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
            >
              <h3 className="font-semibold text-lg">
                Online Chat
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                Start chatting online with strangers instantly.
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 bg-gray-900 rounded-2xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Start a Private Chat
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Connect with a stranger and start an anonymous text conversation.
          </p>

          <Link
            href="/chat"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold"
          >
            🚀 Start Private Chat
          </Link>
        </section>
      </div>
    </main>
  );
}