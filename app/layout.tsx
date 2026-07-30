import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chatnova.in"),
  manifest: "/manifest.json",

  title: {
    default: "ChatNova - Free Random Chat with Strangers",
    template: "%s | ChatNova",
  },

  description:
    "ChatNova is a free anonymous random chat platform. Meet strangers online instantly without signup. Safe, fast and completely free random chat.",
    applicationName: "ChatNova",

  keywords: [
    "Random Chat",
    "Anonymous Chat",
    "Stranger Chat",
    "Chat with Strangers",
    "Free Chat",
    "Online Chat",
    "Random Video Chat",
    "Talk to Strangers",
    "ChatNova",
  ],

  verification: {
    google: "FL5HOzaDnzV3YXbWnZpzAUt_m-gUwiqFMen78I3HQ6s",
  },

  openGraph: {
    title: "ChatNova - Free Random Chat with Strangers",
    description:
      "Meet random strangers instantly. No Signup. No Login. 100% Free.",
    url: "https://chatnova.in",
    siteName: "ChatNova",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ChatNova - Free Random Chat with Strangers",
    description:
      "Meet random strangers instantly. No Signup. No Login. 100% Free.",
  },

appleWebApp: {
  capable: true,
  statusBarStyle: "default",
  title: "ChatNova",
},
  robots: {
    index: true,
    follow: true,
  },
  icons: {
  icon: "/favicon.ico",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
  id="schema-org"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ChatNova",
      url: "https://chatnova.in",
      description:
        "ChatNova is a free anonymous random chat platform where you can instantly connect with strangers without signup.",
      inLanguage: "en",
      publisher: {
        "@type": "Organization",
        name: "ChatNova",
      },
    }),
  }}
/>

  <Header />

  {children}

  <Footer />

</body>

      <GoogleAnalytics gaId="G-JTQNTF01T7" />
    </html>
  );
}