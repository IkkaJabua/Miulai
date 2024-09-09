import MusicCard from '@/app/components/ MusicCard/ MusicCard';
import styles from './ChartsSection.module.scss';


const ChartsSection = () => {

    const Charts = [
        {
            title: 'Sugar (feat. Francesco)',
            subtitle: 'By Robin Schulz',
            id:1
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                {
                    Charts.map((item) => (
                        <MusicCard key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}


export default ChartsSection;