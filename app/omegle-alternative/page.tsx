import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Omegle Alternative in 2026 | ChatNova",
  description:
    "Looking for an Omegle alternative? ChatNova offers free anonymous random text chat with strangers. No signup or login required.",
  keywords: [
    "Omegle Alternative",
    "Best Omegle Alternative",
    "Omegle Replacement",
    "Anonymous Chat",
    "Random Chat",
    "Chat with Strangers",
    "ChatNova",
  ],
  alternates: {
    canonical: "https://chatnova.in/omegle-alternative",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ChatNova an Omegle alternative?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatNova provides anonymous random text chat with strangers and can be used as an alternative for people looking for a simple stranger-chat experience.",
      },
    },
    {
      "@type": "Question",
      name: "Is ChatNova free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ChatNova is free to use for anonymous random text chat.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to create an account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. ChatNova does not require an account or login to start a random text chat.",
      },
    },
    {
      "@type": "Question",
      name: "Can I talk to another stranger?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can leave the current conversation and use the Next Stranger option to start another random conversation.",
      },
    },
  ],
};

export default function OmegleAlternativePage() {
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
            Best Omegle Alternative
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-8">
            Omegle has closed, but people looking for random conversations
            with strangers still have alternatives. ChatNova provides a
            simple anonymous text-chat experience where you can connect with
            random people without creating an account.
          </p>

          <Link
            href="/chat"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
          >
            🚀 Start Chat Now
          </Link>
        </section>

        {/* What is Omegle Alternative */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            What Is an Omegle Alternative?
          </h2>

          <div className="space-y-5 text-gray-300 leading-8">
            <p>
              An Omegle alternative is a platform that allows people to
              connect with strangers for online conversations. Different
              platforms offer different features, including text chat,
              video chat or interest-based matching.
            </p>

            <p>
              ChatNova focuses on random anonymous text conversations.
              Users can start chatting without creating a public profile
              or completing a signup process.
            </p>
          </div>
        </section>

        {/* Why ChatNova */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">
            Why Choose ChatNova?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                🔒 Anonymous Chat
              </h3>

              <p className="text-gray-300 leading-7">
                Start a conversation without creating an account or sharing
                your name before chatting.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                ⚡ Random Matching
              </h3>

              <p className="text-gray-300 leading-7">
                ChatNova connects you with another available user for a
                random conversation.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                💬 Text Chat
              </h3>

              <p className="text-gray-300 leading-7">
                Enjoy simple text-based conversations without requiring a
                camera or microphone.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                🌍 Meet New People
              </h3>

              <p className="text-gray-300 leading-7">
                Start conversations with random people and discover different
                perspectives and backgrounds.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            How Does ChatNova Work?
          </h2>

          <div className="space-y-6 text-gray-300 leading-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                1. Start Chat
              </h3>

              <p>
                Click the Start Chat button to enter the ChatNova chat
                experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                2. Find a Stranger
              </h3>

              <p>
                ChatNova looks for another available user for a random
                conversation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                3. Start Talking
              </h3>

              <p>
                Once connected, you can exchange text messages with the
                stranger.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                4. Meet Someone Else
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
            Stay Safe While Chatting With Strangers
          </h2>

          <p className="text-gray-300 leading-8 mb-5">
            Random stranger chat can introduce you to people you do not know.
            Protect your privacy and avoid sharing sensitive information.
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
                Is ChatNova an Omegle alternative?
              </h3>

              <p className="text-gray-300 leading-8">
                ChatNova provides random anonymous text chat with strangers
                and can be used by people looking for a simple stranger-chat
                experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Is ChatNova free?
              </h3>

              <p className="text-gray-300 leading-8">
                Yes. ChatNova is free to use for anonymous random text chat.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Do I need to create an account?
              </h3>

              <p className="text-gray-300 leading-8">
                No. You can start a random chat without creating an account
                or logging in.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I talk to another stranger?
              </h3>

              <p className="text-gray-300 leading-8">
                Yes. You can leave the current conversation and use the Next
                Stranger option to start another random conversation.
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
              href="/stranger-chat"
              className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
            >
              <h3 className="font-semibold text-lg">
                Stranger Chat
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                Talk with random strangers online.
              </p>
            </Link>

            <Link
              href="/random-text-chat"
              className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
            >
              <h3 className="font-semibold text-lg">
                Random Text Chat
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                Enjoy anonymous random text conversations.
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 text-center bg-gray-900 rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-4">
            Looking for an Omegle Alternative?
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Start a free anonymous random text chat on ChatNova.
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