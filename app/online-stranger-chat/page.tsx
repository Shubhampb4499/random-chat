import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Stranger Chat - Talk to Strangers Online | ChatNova",
  description:
    "Talk to strangers online through free anonymous text chat. Meet random people, start conversations and switch to a new stranger anytime on ChatNova.",
  keywords: [
    "Online Stranger Chat",
    "Stranger Chat Online",
    "Talk to Strangers Online",
    "Chat with Strangers Online",
    "Anonymous Stranger Chat",
    "Random Stranger Chat",
    "Free Stranger Chat",
    "ChatNova",
  ],
  alternates: {
    canonical: "https://chatnova.in/online-stranger-chat",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is online stranger chat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online stranger chat allows you to start a conversation with a random person you do not already know. ChatNova provides anonymous text chat without requiring an account.",
      },
    },
    {
      "@type": "Question",
      name: "Can I chat with strangers without signing up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ChatNova allows you to start an online stranger chat without creating an account or logging in.",
      },
    },
    {
      "@type": "Question",
      name: "Can I change the stranger I am chatting with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can leave the current conversation and use the Next Stranger option to start a new conversation.",
      },
    },
    {
      "@type": "Question",
      name: "How can I stay safe while chatting with strangers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Avoid sharing sensitive personal information such as your address, phone number, passwords or financial details. Leave and report conversations that make you uncomfortable.",
      },
    },
  ],
};

export default function OnlineStrangerChatPage() {
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
            Online Stranger Chat
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-8">
            Chat with strangers online and start conversations with people
            you have never met before. ChatNova lets you connect with random
            users through anonymous text chat without creating an account or
            sharing personal information.
          </p>

          <Link
            href="/chat"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
          >
            🚀 Start Stranger Chat
          </Link>
        </section>

        {/* What is Online Stranger Chat */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            What Is Online Stranger Chat?
          </h2>

          <div className="space-y-5 text-gray-300 leading-8">
            <p>
              Online stranger chat is a way to have conversations with people
              you do not already know. Instead of choosing someone from your
              existing contacts, you are connected with a random person for
              a new conversation.
            </p>

            <p>
              ChatNova focuses on simple text conversations. You can start a
              conversation anonymously, talk about common interests or simply
              have a casual conversation with someone new.
            </p>

            <p>
              If the conversation is not right for you, you can leave and
              move on to another stranger.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">
            What You Can Do on ChatNova
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                🌍 Meet Someone New
              </h3>

              <p className="text-gray-300 leading-7">
                Start a conversation with a random person instead of chatting
                only with people you already know.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                💬 Text Conversations
              </h3>

              <p className="text-gray-300 leading-7">
                Enjoy simple text-based conversations without unnecessary
                distractions.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                🔒 No Profile Required
              </h3>

              <p className="text-gray-300 leading-7">
                You can begin a conversation without creating a public
                profile or providing personal details.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                🔄 Next Stranger
              </h3>

              <p className="text-gray-300 leading-7">
                If you want to end the current conversation, move on and
                connect with another available stranger.
              </p>
            </div>

          </div>
        </section>

        {/* How It Works */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            How Does Stranger Chat Work?
          </h2>

          <div className="space-y-6 text-gray-300 leading-8">

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                1. Start Chatting
              </h3>

              <p>
                Click the Start Stranger Chat button to enter the ChatNova
                chat experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                2. Get Connected
              </h3>

              <p>
                ChatNova looks for another available user so you can begin a
                new conversation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                3. Start the Conversation
              </h3>

              <p>
                Once connected, you can exchange text messages and get to
                know the person on the other side of the conversation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                4. Meet Another Stranger
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
            Stay Safe When Chatting With Strangers
          </h2>

          <p className="text-gray-300 leading-8 mb-5">
            Meeting new people online can be interesting, but it is important
            to protect your privacy. Do not share information that could
            identify or financially expose you.
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-300 leading-7">
            <li>Do not share your home address or exact location.</li>
            <li>Do not share passwords or financial information.</li>
            <li>Avoid sharing private contact details with strangers.</li>
            <li>Leave conversations that make you uncomfortable.</li>
            <li>Use available reporting and safety options when necessary.</li>
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
                What is online stranger chat?
              </h3>

              <p className="text-gray-300 leading-8">
                Online stranger chat lets you start a conversation with a
                random person you do not already know. ChatNova provides this
                experience through anonymous text chat.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I chat with strangers without signing up?
              </h3>

              <p className="text-gray-300 leading-8">
                Yes. ChatNova allows you to start chatting without creating an
                account or logging in.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I change the stranger I am chatting with?
              </h3>

              <p className="text-gray-300 leading-8">
                Yes. You can leave the current conversation and use the Next
                Stranger option to start a new conversation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                How can I stay safe while chatting with strangers?
              </h3>

              <p className="text-gray-300 leading-8">
                Avoid sharing sensitive personal information such as your
                address, phone number, passwords or financial details. If a
                conversation becomes inappropriate, leave it and use the
                available safety or reporting options.
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
              href="/chat-with-strangers"
              className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
            >
              <h3 className="font-semibold text-lg">
                Chat with Strangers
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                Start anonymous conversations with random people online.
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
                Chat privately without creating an account.
              </p>
            </Link>

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
              href="/online-chat"
              className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
            >
              <h3 className="font-semibold text-lg">
                Online Chat
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                Start a free online conversation instantly.
              </p>
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 bg-gray-900 rounded-2xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Talk to a Stranger?
          </h2>

          <p className="text-gray-300 mb-8">
            Start a new anonymous text conversation on ChatNova.
          </p>

          <Link
            href="/chat"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"
          >
            🚀 Start Stranger Chat
          </Link>
        </section>

      </div>
    </main>
  );
}