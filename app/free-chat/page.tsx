import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Chat - Chat Online with Strangers for Free | ChatNova",
  description:
    "Start free online text chat with strangers on ChatNova. No signup or login is required to enter the chat experience. Meet new people through random conversations.",
  keywords: [
    "Free Chat",
    "Free Online Chat",
    "Chat Free",
    "Free Stranger Chat",
    "Random Free Chat",
    "ChatNova",
  ],
  alternates: {
    canonical: "https://chatnova.in/free-chat",
  },
};

export default function FreeChatPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Free Chat with Strangers
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-8 max-w-3xl mx-auto mb-8">
          ChatNova provides a simple way to start online text conversations
          with strangers without creating an account or paying for a
          subscription. Enter the chat and discover new conversations through
          random matching.
        </p>

        <Link
          href="/chat"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg transition"
        >
          🚀 Start Free Chat
        </Link>
      </section>

      {/* What Is Free Chat */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Is Free Online Chat?
        </h2>

        <div className="space-y-5 text-gray-300 leading-8">
          <p>
            Free online chat allows people to communicate through the internet
            without paying for access to the basic conversation service.
          </p>

          <p>
            On ChatNova, the experience is focused on random text
            conversations. You can enter the chat without creating a
            traditional user account and talk with another available
            participant.
          </p>

          <p>
            The service is designed for casual conversations and meeting new
            people online.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Free Chat Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              💸 No Subscription
            </h3>

            <p className="text-gray-300 leading-7">
              You do not need a paid subscription to enter the ChatNova chat
              experience.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              🚪 Easy Access
            </h3>

            <p className="text-gray-300 leading-7">
              Enter the chat without going through a traditional registration
              process.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              💬 Text Chat
            </h3>

            <p className="text-gray-300 leading-7">
              Have simple conversations through text with another participant.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              🌍 Meet New People
            </h3>

            <p className="text-gray-300 leading-7">
              Random matching gives you an opportunity to start conversations
              with people you do not already know.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          How Does Free Chat Work?
        </h2>

        <div className="space-y-6 text-gray-300 leading-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              1. Open ChatNova
            </h3>

            <p>
              Visit ChatNova and choose the option to start a random chat.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              2. Enter the Chat
            </h3>

            <p>
              Click the start button to enter the random matching system.
              Creating an account is not required.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              3. Start Talking
            </h3>

            <p>
              When another available participant is matched with you, you can
              begin a text conversation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              4. End the Conversation
            </h3>

            <p>
              You can leave the conversation whenever you decide to stop
              chatting.
            </p>
          </div>
        </div>
      </section>

      {/* Devices */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          ChatNova on Different Devices
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              💻 Desktop
            </h3>

            <p className="text-gray-300 leading-7">
              Use a modern desktop browser to access ChatNova and start a text
              conversation.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              📱 Mobile
            </h3>

            <p className="text-gray-300 leading-7">
              ChatNova can be accessed through a compatible mobile browser.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              📲 Tablet
            </h3>

            <p className="text-gray-300 leading-7">
              You can also access the chat experience from a tablet browser.
            </p>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Use Free Chat Responsibly
        </h2>

        <div className="space-y-5 text-gray-300 leading-8">
          <p>
            Free access does not mean that you should share personal
            information freely. When talking with someone you do not know,
            protect information that could identify you.
          </p>

          <ul className="space-y-3">
            <li>• Do not share passwords or financial information.</li>
            <li>• Avoid sharing your home address or exact location.</li>
            <li>• Do not send sensitive personal information to strangers.</li>
            <li>• Leave conversations that make you uncomfortable.</li>
          </ul>

          <p>
            For more information, read our{" "}
            <Link
              href="/community-guidelines"
              className="text-green-400 hover:underline"
            >
              Community Guidelines
            </Link>
            .
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
              Is ChatNova free to use?
            </h3>

            <p className="text-gray-300 leading-8">
              ChatNova does not require a paid subscription to enter the basic
              chat experience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Do I need to register?
            </h3>

            <p className="text-gray-300 leading-8">
              No. You can enter the ChatNova chat experience without creating
              an account.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Can I use ChatNova on mobile?
            </h3>

            <p className="text-gray-300 leading-8">
              Yes. ChatNova can be accessed through a compatible mobile
              browser.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is free chat anonymous?
            </h3>

            <p className="text-gray-300 leading-8">
              ChatNova does not require you to create a public profile before
              entering the chat. You should still avoid sharing personal or
              sensitive information with strangers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Can I leave a conversation?
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
              Explore anonymous online conversations.
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
              Meet new people through random chat.
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
              Start an online text conversation.
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