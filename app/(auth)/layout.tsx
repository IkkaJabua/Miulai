import Menu from '../components/Menu/Menu';
import IndexPage from '../components/MusicPlayer/IndexPage';
import styles from './layout.module.scss';
import MobileMenu from '../components/Mobilemenu/mobilemenu';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
import Mobilemenu from '../components/Mobilemenu/mobilemenu';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <div className={styles.ordynaryMenu}>
                    <Menu />
                </div>
                <div className={styles.burgerMenu}>
                    <BurgerMenu />
                </div>
                {children}
                <div className={styles.container2}>
                    <IndexPage />
                </div>
                <MobileMenu />
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
    )
}





