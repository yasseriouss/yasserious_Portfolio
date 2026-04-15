import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Yasser Sallam | CNC Production Engineer",
  description:
    "Bridging the gap between precision engineering, digital innovation, and creative solutions. Over 7 years of expertise in advanced furniture manufacturing.",
  keywords: [
    "CNC",
    "Production Engineer",
    "WoodWOP",
    "AutoCAD",
    "Manufacturing",
    "Egypt",
  ],
  authors: [{ name: "Yasser Sallam" }],
  openGraph: {
    title: "Yasser Sallam | CNC Production Engineer",
    description:
      "Bridging the gap between precision engineering, digital innovation, and creative solutions.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[var(--background)]">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
