import Card from '@/app/components/Card/Card';
import styles from './HitsSection.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';



const HitsSection = () => {
    const [musics, setMusics] = useState<any>([])
    const accessToken = Cookies.get('accessToken')
   
    
    useEffect(() => {
     
        axios.get(`https://interstellar-1-pdzj.onrender.com/author`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })  
        .then((r) => {
            console.log(r.data);
            setMusics(r.data)
        })
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.hits}>
                {
                    musics.slice(0,5).map((item:any) => (
                        <div className={styles.box} key={item.id}>
                            <Card image={item?.files[0]?.url} subtitle={item.firstName} title={item?.lastName} imageStyle={'normal'} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default HitsSection;