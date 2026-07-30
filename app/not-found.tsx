import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 text-center">

      <h1 className="text-8xl font-bold mb-4">
        404
      </h1>

      <h2 className="text-3xl font-semibold mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-400 max-w-md mb-8">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition"
      >
        ← Back to Home
      </Link>

    </main>
  );
}