'use client';
import Header from '@/app/components/Header/Header';
import styles from './page.module.scss';
import Image from 'next/image';
import Card from '@/app/components/Card/Card';


const fakeData = [
    {
        image: '/image/swift.png',
        title: 'Taylor Swift',
        id: 1
    },
    {
        image: '/image/eilish.png',
        title: 'Billie Eilish',
        id: 2
    },
    {
        image: '/image/sza.png',
        title: 'Sza',
        id: 3
    },
    {
        image: '/image/1.png',
        title: 'Namaste',
        id: 4
    },
    {
        image: '/image/2.png',
        title: '2pac',
        id: 5
    },
    {
        image: '/image/testImg.jpg',
        title: 'Eminem',
        id: 6
    },
    {
        image: '/icon/albumicon1.svg',
        title: 'Taylor Swift',
        id: 7
    },
    {
        image: '/icon/albumicon1.svg',
        title: 'Taylor Swift',
        id: 8
    },
    {
        image: '/icon/albumicon1.svg',
        title: 'Taylor Swift',
        id: 9
    },
    {
        image: '/icon/albumicon1.svg',
        title: 'Taylor Swift',
        id: 10
    },
    {
        image: '/image/testImg.jpg',
        title: 'Taylor Swift',
        id: 11
    },
    {
        image: '/image/testImg.jpg',
        title: 'Taylor Swift',
        id: 12
    },
    {
        image: '/image/testImg.jpg',
        title: 'Taylor Swift',
        id: 13
    },
    {
        image: '/image/testImg.jpg',
        title: 'Taylor Swift',
        id: 14
    },
    {
        image: '/image/testImg.jpg',
        title: 'Taylor Swift',
        id: 15
    },
    


]

const Artist = () => {

    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.header}>Trending Now</h1>
            <div className={styles.dataWrapper}>
                {
                    fakeData.map((item) => (
                        <div key={item.id}>
                            <Card header={''} image={item.image} title={item.title} imageStyle={'round'} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default Artist;