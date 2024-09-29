'use client'
import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import News from '../../components/News/News'
import Table from '../../components/Table/Table'
import styles from './page.module.scss'
import Link from 'next/link'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { albumIdState, albumMusicFromArtistState } from '@/app/state'

const Album = () => {
    const [albumIDData, setAlbumIDData] = useRecoilState(albumIdState)
    const [albumCover, setAlbumCover] = useState<string>()
    const [albumName, setAlbumName] = useState<string>()
    const [albumPage, setAlbumPage] = useRecoilState(albumMusicFromArtistState)

    useEffect(() => {
        if (albumIDData) {
            axios.get(`https://interstellar-1-pdzj.onrender.com/album/${albumIDData}`)
                .then((r) => {
                    setAlbumPage(r.data.musics)
                    setAlbumCover(r.data.file.url)
                    setAlbumName(r.data.albumName)
                })
                .catch(error => {
                    console.log('Failed to fetch album data:', error)
                })
        }
    }, [albumIDData]) 

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <Header />
                <div className={styles.bodyContainer}>
                    <News title={albumName || 'Loading...'} image={albumCover || ''} />
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Album
