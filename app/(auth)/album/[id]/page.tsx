'use client'
import { useEffect, useState } from 'react'
import Header from '../../../components/Header/Header'
import Input from '../../../components/Input/Input'
import News from '../../../components/News/News'
import Table from '../../../components/Table/Table'
import styles from './page.module.scss'
import Link from 'next/link'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { albumIdState, albumMusicFromArtistState, oneArrayMusicState } from '@/app/state'
import Cookies from "js-cookie";
import { useParams } from 'next/navigation'



const AlbumID = () => {
    const [albumIDData, setAlbumIDData] = useRecoilState(albumIdState)
    const [albumCover, setAlbumCover] = useState<string>()
    const [albumName, setAlbumName] = useState<string>()
    const [albumPage, setAlbumPage] = useRecoilState(albumMusicFromArtistState)
    const [musicArrayTwo, setMusicArrayTwo] = useRecoilState(oneArrayMusicState)
    const token = Cookies.get("token");
    const { id } = useParams();





    useEffect(() => {
        axios.get(`https://interstellar-1-pdzj.onrender.com/album/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((r) => {
                setAlbumPage(r.data.musics)
                setAlbumCover(r.data.file?.url)
                setAlbumName(r.data.albumName)
                setMusicArrayTwo(r.data.musics)
                // setMusicArrayTwo(r.data.musics)

            })
            .catch(error => {
            })
    }, [id])

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <Header />
                <div className={styles.bodyContainer}>
                    <News title={albumName || 'Loading...'} image={`${albumCover}`} />
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default AlbumID
