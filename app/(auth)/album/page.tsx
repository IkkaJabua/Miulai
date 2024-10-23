"use client"; // Add this line to mark the component as a Client Component
import styles from './page.module.scss';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/app/components/Header/Header';
import Card from '@/app/components/Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { albumidState } from '@/app/state';

const Album = () => {
    const [albumId, setAlbumId] = useRecoilState(albumidState);
    const [reusableID, setReusableId] = useState()
    const router = useRouter();
    const param = useParams();


    const handleCardClick = (id: number) => {
        router.push(`/album/${id}`);
    };

    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios.get(`https://interstellar-1-pdzj.onrender.com/album`)
            .then((r) => {
                setArtists(r.data);
            })
            .catch((error) => {
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
                                    setReusableId(item.id)
                                    setAlbumId(item.id);
                                    handleCardClick(item.id);
                                }}
                            >
                                <Card
                                    image={item?.file?.url}
                                    title={item.albumName}
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

export default Album;
