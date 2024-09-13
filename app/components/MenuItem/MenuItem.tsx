import { title } from 'process'
import styles from './MenuItem.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '../Icon/Icon';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';





const MenuItem = () => {
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
            title: 'Recommendations',
            icon: 'menu-logo2',
            activeIcon: 'clicked-menu-logo2',
            path: '/recommendations',
            id: 2
        },
        {
            title: 'Top Hits',
            icon: 'menu-logo3',
            activeIcon: 'clicked-menu-logo3',
            path: '/hits',
            id: 3
        },
        {
            title: 'Top Charts',
            icon: 'menu-logo4',
            activeIcon: 'clicked-menu-logo4',
            path: '/charts',
            id: 4
        },
        { type: 'header', title: 'Collection' },
        {
            title: 'Playlists',
            icon: 'menu-logo5',
            activeIcon: 'clicked-menu-logo5',
            path: '/playlists',
            id: 5
        },
        {
            title: 'Favorites',
            icon: 'menu-logo6',
            activeIcon: 'clicked-menu-logo6',
            path: '/favorites',
            id: 6
        },
        { type: 'header', title: 'Discover' },
        {
            title: 'Artist',
            icon: 'menu-logo7',
            activeIcon: 'clicked-menu-logo7',
            path: '/artist',
            id: 7
        },
        {
            title: 'Album',
            icon: 'menu-logo8',
            activeIcon: 'clicked-menu-logo8',
            path: '/album',
            id: 8
        }
    ]


    return (
        <>
            <div className={styles.main_container}>
                {MenuData.map((item, index) => {
                    if (item.type === 'header') {
                        return <div className={styles.menu_header} key={index}>{item.title}</div>;
                    }
                    return (
                        <div key={item.id} className={pathname === item.path ? styles.clicked_container : styles.container}
                            onClick={() => {
                                // setActiveItem(pathname)
                                router.push(`${item.path}`)
                            }} >
                            <Icon name={`${pathname === item.path ? item.activeIcon : item.icon}`} alt={'logo'} width={24} height={24} />
                            <div className={pathname === item.path ? styles.white_font : styles.font}>
                                {item.title}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

MenuItem.displayName = 'MenuItem';

export default MenuItem;