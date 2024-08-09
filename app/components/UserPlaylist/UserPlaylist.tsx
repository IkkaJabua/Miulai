'use client'
import { title } from 'process'
import styles from './UserPlaylist.module.scss'
import Image from 'next/image'
import Link from 'next/link'


export default () => {


    const playListData = [
        {
            title: 'Playlist name 1',
            icon: 'albumicon1.svg',
            id: 1,
        }, {
            title: 'Playlist name 2',
            icon: 'albumicon2.svg',
            id: 2,
        }, {
            title: 'Playlist name 3',
            icon: 'albumicon3.svg',
            id: 3,
        }, {
            title: 'Playlist name 4',
            icon: 'albumicon4.svg',
            id: 4,
        }, {
            title: 'Playlist name 5',
            icon: 'albumicon5.svg',
            id: 5
        }
    ]


    return (
        <>
            {
                playListData.map((item) =>
                    <Link className={styles.container} href={`playlists/${item.id}`} >
                        <div className={styles.hoveredImage}
                            style={{
                                backgroundImage: `linear-gradient(0deg, rgba(149, 146, 146, 0.2)0%, rgba(149, 146, 146, 0.2)100%), url('./icon/${item.icon}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                width: "100%",
                                height: "300px",
                                borderRadius: '8px'

                            }}
                        >
                        </div>
                        <div className={styles.font}>{item.title}</div>
                    </Link>
                )
            }
        </>
    )
}

