import { useEffect, useState } from 'react'
import HeartShapeBtn from '../heatShapeIcon/HeartShapeIcn'
import Icon from '../Icon/Icon'
import styles from './ MusicCard.module.scss'
import Image from 'next/image'
import Playlist from '../Playlist/Playlist'
import axios from 'axios'



const MusicCard = () => {
    const [active, setActive] = useState<number>()

    const [cardData, setCardData] = useState<any>([])

    // useEffect(() => {
    //     axios.get('https://fakestoreapi.com/products/7')
    //         .then((r) => {
    //             setCardData(r.data)
    //             console.log(cardData)
    //         })
    // }, [])






    const musicCardData = [
        {
            author: 'By Robin Schulz',
            title: 'Sugar (feat. Francesco)',
            icon: 'musiccard1.svg',
            id: 1,
            time: '3:45',
        },
        {
            author: 'By Ariana Grande',
            title: 'Blazed',
            icon: 'musiccard2.svg',
            id: 2,
            time: '3:45',
        }, {
            author: 'By Dua Lipa',
            title: 'Illusion',
            icon: 'musiccard4.svg',
            id: 3,
            time: '3:45',
        }, {
            author: 'By Japanese Breakfast',
            title: 'Be Sweet',
            icon: 'musiccard3.svg',
            id: 4,
            time: '3:45',
        },

        {
            author: 'By Japanese Breakfast',
            title: 'Be Sweet',
            icon: 'musiccard3.svg',
            id: 5,
            time: '3:45',
        },

        {
            author: 'By Japanese Breakfast',
            title: 'Be Sweet',
            icon: 'musiccard3.svg',
            id: 6,
            time: '3:45',
        },
    ]


    return (
        <div className={styles.mainContainer}>
            {
                musicCardData.map((item: any, index: any) => (
                    <div className={styles.container} key={item.id}>
                        <div className={styles.container_author}>
                            <div>
                                <Image src={`./icon/${item.icon}`} alt='music cover' width={72} height={72} />
                            </div>
                            <div className={styles.container_name}>
                                <div className={styles.music_name_font_style}>{item.title}</div>
                                <div className={styles.music_author_font_style}>{item.author}</div>
                            </div>
                        </div>
                        <div className={styles.container_detals}>
                            <div className={styles.time_font_style}>{item.price}</div>
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


export default MusicCard;