'use client'
import Link from 'next/link'
import styles from './mobilemenu.module.scss'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import Icon from '../Icon/Icon'
import { usePathname, useRouter } from 'next/navigation'

const MobileMenu = () => {
    const [activeItem, setActiveItem] = useState<number>();

    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (pathname === undefined) router.push('/')
    }, [pathname])


   


    const MenuData = [
        {
            title: 'Home',
            icon: 'menu-logo-1',
            activeIcon: 'clicked-menu-logo1',
            path: '/',
            id: 1
        },
        {
            title: 'Search',
            icon: 'search-icon',
            activeIcon: 'whitesearch-icon',
            path: '/search',
            id: 2
        },
        {
            title: 'My playlists',
            icon: 'menu-logo5',
            activeIcon: 'clicked-menu-logo5',
            path: '/playlists',
            id: 3
        }
    ]




    return (

        <nav className={styles.container} >
            {
                MenuData.map(item => (
                    <div key={item.id} className={styles.cellMenuItem} onClick={() => router.push(`${item.path}`)} >
                        <Icon name={`${pathname === item.path ? item.activeIcon : item.icon}`} alt={'icon'} width={24} height={24} />
                        <div className={pathname == item.path ? styles.activeFont: styles.unActiveFont}>
                            {item.title}
                        </div>
                    </div>
                ))
            }

        </nav>
    )
}

MobileMenu.displayName = 'MobileMenu';

export default MobileMenu;