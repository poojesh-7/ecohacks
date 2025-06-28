import type { Metadata } from "next";
import { Josefin_Sans } from 'next/font/google';

import "./globals.css";
import Navbar from "@/components/Navbar";
const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // choose weights you need
  display: 'swap',
});

export const metadata: Metadata = {
  title: "EcoHackTips – Sustainable Hacks for Everyday Waste",
  description:
    "Explore clever eco-hacks for reducing waste at home. Discover trending tips and regular community-submitted ideas. Learn how to post your own eco hack easily.",
  keywords: [
    "eco hacks",
    "sustainability",
    "reduce waste",
    "trending eco tips",
    "next.js project",
    "green lifehacks",
    "post your hack",
    "environment-friendly tips",
    "recycling ideas",
  ],
  openGraph: {
    title: "EcoHackTips – Trending & Everyday Hacks to Reduce Waste",
    description:
      "Browse community-curated sustainability hacks, from trending ideas to everyday waste solutions. Share your own tip to inspire others.",
    url: "https://ecohacktips.netlify.app",
    siteName: "EcoHackTips",
    images: [
      {
        url: "https://i.ibb.co/mCLLpGPy/ecohacktips.png", 
        width: 1200,
        height: 630,
        alt: "EcoHackTips - Sustainable Living Hacks",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoHackTips – Share & Discover Eco-Friendly Life Hacks",
    description:
      "Get inspired by trending and everyday sustainability hacks. Post your own tip and help build a greener future.",
    images: ["https://i.ibb.co/mCLLpGPy/ecohacktips.png"], 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <Navbar />
        <section className="hero_section">
          {children}
        </section>
        <footer>
            <p>Copyright © 2025 EcoHackTips. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
