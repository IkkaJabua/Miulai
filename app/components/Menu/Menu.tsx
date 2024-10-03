'use client';
import Image from 'next/image'
import styles from './Menu.module.scss'
import MenuItem from '../MenuItem/MenuItem'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Menu = () => {

    const router = useRouter()

    return (
        <div className={styles.container}>
            <div className={styles.container_menu}>
                <div className={styles.cursorLogo} onClick={() => router.push('/')}>
                    <img src={'./icon/miulailogo.svg'} alt='logo' width={98} height={83} />
                </div>
                <MenuItem />
            </div>
        </div>
    )
}

Menu.displayName = 'Menu';

export default Menu;
