import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "@/styles/globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
export const metadata: Metadata = {
  title: "Frontend Mentor | Time tracking dashboard",
  description: "Time tracking dashboard",
  icons: "assets/favicon-32x32.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>{children}</body>
    </html>
  );
}
