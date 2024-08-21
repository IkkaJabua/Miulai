'use client';
import Image from 'next/image'
import styles from './Menu.module.scss'
import MenuItem from '../MenuItem/MenuItem'
import Link from 'next/link';

export default () => {

    return (
        <div className={styles.container}>
            <div className={styles.container_menu}>
                <Link href={'/'}>
                    <Image src={'./icon/miulailogo.svg'} alt='logo' width={98} height={83} />
                </Link>
                <MenuItem />
            </div>
        </div>
    )
}