import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zekwise | AI Document & Compliance Workspace",
  description:
    "AI Document & Compliance Workspace for document-heavy small businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
