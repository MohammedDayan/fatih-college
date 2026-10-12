import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fatih College - To a Brighter Future",
  description:
    "Fatih College is a leading educational institution in Tamale, Ghana, dedicated to academic excellence and character development. We provide a supportive learning environment that nurtures creativity, critical thinking, and leadership.",
  keywords: [
    "Fatih College",
    "education",
    "Tamale",
    "Ghana",
    "school",
    "academic excellence",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
