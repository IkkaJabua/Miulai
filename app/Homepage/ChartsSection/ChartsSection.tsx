import { FC } from 'react';
import styles from './ChartsSection.module.scss';
import MusicCard from '@/app/components/ MusicCard/ MusicCard';

interface ChartsSectionProps {
    onSelectTrack: (track: any) => void;
}

const ChartsSection: FC<ChartsSectionProps> = ({ onSelectTrack }) => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <MusicCard currentTrack={onSelectTrack} />
            </div>
        </div>
    );
};

export default ChartsSection;
