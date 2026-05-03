import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt A/B Tester – Split Test AI Prompts & Track Performance",
  description: "Run split tests on AI prompts, track success rates, and automatically promote winning variants. Built for AI product managers and ML engineers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e4c6bbc5-29a5-485b-b977-74819361d78c"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
