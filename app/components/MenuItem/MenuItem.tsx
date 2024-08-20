import { title } from 'process'
import styles from './MenuItem.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '../Icon/Icon';



export default () => {
    const [activeItem, setActiveItem] = useState<number>();

    useEffect(() => {
        if (activeItem === undefined) setActiveItem(MenuData[0].id)
        console.log(activeItem)
    }, [activeItem])

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
            path: '/',
            id: 2
        },
        {
            title: 'Top Hits',
            icon: 'menu-logo3',
            activeIcon: 'clicked-menu-logo3',
            path: '/',
            id: 3
        },
        {
            title: 'Top Charts',
            icon: 'menu-logo4',
            activeIcon: 'clicked-menu-logo4',
            path: '/',
            id: 4
        },
        { type: 'header', title: 'Collection' },
        {
            title: 'Playlists',
            icon: 'menu-logo5',
            activeIcon: 'clicked-menu-logo5',
            path: 'playlists',
            id: 5
        },
        {
            title: 'Favorites',
            icon: 'menu-logo6',
            activeIcon: 'clicked-menu-logo6',
            path: '/',
            id: 6
        },
        { type: 'header', title: 'Discover' },
        {
            title: 'Artist',
            icon: 'menu-logo7',
            activeIcon: 'clicked-menu-logo7',
            path: '/',
            id: 7
        },
        {
            title: 'Album',
            icon: 'menu-logo8',
            activeIcon: 'clicked-menu-logo8',
            path: '/',
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
                        <Link href={`../${item.path}`} className={activeItem === item.id ? styles.clicked_container : styles.container} onClick={() => setActiveItem(item.id)} >
                            <Icon name={`${activeItem === item.id ? item.activeIcon : item.icon}`} alt={'logo'} width={24} height={24} />
                            <div className={activeItem === item.id ? styles.white_font : styles.font}>
                                {item.title}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    )
}