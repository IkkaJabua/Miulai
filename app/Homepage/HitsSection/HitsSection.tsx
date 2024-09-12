import Card from '@/app/components/Card/Card';
import styles from './HitsSection.module.scss';

const hitsData = [
    {
        image: '/image/test.png',
        subtitle: 'Anyma',
        title: 'Genesys ||',
        id: 1
    },

    {
        image: '/image/test.png',
        subtitle: 'Anyma',
        title: 'Genesys ||',
        id: 2
    },

    {
        image: '/image/test.png',
        subtitle: 'Anyma',
        title: 'Genesys ||',
        id: 3
    },

    {
        image: '/image/test.png',
        subtitle: 'Anyma',
        title: 'Genesys ||',
        id: 4
    },

    {
        image: '/image/test.png',
        subtitle: 'Anyma',
        title: 'Genesys ||',
        id: 5
    },
]

const HitsSection = () => {

    return (
        <div className={styles.container}>
            <div className={styles.hits}>
                {
                    hitsData.map((item, i) => (
                        <div className={styles.box} key={item.id}>
                            <Card header={''} key={item.id} image={item.image} subtitle={item.subtitle} title={item.title} imageStyle={'normal'} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default HitsSection;