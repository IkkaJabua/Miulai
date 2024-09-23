import React from 'react';
import Image from 'next/image';
import HeartShapeBtn from '../heatShapeIcon/HeartShapeIcn';
import style from './TrackDisplay.module.scss';

interface TrackDisplayProps {
    currentTrack: {
        title: string;
        artist: string;
        albumArt: string;
    };
    onAlbumArtClick: () => void; // Added the onAlbumArtClick prop
}

const TrackDisplay: React.FC<TrackDisplayProps> = ({ currentTrack, onAlbumArtClick }) => {
    if (!currentTrack) {
        // Return a default placeholder or nothing if no currentTrack is provided
        return (
            <div className={style.container}>
                <p>No track selected</p>
            </div>
        );
    }

    return (
        <div className={style.container}>
            <div onClick={onAlbumArtClick} className={style.albumArt}> {/* Clickable area */}
                <Image
                    src={currentTrack.albumArt || '/defaultAlbumArt.jpg'} // Fallback if albumArt is missing
                    alt="AlbumArt"
                    width={80}
                    height={80}
                    className={style.img}
                />
            </div>
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
