import React from 'react';
import Image from 'next/image'
import style from './TrackDisplay.module.scss';
// import HeartShapeBtn from '../LikeButton/HeartShape';

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
            <Image src={currentTrack.albumArt} alt="Album Art" width={80} height={80}  className={style.img}/>
            <div className={style.text}>

                <span className={style.title}>{currentTrack.title}</span>
                <span className={style.artist}>{currentTrack.artist}</span>

            </div>
            {/* <HeartShapeBtn isActive={true} isDisabled={false} onClick={() => console.log('Button clicked!')} /> */}


        </div>
    );
};

export default TrackDisplay;
