"use client";

import { useState } from "react";
import Link from "next/link";

type SafetyPopupProps = {
  onContinue: () => void;
};

export default function SafetyPopup({
  onContinue,
}: SafetyPopupProps) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-5">
      <div className="bg-gray-900 rounded-2xl max-w-xl w-full p-6 text-white border border-gray-700">

        <h2 className="text-3xl font-bold mb-3 text-center">
          💬 ChatNova
        </h2>

        <h3 className="text-xl font-semibold mb-4 text-center">
          Before You Start Chat
        </h3>

        <div className="text-gray-300 space-y-3 text-sm leading-7">

          <p>✅ You must be 18 years or older.</p>

          <p>❌ Sexual or explicit conversations are not allowed.</p>

          <p>❌ Nudity is strictly prohibited.</p>

          <p>❌ Do not share phone numbers, emails or social media accounts.</p>

          <p>⚠️ If you voluntarily share personal information, you do so entirely at your own risk.</p>

          <p>⚠️ Users are solely responsible for the conversations they create and share.</p>

          <p>🚫 Users violating these rules may be suspended.</p>

        </div>

        <div className="mt-6 flex gap-3 items-start">

          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="mt-1"
          />

          <p className="text-sm text-gray-300">
            I am 18 years or older and I agree to the{" "}
            <Link
              href="/terms"
              className="text-blue-400 underline"
            >
              Terms
            </Link>
            ,{" "}
            <Link
              href="/privacy-policy"
              className="text-blue-400 underline"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/community-guidelines"
              className="text-blue-400 underline"
            >
              Community Guidelines
            </Link>.
          </p>

        </div>

        <button
          disabled={!agreed}
          onClick={onContinue}
          className={`w-full mt-6 py-3 rounded-xl font-bold transition ${
            agreed
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-700 cursor-not-allowed"
          }`}
        >
          🚀 Continue to Chat
        </button>

      </div>
    </div>
  );
}