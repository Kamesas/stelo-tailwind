import type { Metadata } from "next";
import { DM_Sans, Roboto } from "next/font/google";
import "./globals.css";

// TODO: Replace DM Sans with Pastiche Grotesque (next/font/local) when font files are available
const pasticheGrotesque = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-pastiche-grotesque",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Stelo",
  description: "Stelo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pasticheGrotesque.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
