import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlos Junior | Portfolio",
  description:
    "Portfolio of Carlos Junior, a Frontend Developer, Game Developer, and Designer.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col`}
      >
        <Header />
        {/* allow the page to scroll; keep layout centering for pages that need it */}
        <main className="flex-1 overflow-auto flex items-center justify-center px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
