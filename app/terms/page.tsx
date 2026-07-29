export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

        <p className="text-gray-300 mb-6">
          Last Updated: July 2026
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Acceptance of Terms
        </h2>

        <p className="text-gray-300 leading-8">
          By using ChatNova, you agree to these Terms & Conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Anonymous Chat
        </h2>

        <p className="text-gray-300 leading-8">
          ChatNova allows users to chat anonymously. Users are responsible for
          their own behavior and messages.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Prohibited Activities
        </h2>

        <ul className="list-disc ml-6 text-gray-300 space-y-2">
          <li>Harassment or abuse</li>
          <li>Illegal content</li>
          <li>Spam</li>
          <li>Hate speech</li>
          <li>Sharing personal information</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Disclaimer
        </h2>

        <p className="text-gray-300 leading-8">
          ChatNova provides its service "as is" without warranties.
        </p>

      </div>
    </main>
  );
}