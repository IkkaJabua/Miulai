import Card from '@/app/components/Card/Card';
import styles from './AlbumSection.module.scss';

const AlbumData = [
    {
        image: '/image/1.png',
        title: 'Fever Dream',
        subtitle: 'Of Monsters And Men',
        id: 1
    },

    {
        image: '/image/2.png',
        title: 'I Hear You',
        subtitle: 'Peggy Gou',
        id: 2
    },

    {
        image: '/image/3.png',
        title: 'What Happened To Heart?',
        subtitle: 'Aurora',
        id: 3
    },

    {
        image: '/image/test.png',
        title: 'Radical Optimism',
        subtitle: 'Dua Lipa',
        id: 4
    },

    {
        image: '/image/test.png',
        title: 'Radical Optimism',
        subtitle: 'Dua Lipa',
        id: 5
    },
]

const AlbumSection = () => {

    return (
        <div className={styles.container}>
            <div className={styles.album}>
                {
                    AlbumData.map((item, i) => (
                        <div className={styles.box} key={item.id}>
                            <Card header={''} key={item.id} image={item.image} title={item.title} subtitle={item.subtitle} imageStyle={'normal'} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default AlbumSection;