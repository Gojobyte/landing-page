import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LaunchPad — Build products faster",
  description: "The all-in-one platform for modern teams. Manage projects, track tasks, and ship products with confidence.",
  openGraph: { title: "LaunchPad", description: "Build products faster than ever", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
