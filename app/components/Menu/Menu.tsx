'use client';
import Image from 'next/image'
import styles from './Menu.module.scss'
import MenuItem from '../MenuItem/MenuItem'
import Link from 'next/link';

const Menu = () => {

    return (
        <div className={styles.container}>
            <div className={styles.container_menu}>
                <Link className={styles.cursorLogo} href={'/'}>
                    <Image src={'./icon/miulailogo.svg'} alt='logo' width={98} height={83} />
                </Link>
                <MenuItem />
            </div>
        </div>
    )
}

Menu.displayName = 'Menu';

export default Menu;