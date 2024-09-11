import React from 'react';
import Image from 'next/image'
import Button from '../Button/Button';
import style from './TrackDisplay.module.scss';
import HeartShapeBtn from '../heatShapeIcon/HeartShapeIcn';

interface TrackDisplayProps {
    currentTrack: {
        title: string;
        artist: string;
        albumArt: string;
    };
}

const TrackDisplay = ({ currentTrack }: TrackDisplayProps) => {
    return (
        <div className={style.container}>
            <Image src={currentTrack.albumArt} alt="Album Art" width={80} height={80} className={style.img} />
            <div className={style.like}>
                <div className={style.text}>
                    <div className={style.likebtn}>
                        <HeartShapeBtn isActive={true} isDisabled={false} onClick={() => console.log('Button clicked!')} />
                    </div>
                    <span className={style.title}>{currentTrack.title}</span>
                    <span className={style.artist}>{currentTrack.artist}</span>

                </div>

            </div>

        </div>
    );
};

export default TrackDisplay;
