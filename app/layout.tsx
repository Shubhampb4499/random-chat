import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chatnova.in"),

  title: {
    default: "ChatNova - Free Random Chat with Strangers",
    template: "%s | ChatNova",
  },

  description:
    "ChatNova is a free anonymous random chat platform. Meet strangers online instantly without signup. Safe, fast and completely free random chat.",

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

  robots: {
    index: true,
    follow: true,
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
        {children}
      </body>

      <GoogleAnalytics gaId="G-JTQNTF01T7" />
    </html>
  );
}