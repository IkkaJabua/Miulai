'use client';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/Header/Header';
import Card from '@/app/components/Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { albumidState } from '@/app/state';

    

const ArtistsList = () => {
    const [albumId, setAlbumId] = useRecoilState(albumidState);
    const router = useRouter();
    const handleCardClick = () => {
        axios.get(`https://interstellar-1-pdzj.onrender.com/author`)
        
        router.push(`/artist`);
    };



    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios.get(`https://interstellar-1-pdzj.onrender.com/author`)
        .then((r) => {
            setArtists(r.data)
        })
        
    },[])

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.container2}>
                <h2 className={styles.h2}>Trending Now</h2>

                <div className={styles.wrapper}>
                    {
                        artists.map((item: any, i) => (
                            <div onClick={() => {
                                setAlbumId(item.id)
                                handleCardClick()
                            }} >   
                                <Card key={i} image={item?.files[0]?.url} title={item.firstName} imageStyle={'round'} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ArtistsList;
