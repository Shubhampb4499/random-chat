"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="ChatNova Logo"
            width={42}
            height={42}
            priority
          />

          <span className="text-3xl font-bold text-white">
            ChatNova
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-300 font-medium">

          <Link
            href="/"
            className="hover:text-cyan-400 transition duration-200"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-cyan-400 transition duration-200"
          >
            About
          </Link>

          <Link
            href="/community-guidelines"
            className="hover:text-cyan-400 transition duration-200"
          >
            Safety
          </Link>

          <Link
            href="/contact"
            className="hover:text-cyan-400 transition duration-200"
          >
            Contact
          </Link>

        </nav>

      </div>
    </header>
  );
}