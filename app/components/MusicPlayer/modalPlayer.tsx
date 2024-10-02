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
  onClose: () => void; // Function to close the modal
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
        <Icon name="close" alt="Close" width={24} height={24} />
      </button>

      <Fullscreen currentTrack={currentTrack} />

      <FullControls
              isPlaying={isPlaying}
              onPlayPause={onPlayPause}
              onNext={onNext}
              onPrevious={onPrevious}
              currentTime={currentTime}
              duration={duration}
              onTimeChange={() => { } }
              volume={volume}
              onVolumeChange={() => { } }
              isLooping={false}
              onToggleLoop={() => { } }
              isShuffling={false}
              onToggleShuffle={() => { } }
              backgroundImage={''} name={undefined} isActive={undefined}      />
    </div>
  );
};

export default ModalPlayer;
