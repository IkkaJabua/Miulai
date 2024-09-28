"use client"; // Add this line to mark the component as a Client Component

import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/Header/Header';
import Card from '@/app/components/Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { albumidState } from '@/app/state';

const ArtistsList = () => {
    const [, setAlbumId] = useRecoilState(albumidState);
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/artist`);
    };

    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios.get(`https://interstellar-1-pdzj.onrender.com/author`)
            .then((r) => {
                setArtists(r.data);
            })
            .catch((error) => {
                console.error("Error fetching artists:", error);
            });
    }, []);

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.container2}>
                <h2 className={styles.h2}>Trending Now</h2>
                <div className={styles.wrapper}>
                    {
                        artists.map((item: any) => (
                            <div
                                key={item.id} // Assign the unique key here
                                onClick={() => {
                                    setAlbumId(item.id);
                                    handleCardClick();
                                }} 
                            >
                                <Card
                                    image={item?.files[0]?.url}
                                    title={item.firstName}
                                    imageStyle={'round'}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ArtistsList;
