import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { RecoilRoot } from "recoil";
import RecoilWrapper from "./components/RecoilWrapper/RecoilWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miulai",
  description: "Music App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilWrapper>
          {children}
        </RecoilWrapper>
        </body>
    </html>
  );
}
