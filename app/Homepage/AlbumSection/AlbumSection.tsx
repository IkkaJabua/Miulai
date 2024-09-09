import Card from '@/app/components/Card/Card';
import styles from './AlbumSection.module.scss';

const AlbumData = [
    {
        image: '/image/1.png',
        title: 'Fever Dream',
        subtitle: 'Of Monsters And Men',
    },

    {
        image: '/image/2.png',
        title: 'I Hear You',
        subtitle: 'Peggy Gou',
    },

    {
        image: '/image/3.png',
        title: 'What Happened To Heart?',
        subtitle: 'Aurora',
    },

    {
        image: '/image/test.png',
        title: 'Radical Optimism',
        subtitle: 'Dua Lipa',
    },

    {
        image: '/image/test.png',
        title: 'Radical Optimism',
        subtitle: 'Dua Lipa',
    },
]

const AlbumSection = () => {

    return (
        <div className={styles.container}>
            <div className={styles.album}>
                {
                    AlbumData.map((item, i) => (
                        <div className={styles.box}>
                            <Card header={''} image={item.image} title={item.title} subtitle={item.subtitle} imageStyle={'normal'} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default AlbumSection;