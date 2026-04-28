import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SAASK Templates LPs",
    template: "%s | SAASK Templates LPs",
  },
  description:
    "Biblioteca e showcase de templates de landing pages para SaaS com Next.js, Tailwind, TypeScript e sistema hibrido de secoes reutilizaveis.",
  icons: {
    icon: [
      {
        url: "/saask-favicon-preto.jpeg",
        type: "image/jpeg",
      },
    ],
    shortcut: [
      {
        url: "/saask-favicon-preto.jpeg",
        type: "image/jpeg",
      },
    ],
    apple: [
      {
        url: "/saask-favicon-preto.jpeg",
        type: "image/jpeg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
