import MusicCard from '@/app/components/ MusicCard/ MusicCard';
import styles from './ChartsSection.module.scss';


const ChartsData = [
    {
        title: 'Sugar (feat. Francesco)',
        author: 'By Robin Schulz',
    },
    {
        title: 'Sugar (feat. Francesco)',
        author: 'By Robin Schulz',
    },
    {
        title: 'Sugar (feat. Francesco)',
        author: 'By Robin Schulz',
    },
    {
        title: 'Sugar (feat. Francesco)',
        author: 'By Robin Schulz',
    },
    {
        title: 'Sugar (feat. Francesco)',
        author: 'By Robin Schulz',
    },
    {
        title: 'Sugar (feat. Francesco)',
        author: 'By Robin Schulz',
    },
]


const ChartsSection = () => {

    return (
        <div className={styles.container}>
            <MusicCard />
        </div>
    )
}


export default ChartsSection;