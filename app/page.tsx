'use client';
import styles from '../app/page.module.scss';
import Card from './components/Card/Card';
import Playlist from './components/Playlist/Playlist';
import Homepage from './Homepage/page';


export default function Home() {
  return (
    <main className={styles.main}>
        <Homepage />
    </main>
  );
}






    