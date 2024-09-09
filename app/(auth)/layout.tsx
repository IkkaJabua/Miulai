import Menu from '../components/Menu/Menu';
import IndexPage from '../components/MusicPlayer/IndexPage';
import styles from './layout.module.scss';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.container}>
            <Menu />
            {children}
            <div className={styles.container2}>
                <IndexPage />
            </div>
        </div>
    )
}



