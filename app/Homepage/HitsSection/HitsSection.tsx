import Card from '@/app/components/Card/Card';
import styles from './HitsSection.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRecoilState } from 'recoil';
import { accessTokenState, clickFetchState, globalMusicState, formusicFetchState, albumidState, albumIdState } from '@/app/state';
import { useRouter } from "next/navigation";




const HitsSection = () => {
    const [musics, setMusics] = useState<any>([])
    const token = Cookies.get('token')
    const router = useRouter();

    const [clickFetch, setClickFetch] = useRecoilState(clickFetchState);
    const [viewArtist, setViewArtist] = useRecoilState(formusicFetchState)
    const [albumIDData, setAlbumIDData] = useRecoilState(albumIdState) 
       const [albumId, setAlbumId] = useRecoilState(albumidState);




    const [globalMusic, setGlobalMusic] = useRecoilState(globalMusicState)


   
    
    useEffect(() => {
        axios.get(`https://interstellar-1-pdzj.onrender.com/music`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })  
        .then((r) => {
            setMusics(r.data)
        })
    },[clickFetch])

    return (
        <div className={styles.container}>
            <div className={styles.hits}>
                {
                    musics.slice().map((item:any) => (
                        <div className={styles.box} key={item.id} onClick={() => {
                            setAlbumIDData(item.albumId)
                            setGlobalMusic(item.id)
                            setAlbumId(item.authorId)

                            console.log(item)
                        }}
                            >
                            <Card image={item?.albumCover} subtitle={item.artistName} title={item.name}  imageStyle={'normal'} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default HitsSection;