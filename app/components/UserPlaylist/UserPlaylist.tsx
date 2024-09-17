'use client'
import { title } from 'process'
import styles from './UserPlaylist.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'


const UserPlaylist = () => {
    const router = useRouter()

    // const playListData = [
    //     {
    //         title: 'Playlist name 1',
    //         icon: 'albumicon1.svg',
    //         id: 1,
    //     }, {
    //         title: 'Playlist name 2',
    //         icon: 'albumicon2.svg',
    //         id: 2,
    //     }, {
    //         title: 'Playlist name 3',
    //         icon: 'albumicon3.svg',
    //         id: 3,
    //     }, {
    //         title: 'Playlist name 4',
    //         icon: 'albumicon4.svg',
    //         id: 4,
    //     }, {
    //         title: 'Playlist name 5',
    //         icon: 'albumicon5.svg',
    //         id: 5
    //     }
    // ]

    const [playlistdata, setPlylistdata] = useState([])


    useEffect(() => {
        axios.get('https://interstellar-1-pdzj.onrender.com/playlist')
            .then((r) => {
                setPlylistdata(r.data)
                console.log(r.data)
            })
    }, [])






    return (
        <>
            {
                playlistdata.map((item: any) =>
                    <div className={styles.container} key={item.id}
                        onClick={() => router.push(`playlists/${item.id}`)}
                    >
                        <div className={styles.hoveredImage} >
                            {/* <Image className={styles.cellImage} src={`./icon/${item.icon}`} width={234} height={251} alt='image' /> */}
                            <img className={styles.cellImage} src={`./icon/albumicon3.svg`} width={234} height={251} alt='image' />

                            <div className={styles.buttons}>
                                <div className={styles.cellEdit}>
                                    <Image src={'./icon/edit.svg'} width={24} height={24} alt={'edit button'} />
                                </div>
                                <div className={styles.cellDelete}>
                                    <Image src={'./icon/delete.svg'} width={24} height={24} alt={'edit button'} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.font}>{item.name}</div>
                    </div>
                )
            }
        </>
    )
}

UserPlaylist.displayName = 'UserPlaylist';
export default UserPlaylist;