"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/chat") {
    return null;
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              💬 ChatNova
            </h2>

            <p className="text-gray-200 leading-7">
              Meet random strangers instantly.
              Safe, anonymous and completely free.
            </p>
          </div>

          {/* SEO Pages */}
          <div>
            <h3 className="font-semibold mb-3 text-white">
              Popular Chats
            </h3>

            <div className="flex flex-col gap-2 text-gray-300">

              <Link href="/random-chat">Random Chat</Link>

              <Link href="/anonymous-chat">Anonymous Chat</Link>

              <Link href="/chat-with-strangers">
                Chat with Strangers
              </Link>

              <Link href="/free-chat">Free Chat</Link>

              <Link href="/online-chat">Online Chat</Link>
              <Link href="/random-chat">Random Chat</Link>

               <Link href="/anonymous-chat">Anonymous Chat</Link>

               <Link href="/chat-with-strangers">Chat with Strangers</Link>

              <Link href="/free-chat">Free Chat</Link>

<Link href="/online-chat">Online Chat</Link>

<Link href="/text-chat">Text Chat</Link>

<Link href="/private-chat">Private Chat</Link>

<Link href="/stranger-chat">Stranger Chat</Link>

<Link href="/omegle-alternative">Omegle Alternative</Link>

<Link href="/chat-sites">Chat Sites</Link>

<Link href="/online-stranger-chat">Online Stranger Chat</Link>

<Link href="/random-text-chat">Random Text Chat</Link>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-gray-300">

              <Link href="/about">About</Link>

              <Link href="/contact">Contact</Link>

              <Link href="/privacy-policy">Privacy Policy</Link>

              <Link href="/terms">Terms</Link>

              <Link href="/community-guidelines">
                Community Guidelines
              </Link>

            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3 text-white">
              Legal
            </h3>

            <p className="text-gray-300 text-sm leading-7">
              ChatNova is intended only for users
              18 years or older.
              <br />
              Users are responsible for their own
              conversations.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-300 text-sm">

          © 2026 ChatNova. All Rights Reserved.

          <br />

          Made with ❤️ in India

        </div>

      </div>
    </footer>
  );
}