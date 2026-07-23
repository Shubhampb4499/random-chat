"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-6">
          💬 Anonymous Chat
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Talk to random strangers instantly.
          <br />
          No Login • No Signup • 100% Anonymous
        </p>

        <button
          onClick={() => router.push("/chat")}
          className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-xl font-semibold transition"
        >
          🚀 Start Chat
        </button>

        <div className="mt-10">
          <p className="text-green-400 font-semibold">
            🟢 1,245 Users Online
          </p>
        </div>
      </div>
    </main>
  );
}