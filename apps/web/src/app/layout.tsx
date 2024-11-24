import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";
// styles
import "./globals.css";
import "@waredrop/ui/index.css";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waredrop",
  description: "Step into the World of style with Waredrop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-slate-50 min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
