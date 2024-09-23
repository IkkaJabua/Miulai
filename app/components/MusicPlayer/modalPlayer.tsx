import React from 'react';
import style from './modalPlayer.module.scss';
import Controls from './Contorls';
import TrackDisplay from './TrackDisplay';
import Icon from '../Icon/Icon';
import Fullscreen from './fullScreen';
import FullControls from './fullControls';

interface ModalPlayerProps {
    currentTrack: {
        title: string;
        artist: string;
        albumArt: string;
    };
    isPlaying: boolean;
    onPlayPause: () => void;
    onNext: () => void;
    onPrevious: () => void;
    onClose: () => void;
    currentTime: number;
    duration: number;
    volume: number;

}

const ModalPlayer: React.FC<ModalPlayerProps> = ({
    currentTrack,
    isPlaying,
    onPlayPause,
    onNext,
    onPrevious,
    onClose,
    currentTime,
    duration,
    volume,

}) => {
    return (
        <div className={style.modalContainer}>

            <button className={style.closeButton} onClick={onClose}>
                <Icon  name="close" alt={''} width={24} height={24} />
            </button>


            <Fullscreen currentTrack={currentTrack} />
            {
                <FullControls
                    isPlaying={isPlaying}
                    onPlayPause={onPlayPause}
                    onNext={onNext}
                    onPrevious={onPrevious}
                    currentTime={currentTime}
                    duration={duration}
                    onTimeChange={() => { }} // Adjust this according to your Slider component
                    volume={volume}
                    name={undefined}
                    isActive={undefined}
                    isLooping={false}
                    onToggleLoop={function (): void { throw new Error('Function not implemented.'); }}
                    isShuffling={false}
                    onToggleShuffle={function (): void { }}
                    backgroundImage={''} onVolumeChange={function (volume: number): void {
                        throw new Error('Function not implemented.');
                    }} />}
        </div>
    );
};

export default ModalPlayer;
