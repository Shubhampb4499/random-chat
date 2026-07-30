"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 text-center">

      <h1 className="text-7xl font-bold mb-4">
        😵
      </h1>

      <h2 className="text-3xl font-semibold mb-4">
        Something went wrong
      </h2>

      <p className="text-gray-400 max-w-md mb-8">
        An unexpected error occurred. Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition"
      >
        Try Again
      </button>

    </main>
  );
}