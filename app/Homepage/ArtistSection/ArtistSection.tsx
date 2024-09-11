import Card from '@/app/components/Card/Card';
import styles from './ArtistSection.module.scss'

const ArtistData = [
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
        title: 'SZA',
        id: 3
    },

    {
        image: '/image/test.png',
        title: 'Ed Sheeran',
        id: 4
    },

    {
        image: '/image/test.png',
        title: 'Ed Sheeran',
        id: 5
    },
]

const ArtistSection = () => {

    return (
        <div className={styles.container}>
            <div className={styles.art}>
                {
                    ArtistData.map((item, i) => (
                        <div className={styles.box} key={item.id}>
                            <Card header={''} key={item.id} image={item.image} title={item.title} imageStyle={'round'} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default ArtistSection;