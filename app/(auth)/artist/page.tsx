'use client';
import Header from '@/app/components/Header/Header';
import styles from './page.module.scss';
import News from '@/app/components/News/News';
import TabbedNav from '@/app/components/TabbedNav/TabbedNav';
import { newsImageState } from '@/app/state';
import { useRecoilState } from 'recoil';



const Artist = () => {
      const [artistPhoto, setArtistPhoto] = useRecoilState(newsImageState);


    return (
      <div className={styles.container}>
        <Header />
        <News title={"Peggy Gou"} image={`${artistPhoto}`} plays={"509,678"} />
        <TabbedNav biographyText={""} />
      </div>
    );
}


export default Artist;