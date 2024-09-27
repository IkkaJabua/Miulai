'use client';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/Header/Header';
import Card from '@/app/components/Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

// const artistsData = [
//     {
//         id: 1,
//         title: 'Eminem',
//         image: '/image/artist-demo-image.png'
//     },
//     {
//         id: 2,
//         title: 'Eminem',
//         image: '/image/artist-demo-image.png'
//     },
//     {
//         id: 3,
//         title: 'Eminem',
//         image: '/image/artist-demo-image.png'
//     },
//     {
//         id: 4,
//         title: 'Eminem',
//         image: '/image/artist-demo-image.png'
//     },
//     {
//         id: 5,
//         title: 'Eminem',
//         image: '/image/artist-demo-image.png'
//     },
//     {
//         id: 6,
//         title: 'Eminem',
//         image: '/image/artist-demo-image.png'
//     },
//     {
//         id: 7,
//         title: 'Eminem',
//         image: '/image/artist-demo-image.png'
//     },
//     {
//         id: 8,
//         title: 'Eminem',
//         image: '/image/artist-demo-image.png'
//     },
//     {
//         id: 9,
//         title: 'Eminem',
//         image: '/image/artist-demo-image.png'
//     },
//     {
//         id: 10,
//         title: 'Eminem',
//         image: '/image/artist-demo-image.png'
//     },
//     {
//         id: 11,
//         title: 'Eminem',
//         image: '/image/artist-demo-image.png'
//     },
//     {
//         id: 12,
//         title: 'Eminem',
//         image: '/image/artist-demo-image.png'
//     },
// ];
    

const ArtistsList = () => {
    const router = useRouter();
    const handleCardClick = () => {
        axios.get(`https://interstellar-1-pdzj.onrender.com/author`)
        router.push(`/artist`);
    };



    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios.get(`https://interstellar-1-pdzj.onrender.com/author/`)
        .then((r) => {
            setArtists(r.data)
            // console.log(r.data);
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
                            <div onClick={handleCardClick}>
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
