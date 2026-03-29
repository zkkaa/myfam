import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyFam 🏡",
  description: "Website keluarga kami yang penuh cinta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {children}
      </body>
    </html>
  );
}