import type { Metadata } from "next";
import { Inter, Noto_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.scss";
import { RecoilRoot } from "recoil";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import styles from './layout.module.scss';
import IndexPage from "./components/MusicPlayer/IndexPage";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Mobilemenu from "./components/Mobilemenu/MobileMenu";



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
      <body className={`${inter.className} ${PlusJakartaSans.className}`} >
        <div className={styles.container}>

          {/* <span className={styles.menu}>
            <Menu />
          </span> */}

          <div className={styles.ordynaryMenu}>
            <Menu />
          </div>
          <div className={styles.burgerMenu}>
            <BurgerMenu />
          </div>

          {children}
          <div className={styles.container2}>
            {/* <IndexPage /> */}
          </div>
          <Mobilemenu />
        </div>
      </body>
    </html>
  );
}
