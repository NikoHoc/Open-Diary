import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/global/Navbar";
import { ClerkProvider } from "@clerk/nextjs"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Diary",
  description: "Open Diary opensoure project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </ClerkProvider>
      
    </html>
  );
}
