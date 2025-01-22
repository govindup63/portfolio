import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Hyperspeed from "@/components/Hyperspeed/Hyperspeed";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Govind",
  description: "Govind's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed inset-0 z-[1]">
          <Hyperspeed />
        </div>
        <main className="relative min-h-screen">
          {children}
        </main>
        <footer className="absolute bottom-0 w-full py-4 text-center text-foreground/60 text-sm pointer-events-none">
          © {new Date().getFullYear()} All rights reserved. Govind Pandey
        </footer>
      </body>
    </html>
  );
}
