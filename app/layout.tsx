import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ThemeToggle } from '@/components/ThemeToggle'
import PageTransition from '@/components/PageTransition'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TC SoCal - Templo Calvario",
  description: "For more than 80 years, TC has been ministering to the needs of the people and now more than ever before God is working through TC to turn hearts back to God, one another, and the City! Our greatest joy is seeing hearts transformed, marriages restored, families healed, addicts set free, and lives made new! Every Sunday at TC is Freedom Sunday because the heart revolution is not a one-time event but a movement and a way of life. Join us and join the heart revolution!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider>
          <ThemeToggle />
          <Navbar />
          <PageTransition>
            <main className="pt-20">{children}</main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
