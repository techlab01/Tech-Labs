import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tech labs",
  description: "Transforming Education with Personalized Solutions.",
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
        content="ZEBMRlkTn4uyrcV8C_QR_78HZDmHMOR9-Q7OCgTPgk0"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
