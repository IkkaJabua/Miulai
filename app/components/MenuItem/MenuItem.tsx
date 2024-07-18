import { title } from 'process'
import styles from './MenuItem.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Link from 'next/link';



export default () => {
    const [activeItem, setActiveItem] = useState<number>();

    useEffect(() => {
        if (activeItem === undefined) setActiveItem(MenuData[0].id)
        console.log(activeItem)
    }, [activeItem])

    const MenuData = [
        {
            title: 'Home',
            icon: './menu-logo-1.svg',
            activeIcon: '/clicked-menu-logo1.svg',
            path: '/',
            id: 1
        },
        {
            title: 'Recommendations',
            icon: './menu-logo2.svg',
            activeIcon: '/clicked-menu-logo2.svg',
            path: '/',
            id: 2
        },
        {
            title: 'Top Hits',
            icon: './menu-logo3.svg',
            activeIcon: '/clicked-menu-logo3.svg',
            path: '/',
            id: 3
        },
        {
            title: 'Top Charts',
            icon: './menu-logo4.svg',
            activeIcon: '/clicked-menu-logo4.svg',
            path: '/',
            id: 4
        },
        { type: 'header', title: 'Collection' },
        {
            title: 'Playlists',
            icon: './menu-logo5.svg',
            activeIcon: '/clicked-menu-logo5.svg',
            path: '/',
            id: 5
        },
        {
            title: 'Favorites',
            icon: './menu-logo6.svg',
            activeIcon: '/clicked-menu-logo6.svg',
            path: '/',
            id: 6
        },
        { type: 'header', title: 'Discover' },
        {
            title: 'Artist',
            icon: './menu-logo7.svg',
            activeIcon: '/clicked-menu-logo7.svg',
            path: '/',
            id: 7
        },
        {
            title: 'Album',
            icon: './menu-logo8.svg',
            activeIcon: '/clicked-menu-logo8.svg',
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
                        <div className={activeItem === item.id ? styles.clicked_container : styles.container} onClick={() => setActiveItem(item.id)} >
                            <img src={activeItem === item.id ? item.activeIcon : item.icon} alt={item.title} width={24} height={24} />
                            {/* <div>{item.title}</div> */}
                            {/* <a href={item.path}>  {item.title} </a> */}
                            <Link className={activeItem === item.id ? styles.white_font : styles.font}
                                href={`${item.path}`}>
                                {item.title}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    )
}