'use client'
import Image from 'next/image'
import styles from './Menu.module.scss'
import MenuItem from '../MenuItem/MenuItem'



export default () => {

    return (
        <div className={styles.container}>
            <div className={styles.container_menu}>
                <div>
                    <Image src={'./icon/miulailogo.svg'} alt='logo' width={98} height={83} />
                </div>
                <MenuItem />
            </div>
        </div>
    )
}