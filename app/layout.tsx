import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// ZARA-inspired luxury fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-accent",
  display: "swap",
});

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
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased font-body bg-white text-neutral-900">
        <div className="page-container animate-fade-in">{children}</div>
      </body>
    </html>
  );
}
