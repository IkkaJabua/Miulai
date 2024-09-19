// MusicCard.tsx
import { useAtom } from 'jotai';
import { currentTrackAtom } from '@/app/atom'; // Import the atom
import { useState } from 'react';
import styles from './ MusicCard.module.scss'
import Image from 'next/image';
import HeartShapeBtn from '../heatShapeIcon/HeartShapeIcn';
import Playlist from '../Playlist/Playlist';

const MusicCard = ({ track }: { track: any }) => {
    const [active, setActive] = useState<number>();
    const [, setCurrentTrack] = useAtom(currentTrackAtom); 

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container} key={track.id}>
                <div className={styles.container_author} onClick={() => setCurrentTrack(track)}>
                    <div>
                        <Image src={`./icon/${track.icon}`} alt='music cover' width={72} height={72} />
                    </div>
                    <div className={styles.container_name}>
                        <div className={styles.music_name_font_style}>{track.title}</div>
                        <div className={styles.music_author_font_style}>{track.author}</div>
                    </div>
                </div>
                <div className={styles.container_detals}>
                    <div className={styles.time_font_style}>{track.time}</div>
                    <div className={styles.container_like_point}>
                        <HeartShapeBtn isDisabled={false} isActive={true} onClick={() => (console.log('button clicked'))} />
                        <div className={styles.cursor} onClick={() => setActive(active === track.id ? undefined : track.id)}>
                            <Image src={'./Dots.svg'} alt='Dots button' width={24} height={24} />
                        </div>
                        <div className={styles.cellPlaylist}>
                            {active === track.id && (
                                <div className={styles.playlist}>
                                    <Playlist />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicCard;
