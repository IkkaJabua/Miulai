import MusicCard from '@/app/components/ MusicCard/ MusicCard';
import styles from './ChartsSection.module.scss';


const ChartsSection = () => {

    const ChartsData = [
        {
            
        }
    ] 

    return (
        <div className={styles.container}>
            {
                ChartsData.map((item, i) => (
                    <div className={styles.box}>
                        <MusicCard title={item.title} author={item.author} key={i} />
                    </div>
                ))
            }

        </div>
    )
}


export default ChartsSection;