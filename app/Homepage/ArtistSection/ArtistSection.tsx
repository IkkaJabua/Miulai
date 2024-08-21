import Card from '@/app/components/Card/Card';
import styles from './ArtistSection.module.scss'

const ArtistData = [
    {
        image: '/image/swift.png',
        title: 'Taylor Swift',
    },

    {
        image: '/image/eilish.png',
        title: 'Billie Eilish',
    },

    {
        image: '/image/sza.png',
        title: 'SZA',
    },

    {
        image: '/image/test.png',
        title: 'Ed Sheeran',
    },

    {
        image: '/image/test.png',
        title: 'Ed Sheeran',
    },

]

const ArtistSection = () => {

    return (
        <div className={styles.container}>
            {
                ArtistData.map((item, i) => (
                    <div className={styles.box}>
                        <Card header={''} image={item.image} title={item.title} imageStyle={'round'} />
                    </div>
                ))
            }
        </div>
    )
}


export default ArtistSection;