export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          About ChatNova
        </h1>

        <p className="text-gray-300 leading-8">
          ChatNova is a free anonymous random chat platform where people from
          around the world can connect instantly without creating an account.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Our Mission
        </h2>

        <p className="text-gray-300 leading-8">
          Our mission is to make meeting new people online simple, safe and fun.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why ChatNova?
        </h2>

        <ul className="list-disc ml-6 text-gray-300 space-y-2">
          <li>100% Free</li>
          <li>No Signup</li>
          <li>No Login</li>
          <li>Anonymous Chat</li>
          <li>Fast Matching</li>
        </ul>

      </div>
    </main>
  );
}