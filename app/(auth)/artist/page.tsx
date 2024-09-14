'use client';
import Header from '@/app/components/Header/Header';
import styles from './page.module.scss';
import News from '@/app/components/News/News';
import TabbedNav from '@/app/components/TabbedNav/TabbedNav';


const Artist = () => {

    return(
        <div className={styles.container}>
            <Header />
            <News 
            title={'Peggy Gou'} 
            image={'/image/artist-demo-image.png'} 
            plays={'509,678'} />
            <TabbedNav />
        </div>
    )
}


export default Artist;