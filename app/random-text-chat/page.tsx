import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Random Text Chat - Free Anonymous Text Chat | ChatNova",
  description:
    "Start random text chat with strangers online. Enjoy anonymous text conversations without signup or login and switch to a new stranger anytime on ChatNova.",
  keywords: [
    "Random Text Chat",
    "Random Text Chat Online",
    "Anonymous Text Chat",
    "Free Text Chat",
    "Text Chat with Strangers",
    "Random Stranger Text Chat",
    "Online Text Chat",
    "ChatNova",
  ],
  alternates: {
    canonical: "https://chatnova.in/random-text-chat",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is random text chat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Random text chat lets you start a text conversation with a random person you do not already know. ChatNova provides anonymous text chat without requiring an account.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use random text chat without signing up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ChatNova allows you to start random text conversations without creating an account or logging in.",
      },
    },
    {
      "@type": "Question",
      name: "Does random text chat use a camera or microphone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatNova's random text chat is designed for text-based conversations, so a camera or microphone is not required for the chat experience.",
      },
    },
    {
      "@type": "Question",
      name: "Can I switch to another stranger?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can leave the current conversation and use the Next Stranger option to start a new random text conversation.",
      },
    },
  ],
};

export default function RandomTextChatPage() {
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
            Random Text Chat
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-8">
            Start a random text chat with someone you have never met before.
            ChatNova lets you connect with random people through simple
            anonymous text conversations without requiring signup or login.
          </p>

          <Link
            href="/chat"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
          >
            🚀 Start Random Text Chat
          </Link>
        </section>

        {/* What Is Random Text Chat */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            What Is Random Text Chat?
          </h2>

          <div className="space-y-5 text-gray-300 leading-8">
            <p>
              Random text chat is a way to have a conversation with a person
              you do not already know. Instead of selecting someone from your
              contacts or social network, you can be connected with a random
              stranger.
            </p>

            <p>
              The conversation is text-based, making it a simple option for
              people who want to meet new people without using a camera or
              microphone.
            </p>

            <p>
              With ChatNova, you can start a conversation anonymously and
              decide whether you want to continue the conversation or move on
              to another stranger.
            </p>
          </div>
        </section>

        {/* Why Use Random Text Chat */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">
            Why Use Random Text Chat?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                💬 Text-Based Conversations
              </h3>

              <p className="text-gray-300 leading-7">
                Have conversations through text without needing a camera or
                microphone.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                🔒 No Account Required
              </h3>

              <p className="text-gray-300 leading-7">
                Start chatting without creating an account or building a
                public profile.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                🌍 Meet Random People
              </h3>

              <p className="text-gray-300 leading-7">
                Start conversations with people you would not normally meet
                through your existing social circle.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                🔄 Switch Conversations
              </h3>

              <p className="text-gray-300 leading-7">
                If you want a different conversation, leave the current chat
                and move on to another stranger.
              </p>
            </div>

          </div>
        </section>

        {/* How It Works */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            How Does Random Text Chat Work?
          </h2>

          <div className="space-y-6 text-gray-300 leading-8">

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                1. Start a Chat
              </h3>

              <p>
                Click the Start Random Text Chat button to enter the ChatNova
                chat experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                2. Get Matched
              </h3>

              <p>
                ChatNova looks for another available user for a random
                conversation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                3. Send Text Messages
              </h3>

              <p>
                Once connected, you can exchange messages and have a
                text-based conversation with the other user.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                4. Meet Someone Else
              </h3>

              <p>
                When you want to end the conversation, use the Next Stranger
                option to move on to another random chat.
              </p>
            </div>

          </div>
        </section>

        {/* Privacy and Safety */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Privacy and Safety Tips
          </h2>

          <p className="text-gray-300 leading-8 mb-5">
            Random conversations can be enjoyable, but you should always
            protect your personal information when talking to people online.
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-300 leading-7">
            <li>
              Do not share your home address or exact location.
            </li>

            <li>
              Do not share passwords, financial information or security codes.
            </li>

            <li>
              Avoid sharing private contact information with strangers.
            </li>

            <li>
              Leave a conversation if another user makes you uncomfortable.
            </li>

            <li>
              Use available reporting or safety options when necessary.
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
                What is random text chat?
              </h3>

              <p className="text-gray-300 leading-8">
                Random text chat allows you to have a text conversation with
                a random person you do not already know. ChatNova provides
                this experience without requiring an account.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I use random text chat without signing up?
              </h3>

              <p className="text-gray-300 leading-8">
                Yes. You can start a random text conversation on ChatNova
                without creating an account or logging in.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Does random text chat use a camera or microphone?
              </h3>

              <p className="text-gray-300 leading-8">
                Random text chat is designed around text conversations, so
                you do not need to use a camera or microphone for the text
                chat experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I switch to another stranger?
              </h3>

              <p className="text-gray-300 leading-8">
                Yes. You can leave the current conversation and use the Next
                Stranger option to start a new random text conversation.
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
                Connect with a random stranger through ChatNova.
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
                Start a private conversation without creating an account.
              </p>
            </Link>

            <Link
              href="/online-stranger-chat"
              className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
            >
              <h3 className="font-semibold text-lg">
                Online Stranger Chat
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                Talk to strangers online through anonymous text chat.
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
                Explore simple online text conversations.
              </p>
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 bg-gray-900 rounded-2xl p-10 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Start a Random Text Conversation
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Connect with a random stranger and start chatting through text.
          </p>

          <Link
            href="/chat"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"
          >
            🚀 Start Random Text Chat
          </Link>

        </section>

      </div>
    </main>
  );
}