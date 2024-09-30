"use client"; // Mark the component as a Client Component
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'; // For Next.js 13 (App Router)
import Header from "@/app/components/Header/Header";
import News from "@/app/components/News/News";
import TabbedNav from "@/app/components/TabbedNav/TabbedNav";
import styles from "./page.module.scss";
import axios from 'axios';

const Artist = () => {
    const router = useRouter();
    const { id } = useParams(); 

    const [artistPhoto, setArtistPhoto] = useState('');
    const [artistName, setArtistName] = useState('');

    useEffect(() => {
        if (id) {
            axios.get(`https://interstellar-1-pdzj.onrender.com/author/${id}`)
                .then((response) => {
                    const artistData = response.data;
                    setArtistPhoto(artistData?.files[0]?.url || '');
                    setArtistName(artistData.firstName);
                })
                .catch((error) => {
                    console.error("Error fetching artist data:", error);
                });
        } else {
            router.push('/artistlist');
        }
    }, [id]);

    return (
        <div className={styles.container}>
            <Header />
            <News title={artistName} image={`${artistPhoto}`} plays={"509,678"} />
            <TabbedNav biographyText={""} />
        </div>
    );
};

export default Artist;