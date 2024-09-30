import type { Metadata } from "next";
import { Inter, Noto_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.scss";
import { RecoilRoot } from "recoil";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import styles from './layout.module.scss';
import IndexPage from "./components/MusicPlayer/IndexPage";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Mobilemenu from "./components/Mobilemenu/mobilemenu";
import RecoilWrapper from "./components/RecoilWrapper/RecoilWrapper";



const inter = Inter({ subsets: ["latin"] });
const PlusJakartaSans = Plus_Jakarta_Sans({
  weight: [],
  subsets: ['latin'],
  variable: '--font-Plus-Jakarta-sans'
})


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
      <RecoilWrapper>
        <body className={`${inter.className} ${PlusJakartaSans.className}`} >
          {children}
        </body>
      </RecoilWrapper>
    </html>
  );
}
