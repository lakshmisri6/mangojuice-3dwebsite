import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "Nano Banana | Future of Freshness",
  description: "Premium Scrollytelling e-commerce juice brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans no-scrollbar antialiased selection:bg-orange-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
