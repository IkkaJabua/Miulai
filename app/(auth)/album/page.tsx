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
import { useStartTyping } from 'react-use'


const album = () => {
    const [albumIDData, setAlbumIDData] = useRecoilState(albumIdState)
    const [albumCover, setAlbumcover] = useState()
    const [albumName, setAlbumName] = useState()
    const [albumPage, setAlbumPage] = useRecoilState(albumMusicFromArtistState)

    useEffect(() => {

        axios.get(`https://interstellar-1-pdzj.onrender.com/album/${albumIDData}`). 
        then((r) => {
            console.log(r.data.musics,'musics musics')
            setAlbumPage(r.data.musics)
            setAlbumcover(r.data.file.url)
            setAlbumName(r.data.albumName)


        }).catch(error => {
            console.log('ar modis albimdata')
        })
    })

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <Header />
                <div className={styles.bodyContainer}>
                    <News title={`${albumName}`} image={`${albumCover}`} />
                    <Table />
                </div>
            </div>

        </div>

    )

}


export default album