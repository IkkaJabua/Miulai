import Card from '@/app/components/Card/Card';
import styles from './HitsSection.module.scss';

const hitsData = [
    {
        image: '/image/test.png',
        subtitle: 'Anyma',
        title: 'Genesys ||',
    },

    {
        image: '/image/test.png',
        subtitle: 'Anyma',
        title: 'Genesys ||',
    },

    {
        image: '/image/test.png',
        subtitle: 'Anyma',
        title: 'Genesys ||',
    },

    {
        image: '/image/test.png',
        subtitle: 'Anyma',
        title: 'Genesys ||',
    },
]

const HitsSection = () => {

    return (
        <div className={styles.container}>
            <div className={styles.hits}>
                {
                    hitsData.map((item, i) => (
                        <div className={styles.box}>
                            <Card header={''} image={item.image} subtitle={item.subtitle} title={item.title} imageStyle={'normal'} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default HitsSection;