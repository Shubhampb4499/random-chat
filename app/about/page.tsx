import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ChatNova | Anonymous Random Chat Platform",
  description:
    "Learn about ChatNova, a free anonymous random chat platform that helps people connect and have text conversations without creating an account.",
  keywords: [
    "About ChatNova",
    "ChatNova",
    "Anonymous Chat Platform",
    "Random Chat Platform",
    "Free Random Chat",
    "Anonymous Random Chat",
  ],
  alternates: {
    canonical: "https://chatnova.in/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold mb-8">
          About ChatNova
        </h1>

        <p className="text-gray-300 leading-8">
          ChatNova is a free anonymous random chat platform where people
          from around the world can connect and have text conversations
          without creating an account.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Our Mission
        </h2>

        <p className="text-gray-300 leading-8">
          Our mission is to make meeting new people online simple,
          accessible and enjoyable while encouraging users to protect
          their privacy and personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why ChatNova?
        </h2>

        <ul className="list-disc ml-6 text-gray-300 space-y-2">
          <li>Free anonymous text chat</li>
          <li>No signup required</li>
          <li>No login required</li>
          <li>Random stranger matching</li>
          <li>Simple text-based conversations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Privacy and Safety
        </h2>

        <p className="text-gray-300 leading-8">
          ChatNova is designed for anonymous conversations, but users
          should always take care when interacting with strangers online.
          Avoid sharing passwords, financial information, home addresses,
          phone numbers or other sensitive personal details.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Learn More
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">

          <Link
            href="/privacy-policy"
            className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
          >
            <h3 className="font-semibold text-lg">
              Privacy Policy
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              Learn how ChatNova handles privacy and user information.
            </p>
          </Link>

          <Link
            href="/community-guidelines"
            className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
          >
            <h3 className="font-semibold text-lg">
              Community Guidelines
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              Read the guidelines for respectful and responsible chatting.
            </p>
          </Link>

          <Link
            href="/contact"
            className="bg-gray-900 hover:bg-gray-800 p-5 rounded-xl"
          >
            <h3 className="font-semibold text-lg">
              Contact ChatNova
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              Get in touch with the ChatNova team.
            </p>
          </Link>

          <Link
            href="/chat"
            className="bg-blue-600 hover:bg-blue-700 p-5 rounded-xl"
          >
            <h3 className="font-semibold text-lg">
              Start Anonymous Chat
            </h3>
            <p className="text-gray-200 mt-2 text-sm">
              Start a random text conversation with another user.
            </p>
          </Link>

        </div>

      </div>
    </main>
  );
}