export default function SearchActionSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ChatNova",
    url: "https://chatnova.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://chatnova.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}