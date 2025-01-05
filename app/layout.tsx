import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ThemeToggle } from '@/components/utils/ThemeToggle'
import Footer from '@/components/utils/Footer';

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
  icons: {
    icon: '/about/heart-revolution.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>

        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground mt-[-115px]`}>

          < ThemeProvider >
            <ThemeToggle />
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
