'use client'
import { useEffect, useState } from 'react'
import HeartShapeBtn from '../heatShapeIcon/HeartShapeIcn'
import Image from 'next/image'
import Playlist from '../Playlist/Playlist'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { chartsState, currentTrackIdState, musicState, playerState } from '@/app/states'
import styles from './ MusicCard.module.scss'

const MusicCard = () => {
    const [active, setActive] = useState<number>()
    const [cardData, setCardData] = useState<any[]>([])
    const [player, setPlayer] = useRecoilState(playerState)
    const [music, setMusic] = useRecoilState(musicState)



    const [currentTrackId, setCurrentTrackIdState] = useRecoilState(currentTrackIdState)


    // const [musicId, setMusicID] = useRecoilState(chartsState)

    useEffect(() => {
        axios.get('https://enigma-wtuc.onrender.com/musics', {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjExOSwiZW1haWwiOiJwcHBAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MjcxMDQxMTMsImV4cCI6MTczMDcwNDExM30.O8T3vGipWPmXJj-5GfWMRlXs-smmIuOYpNiVHfkPG6s`
            }
        })
            .then((r) => {
                setCardData(r.data)
                setCurrentTrackIdState(r.data.id)
                // console.log(r.data,'=====>>><><><><')
            })
    }, [])

    const playerMusic = (id: number) => {
        axios.get(`https://enigma-wtuc.onrender.com/musics/${id}`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjExOSwiZW1haWwiOiJwcHBAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MjcxMDQxMTMsImV4cCI6MTczMDcwNDExM30.O8T3vGipWPmXJj-5GfWMRlXs-smmIuOYpNiVHfkPG6s`
            }
        })
            .then((r) => {
                setMusic(r.data)
                console.log(r.data, '=-=-=-=-=-=-=-=-=-=-')
            })

    } 
 






    return (
        <div className={styles.mainContainer}>
            {
                cardData.map((item: any, index: any) => (
                    <div className={styles.container} key={item.id} onClick={() => playerMusic(item.id)}>
                        <div className={styles.container_author}>
                            <div>
                                <img className={styles.image} src={item.coverImgUrl} alt={'foto ar ari '} width={72} height={72} />
                            </div>
                            <div className={styles.container_name}>
                                <div className={styles.music_name_font_style}>{item.title}</div>
                                <div className={styles.music_author_font_style}>{item.artistName}</div>
                            </div>
                        </div>
                        <div className={styles.container_detals}>
                            <div className={styles.time_font_style}>3.58</div>
                            <div className={styles.container_like_point}>
                                <HeartShapeBtn isDisabled={false} isActive={true} onClick={() => (console.log('button clicked'))} />
                                <div className={styles.cursor} onClick={() => setActive(active === item.id ? undefined : item.id)}>
                                    <Image src={'./Dots.svg'} alt='Dots button' width={24} height={24} />
                                </div>
                                <div className={styles.cellPlaylist}>
                                    {
                                        active === item.id &&
                                        <div className={styles.playlist}>
                                            <Playlist />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default MusicCard