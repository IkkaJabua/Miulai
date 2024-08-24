'use client';
import { Butterfly_Kids } from 'next/font/google';
import styles from '../app/page.module.scss';
import CardsHeader from './components/CardsHeader/CardsHeader';
import Header from './components/Header/Header';
import News from './components/News/News';
import AlbumSection from './Homepage/AlbumSection/AlbumSection';
import ArtistSection from './Homepage/ArtistSection/ArtistSection';
import ChartsSection from './Homepage/ChartsSection/ChartsSection';
import HitsSection from './Homepage/HitsSection/HitsSection';
import Button from './components/Button/Button';



export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Header />
      <News title={'Top Hit Of The Week'} image={'/image/testImg.jpg'} />
      <CardsHeader title={'Top Hits'} subtitle={''} />
      <HitsSection />
      <CardsHeader title={'Top Charts'} subtitle={''} />
      <ChartsSection />
      <CardsHeader title={'Popular Artists'} subtitle={''} />
      <ArtistSection />
      <CardsHeader title={'Popular Albums'} subtitle={''} />
      <AlbumSection /> */}


      <Button title={'Listen Now'} mode='reusable button'
        width={'153px'}
        height={'100px'}
        padding='12px 24px 12px 20px'
        borderRadius='8px'
        gap='4px'
        fontSize='16px'
        fontWeight='500'
        imageSrc='clip.svg'
        imageWidth={20}
        imageHeight={20}
        imageAlt='icon'
        onClick={() => console.log('button clicked')}
        />
    </main>
  );
}






