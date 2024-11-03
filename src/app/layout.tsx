import type { Metadata } from "next";
import "./globals.css";
import { PublicProviders } from "@/providers/public";

export const metadata: Metadata = {
  title: "Todo Next App",
  description: "Creating using next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased`}>
        <PublicProviders>{children}</PublicProviders>
      </body>
    </html>
  );
}
