'use client'

import styles from './page.module.scss'
import Image from 'next/image'
import News from '@/app/components/News/News'
import Input from '../../../components/Input/Input'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import ReusableHeader from '@/app/components/ReusableHeader/ReusableHeader'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { globalPLaylistState, oneArrayMusicState } from '@/app/state'
import PlaylistTable from '../../../components/Table/PlaylistTable/PlaylistTable'
import Cookies from "js-cookie";





const Id = () => {
    const router = useRouter();
    // const pathname = usePathname()
    const [globalPlst] = useRecoilState(globalPLaylistState)
    const [newName, setNewsName] = useState()
    const [data, setData] = useState([])
    const [ ,setMusicArrayTwo] = useRecoilState<any>(oneArrayMusicState);
    const param = useParams(); 

    const token = Cookies.get("token");
    

    useEffect(() => {
        axios.get(`https://interstellar-1-pdzj.onrender.com/playlist/${param.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }). 
        then((r) => {
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
                {/* <Input /> */}
            </div>
            <PlaylistTable data={data} />
        </div>
    )
}

Id.displayName = 'Id';

export default Id;