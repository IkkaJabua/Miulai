'use client';

import CardsHeader from '../components/CardsHeader/CardsHeader';
import Header from '../components/Header/Header';
import News from '../components/News/News';
import UserPopup from '../components/UserPopup/UserPopup';
import AlbumSection from '../Homepage/AlbumSection/AlbumSection';
import ArtistSection from '../Homepage/ArtistSection/ArtistSection';
import ChartsSection from '../Homepage/ChartsSection/ChartsSection';
import HitsSection from '../Homepage/HitsSection/HitsSection';
import styles from './page.module.scss';


// songs.slice(0, 6).map(() => {})

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <News title={'Top Hit Of The Week'} image={'/image/testImg.jpg'} plays={'643,421'} />
      <CardsHeader  title={'Top Hits'} subtitle={'See all'} addRoute='hits' />
      <HitsSection />
      <CardsHeader  title={'Top Charts'} subtitle={'See all'} addRoute='charts' />
      <ChartsSection />
      <CardsHeader title={'Popular Artists'} subtitle={'See All'} addRoute='artistlist' />
      <ArtistSection />
      <CardsHeader title='Popular Albums' />
      <AlbumSection /> 
    </main>
  );
}






