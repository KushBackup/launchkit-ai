import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaunchKit AI - Build Your Business in 2 Weeks",
  description: "AI agent that autonomously builds your complete business—from market research to deployed product to closed customers. No coding required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
