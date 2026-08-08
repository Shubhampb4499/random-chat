import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chat with Strangers Online - Free Text Chat | ChatNova",
  description:
    "Chat with strangers online through free random text conversations. No signup or login required. Meet new people and start conversations on ChatNova.",
  keywords: [
    "Chat with Strangers",
    "Talk to Strangers",
    "Stranger Chat",
    "Online Stranger Chat",
    "Free Stranger Chat",
    "ChatNova",
  ],
  alternates: {
    canonical: "https://chatnova.in/chat-with-strangers",
  },
};

export default function ChatWithStrangersPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Chat with Strangers Online
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-8 max-w-3xl mx-auto mb-8">
          ChatNova lets you start text conversations with people you do not
          already know. No signup or login is required to enter the chat, so
          you can start a random conversation without creating a public
          profile.
        </p>

        <Link
          href="/chat"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg transition"
        >
          🚀 Chat with Strangers Now
        </Link>
      </section>

      {/* What Does Chat with Strangers Mean */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Does Chat with Strangers Mean?
        </h2>

        <div className="space-y-5 text-gray-300 leading-8">
          <p>
            Chatting with strangers means having an online conversation with
            someone you do not personally know. Random chat platforms make
            these conversations possible by connecting available users.
          </p>

          <p>
            These conversations can be casual and spontaneous. You might
            discuss hobbies, entertainment, travel, everyday experiences or
            other general topics.
          </p>

          <p>
            ChatNova focuses on simple text conversations, making it possible
            to meet new people without the need to create a traditional
            social-media profile.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Chat with Strangers on ChatNova
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              🌍 Meet New People
            </h3>

            <p className="text-gray-300 leading-7">
              Start conversations with people you may not have met before.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              ⚡ Random Matching
            </h3>

            <p className="text-gray-300 leading-7">
              The chat system can connect you with another available user.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              💬 Text Conversations
            </h3>

            <p className="text-gray-300 leading-7">
              Have straightforward conversations through text without video
              or voice requirements.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              🆓 Free to Start
            </h3>

            <p className="text-gray-300 leading-7">
              Enter the ChatNova chat experience without creating a paid
              subscription.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          How to Chat with Strangers
        </h2>

        <div className="space-y-6 text-gray-300 leading-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              1. Open ChatNova
            </h3>

            <p>
              Visit ChatNova and select the option to start a random chat.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              2. Enter the Chat
            </h3>

            <p>
              Click the start button to enter the random matching system.
              Registration is not required.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              3. Start a Conversation
            </h3>

            <p>
              Once another available participant is found, you can begin a
              text conversation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              4. Leave When You Want
            </h3>

            <p>
              If you no longer want to continue a conversation, you can leave
              the chat.
            </p>
          </div>
        </div>
      </section>

      {/* Conversation Ideas */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          What Can You Talk About?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              🎮 Hobbies
            </h3>

            <p className="text-gray-300 leading-7">
              Talk about games, sports, books, music or other hobbies you
              enjoy.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              ✈️ Travel
            </h3>

            <p className="text-gray-300 leading-7">
              Discuss places you have visited or destinations you would like
              to explore.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              🎵 Entertainment
            </h3>

            <p className="text-gray-300 leading-7">
              Share opinions about movies, shows, music and other
              entertainment.
            </p>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Safety When Chatting with Strangers
        </h2>

        <div className="space-y-5 text-gray-300 leading-8">
          <p>
            Remember that the person on the other side of a random chat is
            someone you may not know. Keep conversations respectful and avoid
            sharing information that could identify you.
          </p>

          <ul className="space-y-3">
            <li>
              • Do not share passwords or financial information.
            </li>

            <li>
              • Avoid sharing your home address or exact location.
            </li>

            <li>
              • Do not send sensitive personal information to strangers.
            </li>

            <li>
              • Leave a conversation if you feel uncomfortable.
            </li>
          </ul>

          <p>
            You can also review the{" "}
            <Link
              href="/community-guidelines"
              className="text-green-400 hover:underline"
            >
              Community Guidelines
            </Link>{" "}
            for more information.
          </p>
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
              Can I chat with strangers without signing up?
            </h3>

            <p className="text-gray-300 leading-8">
              Yes. ChatNova does not require you to create an account before
              entering the random chat experience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is ChatNova free to use?
            </h3>

            <p className="text-gray-300 leading-8">
              ChatNova is available without requiring a paid subscription to
              start a text conversation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              What type of chat does ChatNova offer?
            </h3>

            <p className="text-gray-300 leading-8">
              ChatNova currently focuses on random text conversations between
              users.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Can I leave a stranger chat?
            </h3>

            <p className="text-gray-300 leading-8">
              Yes. You can leave the conversation whenever you choose.
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
              Start a random text conversation.
            </p>
          </Link>

          <Link
            href="/anonymous-chat"
            className="bg-gray-900 hover:bg-gray-800 p-6 rounded-xl border border-gray-800 transition"
          >
            <h3 className="font-semibold text-lg">
              Anonymous Chat
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Learn about anonymous online conversations.
            </p>
          </Link>

          <Link
            href="/online-stranger-chat"
            className="bg-gray-900 hover:bg-gray-800 p-6 rounded-xl border border-gray-800 transition"
          >
            <h3 className="font-semibold text-lg">
              Online Stranger Chat
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Explore online conversations with new people.
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
              Start a simple text conversation.
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