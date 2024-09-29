'use client';
// import { CardHeader } from '@mui/material';
// import MusicCard from '../components/ MusicCard/ MusicCard';
// import Card from '../components/Card/Card';
import CardsHeader from '../components/CardsHeader/CardsHeader';
import Header from '../components/Header/Header';
import News from '../components/News/News';
import ChartsSection from './ChartsSection/ChartsSection';
import HitsSection from './HitsSection/HitsSection';
import styles from './page.module.scss';
import ArtistSection from './ArtistSection/ArtistSection';
import AlbumSection from './AlbumSection/AlbumSection';

const hitsData = [
    {
        image: '/image/test.png',
        subtitle: 'Anyma',
        title: 'Genesys ||',
    },

    {
        image: '/image/test.png',
        subtitle: 'Anyma',
        title: 'Genesys ||',
    },

    {
        image: '/image/test.png',
        subtitle: 'Anyma',
        title: 'Genesys ||',
    },

    {
        image: '/image/test.png',
        subtitle: 'Anyma',
        title: 'Genesys ||',
    },
]

const Homepage = () => {

    return (
        <div className={styles.container}>
            <Header />
            <News title={'Top Hit Of The Week'} image={'/image/testImg.jpg'} />
            <CardsHeader title={'Top Hits'} subtitle={''} />
            <HitsSection />
            <CardsHeader title={'Top Charts'} subtitle={''} />
            <ChartsSection />
            <CardsHeader title={'Popular Artists'} subtitle={''} />
            <ArtistSection />
            <CardsHeader title={'Popular Albums'} subtitle={''} />
            <AlbumSection />
        </div>
    )
}


export default Homepage;