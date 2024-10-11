import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Casipong",
  description: "A showcase of my work and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/icon.svg" sizes="any" /></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
