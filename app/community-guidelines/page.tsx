export default function CommunityGuidelines() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Community Guidelines
        </h1>

        <p className="text-gray-300 mb-8">
          ChatNova is committed to providing a safe and respectful environment
          for everyone. By using ChatNova, you agree to follow these guidelines.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            🔞 Age Requirement
          </h2>

          <p className="text-gray-300">
            ChatNova is intended only for users who are 18 years of age or older.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            🚫 Prohibited Content
          </h2>

          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>No sexual or explicit conversations.</li>
            <li>No nudity or obscene content.</li>
            <li>No harassment or bullying.</li>
            <li>No hate speech or discrimination.</li>
            <li>No threats or illegal activities.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            🔒 Personal Information
          </h2>

          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Do not share phone numbers.</li>
            <li>Do not share email addresses.</li>
            <li>Do not share social media accounts.</li>
            <li>Do not share passwords, OTPs or financial information.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            ⚠️ Enforcement
          </h2>

          <p className="text-gray-300">
            Users violating these guidelines may be warned, suspended or permanently
            banned from ChatNova. We may cooperate with lawful requests from
            competent authorities where required by applicable law.
          </p>
        </section>

      </div>
    </main>
  );
}