import React from 'react';
import Image from 'next/image';
import style from './Trackdisplay.module.scss';

interface Props {
    isPlaying: boolean;
    onPlayPause?: () => void;
    onPrevious?: () => void;
    onNext?: () => void;
    onVolumeChange?: (volume: number) => void;
    volume?: number;
    isLooping?: boolean;
    onToggleLoop?: () => void;
    isShuffling?: boolean;
    onToggleShuffle?: () => void;
    currentTime?: number;
    duration?: number;
    onTimeChange?: (newTime: number) => void;
}

const Controls = ({
    isPlaying,
    onPlayPause,
    onPrevious,
    onNext,
    onVolumeChange,
    volume,
    isLooping,
    onToggleLoop,
    isShuffling,
    onToggleShuffle,
    currentTime,
    duration,
    onTimeChange,
}: Props) => {
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseInt(e.target.value, 10);
        onVolumeChange(newVolume);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        onTimeChange(newTime);
    };

    return (
        <>

            <div className={style.container}>

                <div className={style.buttons}>
                    <button onClick={onToggleShuffle} className={style.btn}>
                        <Image src={isShuffling ? ".svg" : "/shuffle.png"} alt="Shuffle" width={24} height={24} />
                    </button>
                    <button onClick={onPrevious} className={style.btn}>
                        <Image src="/previous.png" alt="Previous" width={24} height={24} />
                    </button>
                    <button onClick={onPlayPause} className={`${style.btn} ${style.circle}`}>
                        <Image src={isPlaying ? "/pause.svg" : "/Play.png"} alt={isPlaying ? "Pause" : "Play"} width={28} height={28} />
                    </button>
                    <button onClick={onNext} className={style.btn}>
                        <Image src="/previous-next.png" alt="Next" width={24} height={24} />
                    </button>
                    <button onClick={onToggleLoop} className={style.btn}>
                        <Image src={isLooping ? "/repeat-one.png" : "/repeat.png"} alt="Loop" width={24} height={24} />
                    </button>
                </div>

                <div className={style.time}>
                    <span className={style.timing}>{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleTimeChange}
                        aria-label="Seek"
                        className={style.load}
                    />
                    <span className={style.timing}>{formatTime(duration)}</span>
                </div>

            </div>


            <div className={style.volume}>
                <Image src="/volume-loud.png" alt="Volume" width={24} height={24} />
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                    aria-label="Volume"
                    className={style.volSetting}
                />
            </div>
        </>
    );
};

export default Controls;