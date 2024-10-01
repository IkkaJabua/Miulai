import { title } from 'process'
import styles from './MenuItem.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '../Icon/Icon';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';


interface menuData {
    title?: string,
    icon?: string,
    activeIcon?: string,
    path?: string,
    key: string,
    type?: string
}




const MenuItem = () => {
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (pathname === undefined) router.push('/')
    }, [pathname])

    const MenuData: menuData[] = [
        {
            title: 'Home',
            icon: 'menu-logo-1',
            activeIcon: 'clicked-menu-logo1',
            path: '/',
            key: '/',
        },
        {
            title: 'Top Hits',
            icon: 'menu-logo3',
            activeIcon: 'clicked-menu-logo3',
            path: '/hits',
            key: '/hits',

        },
        {
            title: 'Top Charts',
            icon: 'menu-logo4',
            activeIcon: 'clicked-menu-logo4',
            path: '/charts',
            key: '/charts',

        },
        { type: 'header', title: 'Collection', key: 'title' },
        {
            title: 'Playlists',
            icon: 'menu-logo5',
            activeIcon: 'clicked-menu-logo5',
            path: '/playlists',
            key: '/playlists',

        },
        { type: 'header', title: 'Discover', key: 'title' },
        {
            title: 'Artist',
            icon: 'menu-logo7',
            activeIcon: 'clicked-menu-logo7',
            path: '/artistlist',
            key: '/artistlist',

        },
        {
            title: 'Album',
            icon: 'menu-logo8',
            activeIcon: 'clicked-menu-logo8',
            path: '/album',
            key: '/album',

        }
    ]


    return (
        <>
            <div className={styles.main_container}>
                {MenuData.map((item, index) => {
                    const active = item.key === '/' ? pathname === '/' : pathname.startsWith(item.key)
                    if (item.type === 'header') {
                        return <div className={styles.menu_header} key={index}>{item.title}</div>;
                    }
                    return (
                        <div key={item.key} className={active ? styles.clicked_container : styles.container}
                            onClick={() => router.push(`${item.path}`)} >
                            <Icon name={`${active ? item.activeIcon : item.icon}`} alt={'logo'} width={24} height={24} />
                            <div className={active ? styles.white_font : styles.font}>
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