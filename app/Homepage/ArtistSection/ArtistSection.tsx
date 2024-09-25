import Card from '@/app/components/Card/Card';
import styles from './ArtistSection.module.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';



const ArtistSection = () => {

    const [cardData, setCardData] = useState<any>([])

    useEffect(() => {
        axios.get('https://interstellar-1-pdzj.onrender.com/author')
            .then((r) => {
                setCardData(r.data)
                console.log( '========================' ,r.data)
            })
    }, [])





    return (
        <div className={styles.container}>
            <div className={styles.art}>
                {
                    cardData.map((item: any) => (
                        <div className={styles.box} key={item.id}>
                            <Card header={''} key={item.id} image={item.files[0].url} title={`${item.firstName} ${item.lastName}`} imageStyle={'round'} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default ArtistSection;