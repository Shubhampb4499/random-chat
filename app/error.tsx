"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("ChatNova Error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">

        <h1 className="text-7xl font-bold mb-4">
          😵
        </h1>

        <h2 className="text-3xl font-semibold mb-4">
          Something went wrong
        </h2>

        <p className="text-gray-400 leading-7 mb-8">
          We couldn't load this page properly. Please try again or return
          to ChatNova and continue browsing.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <button
            onClick={() => reset()}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-xl font-semibold transition"
          >
            Go Home
          </Link>

          <Link
            href="/chat"
            className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-xl font-semibold transition"
          >
            Start Chat
          </Link>

        </div>

      </div>
    </main>
  );
}