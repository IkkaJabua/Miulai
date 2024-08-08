'use client'
import { title } from 'process'
import styles from './UserPlaylist.module.scss'
import Image from 'next/image'


export default () => {


    const playListData = [
        {
            title: 'Playlist name 1',
            icon: 'album.svg'
        }, {
            title: 'Playlist name 2',
            icon: 'albumicon2.svg'
        }, {
            title: 'Playlist name 3',
            icon: 'albumicon3.svg'
        }, {
            title: 'Playlist name 4',
            icon: 'albumicon4.svg'
        }, {
            title: 'Playlist name 5',
            icon: 'albumicon5.svg'
        }
    ]


    return (
        <>
            {
                playListData.map((item) =>
                    <div className={styles.container} >
                        <Image src={`./icon/${item.icon}`} width={234} height={251} alt='image' />
                        <div className={styles.font}>{item.title}</div>
                    </div>
                )
            }
        </>
    )
}

