import Card from '@/app/components/Card/Card';
import styles from './HitsSection.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRecoilState } from 'recoil';
import { clickFetchState } from '@/app/state';



const HitsSection = () => {
    const [musics, setMusics] = useState<any>([])
    const accessToken = Cookies.get('accessToken')
    const [clickFetch, setClickFetch] = useRecoilState(clickFetchState);

   
    
    useEffect(() => {
        axios.get(`https://interstellar-1-pdzj.onrender.com/music`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })  
        .then((r) => {
            console.log(r.data,'top hits');
            setMusics(r.data)
        })
    },[clickFetch])

    return (
        <div className={styles.container}>
            <div className={styles.hits}>
                {
                    musics.slice(0,5).map((item:any) => (
                        <div className={styles.box} key={item.id}>
                            <Card image={item?.albumCover} subtitle={item.artistName} title={item.name} imageStyle={'normal'} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default HitsSection;