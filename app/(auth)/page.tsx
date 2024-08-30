'use client';

import CardsHeader from '../components/CardsHeader/CardsHeader';
import Header from '../components/Header/Header';
import News from '../components/News/News';
import AlbumSection from '../Homepage/AlbumSection/AlbumSection';
import ArtistSection from '../Homepage/ArtistSection/ArtistSection';
import ChartsSection from '../Homepage/ChartsSection/ChartsSection';
import HitsSection from '../Homepage/HitsSection/HitsSection';
import styles from './page.module.scss';




export default function Home() {
  return (
    <main className={styles.main}>
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
    </main>
  );
}






