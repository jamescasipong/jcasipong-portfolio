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
      <head>
        <link rel="icon" href="/icon.svg" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="James Casipong" />
        <meta
          property="og:title"
          content="James Casipong - Full Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of James Casipong, a skilled full stack developer showcasing projects, skills, and professional experience."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://jcasipong.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="James Casipong - Full Stack Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore the portfolio of James Casipong, a skilled full stack developer showcasing projects, skills, and professional experience."
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        <meta property="og:site_name" content="James Casipong Portfolio" />
        <meta
          property="og:profile"
          content="https://www.linkedin.com/in/jamescasipong"
        />
        <meta
          property="og:profile"
          content="https://github.com/jamescasipong"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
