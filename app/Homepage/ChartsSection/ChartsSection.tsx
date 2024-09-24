// ChartsSection.tsx
import MusicCard from '@/app/components/ MusicCard/ MusicCard';
import styles from './ChartsSection.module.scss';

const ChartsSection = () => {
    const charts = [
        {
            title: 'Sugar (feat. Francesco)',
            subtitle: 'By Robin Schulz',
            icon: 'musiccard1.svg',
            id: 1,
            time: '3:45'
        },
        // Add more tracks as needed...
    ];

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                {charts.map((track) => (
                    <MusicCard key={track.id}/>
                ))}
            </div>
        </div>
    );
};

export default ChartsSection;
