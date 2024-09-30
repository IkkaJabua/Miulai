'use client'
import Button from 'antd/es/button/button'
import styles from './page.module.scss'
import Image from 'next/image'
import News from '@/app/components/News/News'
import Input from '../../../components/Input/Input'
import Table from '../../../components/Table/Table'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import ReusableHeader from '@/app/components/ReusableHeader/ReusableHeader'
import Playlist from '../../../components/Table/playlist/playlist'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { globalPLaylistState, oneArrayMusicState } from '@/app/state'




const Id = () => {
    const router = useRouter();
    const pathname = usePathname()
    const [globalPlst, setGlobalPlst] = useRecoilState(globalPLaylistState)
    const [newName, setNewsName] = useState()
    const [data, setData] = useState([])
    const [musicArrayTwo, setMusicArrayTwo] = useRecoilState<any>(oneArrayMusicState);


    useEffect(() => {

        axios.get(`https://interstellar-1-pdzj.onrender.com/Playlist/${globalPlst}`). 
        then((r) => {
            console.log(r.data,'sdasdasdsa')
            setData(r.data.musics)
            setNewsName(r.data.name)
            setMusicArrayTwo(data)



        })
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.cellheader}>
                <ReusableHeader />
            </div>
            <div>
                <Image onClick={() => router.back()} className={styles.tabletCursor} src={'../icon/isari.svg'} width={32} height={32} alt='image' />
                <News title={`${newName}`} image={'/icon/albumicon5.svg'} />
            </div>
            <div className={styles.input}>
                <Input />
            </div>
            <Playlist data={data} />
        </div>
    )
}

Id.displayName = 'Id';

export default Id;