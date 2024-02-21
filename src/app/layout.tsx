import type { Metadata } from "next";
import {
  Barlow,
  Open_Sans,
  Charm,
  Signika_Negative,
  Poppins,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// Fonts
const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barlow",
});

const open_Sans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-open_Sans",
});

const charm = Charm({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-charm",
});

const signika_Negative = Signika_Negative({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signika_Negative",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

// Meta
export const metadata: Metadata = {
  title: "Truly Kerala",
  description: "Truly Kerala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${barlow.variable} ${open_Sans.variable} ${charm.variable} ${signika_Negative.variable} ${poppins.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// https://trulykerala.in/
