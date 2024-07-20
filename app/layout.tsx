import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tech labs",
  description: "tech labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="x-nKKDa2BWzE7oqDSujJnZIUakcftuv10XacrspVaH0"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
