import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { RecoilRoot } from "recoil";
import { Mentions } from "antd";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/MenuItem/MenuItem";
import IndexPage from "./components/MusicPlayer/IndexPage";
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
        {children}
      </body>
    </html>
  );
}
