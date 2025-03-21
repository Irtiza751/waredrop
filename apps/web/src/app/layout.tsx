import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";
// styles
import "./globals.css";
import "@waredrop/ui/index.css";
import { ReactQueryProvider } from "@/providers/query-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { UserProvider } from "@/providers/user-provider";

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
        className={`${font.className} min-h-screen antialiased text-gray-900`}
      >
        <ReactQueryProvider>
          <AuthProvider>
            <UserProvider>{children}</UserProvider>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
