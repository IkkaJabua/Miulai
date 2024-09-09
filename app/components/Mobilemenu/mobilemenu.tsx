'use client'
import Link from 'next/link'
import styles from './mobilemenu.module.scss'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import Icon from '../Icon/Icon'

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
            title: 'Search',
            icon: 'search-icon',
            activeIcon: 'whitesearch-icon',
            path: '',
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
                    <Link href={item.path} className={styles.cellMenuItem} onClick={() => setActiveItem(item.id)} >
                        <Icon name={`${activeItem === item.id ? item.activeIcon : item.icon}`} alt={'icon'} width={24} height={24} />
                        <div  className={activeItem == item.id ? styles.activeFont: styles.unActiveFont}>
                            {item.title}
                        </div>
                    </Link>
                ))
            }

        </nav>
    )
}