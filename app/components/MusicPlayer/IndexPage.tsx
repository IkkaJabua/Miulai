import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import style from './IndexPage.module.scss';
import TrackDisplay from './TrackDisplay';
import SliderMobile from './Slider/Slider';
import { currentTrackState, isPlayingState, Track } from '@/app/atom/atom';
import axios from 'axios';
import Controls from './Contorls';

const IndexPage: React.FC = () => {
    const [currentTrack, setCurrentTrack] = useRecoilState(currentTrackState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [volume, setVolume] = useState<number>(50);
    const [isLooping, setIsLooping] = useState<boolean>(false);
    const [isShuffling, setIsShuffling] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    const fetchTrack = async (trackId: number) => {
        try {
            const response = await axios.get(`https://interstellar-1-pdzj.onrender.com/music/${trackId}`);
            const track: Track = response.data;
            setCurrentTrack(track);
            setIsPlaying(true);
        } catch (error) {
            console.error('Error fetching the track:', error);
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.src = currentTrack?.audio || 'https://interstellar-1-pdzj.onrender.com/music';
            if (isPlaying) {
                audio.play().catch(error => console.error('Playback failed:', error));
            }
        }
    }, [currentTrack, isPlaying]);

    const playNextTrack = useCallback(() => {
        // Handle logic for playing the next track
    }, [currentTrack]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        };

        const handleTrackEnded = () => {
            playNextTrack();
        };

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('ended', handleTrackEnded);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('ended', handleTrackEnded);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, [playNextTrack]);

    const playPause = useCallback(() => {
        setIsPlaying(prev => !prev);
    }, []);

    const handleVolumeChange = useCallback((newVolume: number) => {
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume / 100;
        }
    }, []);

    return (
        <div className={style.main}>
            <SliderMobile
                isPlaying={isPlaying}
                onPlayPause={playPause}
                onVolumeChange={handleVolumeChange}
                volume={volume}
                isLooping={isLooping}
                isShuffling={isShuffling}
                currentTime={currentTime}
                duration={duration} name={undefined} isActive={undefined} onPrevious={function (): void {
                    throw new Error('Function not implemented.');
                } } onNext={function (): void {
                    throw new Error('Function not implemented.');
                } } onToggleLoop={function (): void {
                    throw new Error('Function not implemented.');
                } } onToggleShuffle={function (): void {
                    throw new Error('Function not implemented.');
                } } onTimeChange={function (newTime: number): void {
                    throw new Error('Function not implemented.');
                } } backgroundImage={''}            />
            <div className={style.container}>
                <TrackDisplay currentTrack={currentTrack} />
                <Controls
                    isPlaying={isPlaying}
                    onPlayPause={playPause}
                    onVolumeChange={handleVolumeChange}
                    volume={volume}
                    isLooping={isLooping}
                    isShuffling={isShuffling}
                    currentTime={currentTime}
                    duration={duration} name={undefined} isActive={undefined} onPrevious={function (): void {
                        throw new Error('Function not implemented.');
                    } } onNext={function (): void {
                        throw new Error('Function not implemented.');
                    } } onToggleLoop={function (): void {
                        throw new Error('Function not implemented.');
                    } } onToggleShuffle={function (): void {
                        throw new Error('Function not implemented.');
                    } } onTimeChange={function (newTime: number): void {
                        throw new Error('Function not implemented.');
                    } } backgroundImage={''}                />
                <audio ref={audioRef} />
            </div>
        </div>
    );
};

export default IndexPage;
