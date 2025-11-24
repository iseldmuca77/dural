import type { Metadata } from "next";
import LocalFont from 'next/font/local';
import "./globals.css";

const marlinSans = LocalFont({
  src: [
    {
      path: '../public/font/marlin-sans.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-marlin-sans',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "ReBuild Architecture",
  description: "From Vision to Reality – Marlin Sans Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

        className={`${marlinSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}