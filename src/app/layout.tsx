import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BottomDock } from "@/components/BottomDock";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import React from "react";
import "./globals.css";
import { GridBackground } from "@/components/GridBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhinav Shaw",
  description: "A showcase of my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <main className="flex flex-col items-center justify-top p-4 text-white min-h-screen">
          <GridBackground />
          <div className="mt-4 md:max-w-4xl max-w-xl text-left text-md leading-relaxed text-gray-300 ">
            <ScrollProgress />
            {children}
          </div>
          <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-gradient-to-t from-gray-800 to-transparent p-4">
            <BottomDock />
          </div>
        </main>
      </body>
    </html>
  );
}
