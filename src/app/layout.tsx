import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const font1 = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const font2 = Roboto_Slab({
  variable: "--font-robo-slab",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${font1.variable} ${font2.variable} antialiased lg:overflow-hidden lg:h-screen lg:flex lg:flex-col justify-center items-center`}
      >
        {/* Navbar - Fixed at the top */}
        <div className="h-20">
          <Nav />
        </div>

        {/* Main Content - Fixed in place */}
        <div className="lg:flex-1 lg:flex justify-center items-center max-w-screen-2xl ">
          
          {children}
        </div>
      </body>
    </html>
  );
}
