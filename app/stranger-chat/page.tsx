import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stranger Chat - Talk with Random People Online | ChatNova",
  description:
    "Start stranger chat with random people online. ChatNova offers free anonymous text conversations without signup or login.",
  keywords: [
    "Stranger Chat",
    "Chat with Strangers",
    "Random Stranger Chat",
    "Stranger Chat Online",
    "Anonymous Stranger Chat",
    "Free Stranger Chat",
    "ChatNova",
  ],
  alternates: {
    canonical: "https://chatnova.in/stranger-chat",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Stranger Chat?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Stranger Chat lets you start a conversation with a random person online. ChatNova provides anonymous text chat without requiring registration.",
      },
    },
    {
      "@type": "Question",
      name: "Is Stranger Chat free?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. ChatNova provides free stranger text chat without requiring a subscription or signup.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to sign up?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. You can start a stranger chat without creating an account or logging in.",
      },
    },
    {
      "@type": "Question",
      name: "How can I stay safe while using Stranger Chat?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Avoid sharing sensitive personal information such as passwords, financial details, your home address or exact location. Leave conversations that make you uncomfortable.",
      },
    },
  ],
};

export default function StrangerChatPage() {
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
            Stranger Chat
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-8">
            ChatNova lets you start a conversation with a random person
            online. You can use stranger chat without creating an account
            or logging in and have simple text conversations with people
            you do not already know.
          </p>

          <Link
            href="/chat"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
          >
            🚀 Start Stranger Chat
          </Link>
        </section>

        {/* What Is Stranger Chat */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            What Is Stranger Chat?
          </h2>

          <div className="space-y-5 text-gray-300 leading-8">
            <p>
              Stranger chat is a way to start conversations with people
              you do not already know. Instead of selecting someone from
              your existing contacts, you are connected with a random
              person for a new conversation.
            </p>

            <p>
              ChatNova focuses on text-based conversations. You can enter
              the chat without creating a profile and begin talking with
              another available user.
            </p>

            <p>
              If you decide that the conversation is not right for you,
              you can leave the chat and move on to another stranger.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">
            Stranger Chat Features
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                🌍 Random Conversations
              </h3>

              <p className="text-gray-300 leading-7">
                Start conversations with people you do not already know
                instead of choosing someone from your contact list.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                💬 Text-Based Chat
              </h3>

              <p className="text-gray-300 leading-7">
                Have simple text conversations without needing a camera
                or microphone.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                🔒 No Registration
              </h3>

              <p className="text-gray-300 leading-7">
                Start chatting without creating an account or logging in.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                🔄 Next Stranger
              </h3>

              <p className="text-gray-300 leading-7">
                Leave the current conversation and move on to another
                available stranger when you want a new conversation.
              </p>
            </div>

          </div>
        </section>

        {/* How It Works */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            How Stranger Chat Works
          </h2>

          <div className="space-y-6 text-gray-300 leading-8">

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                1. Start Stranger Chat
              </h3>

              <p>
                Click the Start Stranger Chat button to enter the ChatNova
                chat experience.
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
                Once connected, you can exchange text messages and have
                a conversation with the person you are matched with.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                4. Move to Another Stranger
              </h3>

              <p>
                If you want to end the current conversation, disconnect
                and use the Next Stranger option to find another user.
              </p>
            </div>

          </div>
        </section>

        {/* Safety */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Stranger Chat Safety Tips
          </h2>

          <p className="text-gray-300 leading-8 mb-5">
            Conversations with people you do not know can be unpredictable.
            Protect your privacy and avoid sharing information that could
            identify you or give someone access to your accounts or finances.
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-300 leading-7">
            <li>
              Do not share passwords or financial information.
            </li>

            <li>
              Avoid sharing your home address or exact location.
            </li>

            <li>
              Do not share sensitive personal contact information.
            </li>

            <li>
              Leave conversations that make you uncomfortable.
            </li>

            <li>
              Use available reporting or safety features when necessary.
            </li>
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
                What is Stranger Chat?
              </h3>

              <p className="text-gray-300 leading-8">
                Stranger Chat lets you start a conversation with a random
                person online. ChatNova provides this experience through
                anonymous text chat.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Is Stranger Chat free?
              </h3>

              <p className="text-gray-300 leading-8">
                Yes. ChatNova provides free stranger text chat without
                requiring a subscription or signup.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Do I need to sign up?
              </h3>

              <p className="text-gray-300 leading-8">
                No. You can start a stranger chat without creating an
                account or logging in.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                How can I stay safe while using Stranger Chat?
              </h3>

              <p className="text-gray-300 leading-8">
                Avoid sharing passwords, financial information, your home
                address, exact location or other sensitive personal details.
                Leave conversations that make you uncomfortable.
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
                Start a random text conversation with another user.
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
                Chat without creating an account or profile.
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
                Connect with random people through anonymous text chat.
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
                Have quick text conversations with random strangers.
              </p>
            </Link>

          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-20 bg-gray-900 rounded-2xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start a Stranger Chat?
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Start a new anonymous text conversation on ChatNova.
          </p>

          <Link
            href="/chat"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold"
          >
            🚀 Start Stranger Chat
          </Link>
        </section>

      </div>
    </main>
  );
}