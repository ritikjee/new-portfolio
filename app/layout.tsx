import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ritik Jha - Full Stack Web Developer",
  description:
    "Portfolio of Ritik Jha, a full stack web developer specializing in JavaScript/TypeScript, Node.js, and Java.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
