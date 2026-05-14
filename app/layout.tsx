import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domain Snipe Detector – Stop Registrars From Stealing Your Domains",
  description: "Monitor domain searches and get alerted when registrars snipe domains you looked up. Protect your domain research."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b7f2b8a5-3bba-41e0-a94a-8fd30dea5144"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
