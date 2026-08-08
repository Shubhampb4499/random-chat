import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anonymous Chat - Talk to Strangers Without Signup | ChatNova",
  description:
    "Start anonymous text chat with strangers without signup or login. Connect with new people online while avoiding the need to create a public profile.",
  keywords: [
    "Anonymous Chat",
    "Anonymous Text Chat",
    "Private Chat",
    "Chat Without Signup",
    "Anonymous Stranger Chat",
    "ChatNova",
  ],
  alternates: {
    canonical: "https://chatnova.in/anonymous-chat",
  },
};

export default function AnonymousChatPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Anonymous Chat
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-8 max-w-3xl mx-auto mb-8">
          ChatNova lets you start text conversations with random strangers
          without creating an account or public profile. You can meet new
          people online without providing your name, email address or phone
          number during signup.
        </p>

        <Link
          href="/chat"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg transition"
        >
          🚀 Start Anonymous Chat
        </Link>
      </section>

      {/* What Is Anonymous Chat */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Is Anonymous Chat?
        </h2>

        <div className="space-y-5 text-gray-300 leading-8">
          <p>
            Anonymous chat is an online conversation format where users can
            communicate without creating a public profile or introducing
            themselves through personal account details.
          </p>

          <p>
            This type of conversation can be useful when you want to have a
            casual discussion with someone you do not already know. Instead of
            selecting a specific person, a random matching system can connect
            you with another available participant.
          </p>

          <p>
            ChatNova focuses on text-based conversations and does not require
            account registration before you enter the chat experience.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Anonymous Chat Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              🔐 No Public Profile
            </h3>

            <p className="text-gray-300 leading-7">
              Start a conversation without creating a public user profile.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              ⚡ Quick Connection
            </h3>

            <p className="text-gray-300 leading-7">
              The random matching system can connect you with another
              available user.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              💬 Text Conversations
            </h3>

            <p className="text-gray-300 leading-7">
              Have simple text conversations without creating an account.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              🌎 Meet New People
            </h3>

            <p className="text-gray-300 leading-7">
              Start conversations with people you may not already know.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          How Does Anonymous Chat Work?
        </h2>

        <div className="space-y-6 text-gray-300 leading-8">
          <p>
            Getting started with ChatNova is simple. Click the{" "}
            <strong className="text-white">
              Start Anonymous Chat
            </strong>{" "}
            button to enter the chat experience.
          </p>

          <p>
            You do not need to create an account or public profile before
            starting a conversation. The system looks for another available
            participant for a random text conversation.
          </p>

          <p>
            You can end the conversation whenever you choose by leaving the
            chat.
          </p>
        </div>
      </section>

      {/* Privacy Information */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Privacy and Anonymous Chat
        </h2>

        <div className="space-y-5 text-gray-300 leading-8">
          <p>
            ChatNova does not require your name, email address or phone number
            to create an account before you start chatting.
          </p>

          <p>
            However, not requiring registration does not mean that you should
            share sensitive information with strangers. Avoid sharing
            passwords, financial information, home addresses, private
            photographs or other information that could identify or put you at
            risk.
          </p>

          <p>
            For more information about how the website handles information,
            please read our{" "}
            <Link
              href="/privacy-policy"
              className="text-green-400 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Safety */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Safety Tips for Anonymous Chat
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10">
          Anonymous conversations can involve people you do not know, so
          protect your personal information and leave conversations that make
          you uncomfortable.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <ul className="space-y-4 text-gray-300 leading-7">
              <li>
                • Never share passwords, banking details or financial
                information.
              </li>

              <li>
                • Avoid sharing your home address or exact location.
              </li>

              <li>
                • Do not share sensitive personal information with strangers.
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <ul className="space-y-4 text-gray-300 leading-7">
              <li>
                • End a conversation if another user makes you uncomfortable.
              </li>

              <li>
                • Treat other users respectfully.
              </li>

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
              Is anonymous chat really anonymous?
            </h3>

            <p className="text-gray-300 leading-8">
              ChatNova does not require you to create an account or provide
              your name, email address or phone number before starting a chat.
              You should still avoid sharing personal or sensitive information
              with strangers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is ChatNova free?
            </h3>

            <p className="text-gray-300 leading-8">
              Yes. ChatNova is free to use and does not require a subscription
              to start an anonymous text conversation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Can I leave the conversation anytime?
            </h3>

            <p className="text-gray-300 leading-8">
              Yes. You can leave a conversation whenever you want.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is anonymous chat safe?
            </h3>

            <p className="text-gray-300 leading-8">
              No online conversation can be guaranteed to be completely safe.
              Protect your personal information, avoid sharing sensitive
              details and leave conversations that make you uncomfortable.
            </p>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Explore More Chat Options
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/random-chat"
            className="bg-gray-900 hover:bg-gray-800 p-6 rounded-xl border border-gray-800 transition"
          >
            <h3 className="font-semibold text-lg">
              Random Chat
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Meet random strangers through text chat.
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
              Explore conversations with new people online.
            </p>
          </Link>

          <Link
            href="/private-chat"
            className="bg-gray-900 hover:bg-gray-800 p-6 rounded-xl border border-gray-800 transition"
          >
            <h3 className="font-semibold text-lg">
              Private Chat
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Learn more about private online conversations.
            </p>
          </Link>

          <Link
            href="/text-chat"
            className="bg-gray-900 hover:bg-gray-800 p-6 rounded-xl border border-gray-800 transition"
          >
            <h3 className="font-semibold text-lg">
              Text Chat
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Start simple online text conversations.
            </p>
          </Link>
        </div>
      </section>

      {/* Trust Links */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <p className="text-gray-400 leading-7">
          Please review our{" "}
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