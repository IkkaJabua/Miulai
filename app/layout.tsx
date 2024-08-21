import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { RecoilRoot } from "recoil";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import styles from './layout.module.scss';
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
        <div className={styles.container}>
          <span className={styles.menu}> 
            {/* აქ სპანში იმიტომ ჩავსვი მენიუ კომპონენტი რომ გამექრო დროებით ტაბლეტის და მობილურის ზომაზე , სანამ ბურგერ მენიუ გამზადდება */}
            <Menu />
          </span>
          {children}
          <div className={styles.container2}>
            <IndexPage />
          </div>
        </div>
      </body>
    </html>
  );
}
