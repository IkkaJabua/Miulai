import React from 'react';
import Image from 'next/image';
import HeartShapeBtn from '../heatShapeIcon/HeartShapeIcn';
import style from './TrackDisplay.module.scss';

interface Track {
    title: string;
    artist: string;
    albumArt: string;
}

interface TrackDisplayProps {
    currentTrack?: Track | null; 
}

const TrackDisplay: React.FC<TrackDisplayProps> = ({ currentTrack }) => {
    if (!currentTrack) {
        return (
            <div className={style.container}>
                <p>No track selected</p>
            </div>
        );
    }
  
    return (
        <div className={style.container}>
            <Image
                src={currentTrack.albumArt || '/defaultAlbumArt.jpg'} 
                alt="Album Art"
                width={80}
                height={80}
                className={style.img}
            />
            <div className={style.like}>
                <div className={style.text}>
                    <div className={style.likebtn}>
                        <HeartShapeBtn
                            isActive={true}
                            isDisabled={false}
                            onClick={() => console.log('Like button clicked!')}
                        />
                    </div>
                    <span className={style.title}>{currentTrack.title || 'Unknown Title'}</span> {/* Fallback for title */}
                    <span className={style.artist}>{currentTrack.artist || 'Unknown Artist'}</span> {/* Fallback for artist */}
                </div>
            </div>
        </div>
    );
};

export default TrackDisplay;
