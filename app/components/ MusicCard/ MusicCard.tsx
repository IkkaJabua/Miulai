import { FC, useEffect, useState } from 'react';
import HeartShapeBtn from '../heatShapeIcon/HeartShapeIcn';
import styles from './ MusicCard.module.scss';
import Image from 'next/image';
import Playlist from '../Playlist/Playlist';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { currentTrackState, Track } from '@/app/atom/atom';

interface MusicCardProps {
    currentTrack: (track: Track) => void;
}

const MusicCard: FC<MusicCardProps> = () => {
    const [active, setActive] = useState<number | undefined>(undefined);
    const [cardData, setCardData] = useState<any[]>([]);
    const [currentTrack, setCurrentTrack] = useRecoilState(currentTrackState);

    useEffect(() => {
        axios.get('https://interstellar-1-pdzj.onrender.com/music')
            .then((response) => {
                setCardData(response.data);
                console.log('=====================', response.data[45])
                setCurrentTrack(response.data[45])

            });
    }, []);

    const play = (item: Track) => {
        setCurrentTrack(item);
    };

    return (
        <div className={styles.mainContainer}>
            {cardData.map((item: any) => (
                <div
                    className={styles.container}
                    key={item.id}
                    onClick={() => play(item)}
                >
                    <div className={styles.container_author}>
                        <div>
                            <Image src={item.files[0]?.url} alt={'Album cover'} width={72} height={72} />
                        </div>
                        <div className={styles.container_name}>
                            <div className={styles.music_name_font_style}>{item.name}</div>
                            <div className={styles.music_author_font_style}>{item.artistName} Daft Punk</div>
                        </div>
                    </div>
                    <div className={styles.container_detals}>
                        <div className={styles.time_font_style}>3.58</div>
                        <div className={styles.container_like_point}>
                            <HeartShapeBtn isDisabled={false} isActive={true} onClick={() => console.log('button clicked')} />
                            <div className={styles.cursor} onClick={() => setActive(active === item.id ? undefined : item.id)}>
                                <Image src={'./Dots.svg'} alt='Options button' width={24} height={24} />
                            </div>
                            <div className={styles.cellPlaylist}>
                                {active === item.id && <div className={styles.playlist}><Playlist /></div>}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MusicCard;
