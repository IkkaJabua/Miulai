'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Controls from './Contorls';
import style from './IndexPage.module.scss';
import TrackDisplay from './TrackDisplay';
import SliderMobile from './Slider/Slider';
import { useAtom } from 'jotai';
import { currentTrackAtom } from '@/app/atom';

const IndexPage: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(50);
    const [isLooping, setIsLooping] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [currentTrack] = useAtom(currentTrackAtom); // Track selected from the chart

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = volume / 100;
            audio.loop = isLooping;
        }
    }, [volume, isLooping]);

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
    }, [currentTrack]);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(error => console.error("Playback failed:", error));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentTrack]);

    const playPause = useCallback(() => {
        setIsPlaying(prevIsPlaying => !prevIsPlaying);
    }, []);

    const handleVolumeChange = useCallback((newVolume: number) => {
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume / 100;
        }
    }, []);

    const handleTimeChange = useCallback((newTime: number) => {
        setCurrentTime(newTime);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
        }
    }, []);

    function playPrevious(): void {
        throw new Error('Function not implemented.');
    }

    function playNextTrack(): void {
        throw new Error('Function not implemented.');
    }

    function toggleLoop(): void {
        throw new Error('Function not implemented.');
    }

    function toggleShuffle(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div className={style.main}>
        <SliderMobile 
                isPlaying={isPlaying}
                onPlayPause={playPause}
                onNext={playNextTrack}
                onPrevious={playPrevious}
                onVolumeChange={handleVolumeChange}
                volume={volume}
                isLooping={isLooping}
                onToggleLoop={toggleLoop}
                isShuffling={isShuffling}
                onToggleShuffle={toggleShuffle}
                currentTime={currentTime}
                duration={duration}
                onTimeChange={handleTimeChange}
                backgroundImage={''} name={undefined} isActive={undefined}  />
        <div className={style.container}>


            
            <TrackDisplay currentTrack={currentTrack} />


            <Controls
                isPlaying={isPlaying}
                onPlayPause={playPause}
                onNext={playNextTrack}
                onPrevious={playPrevious}
                onVolumeChange={handleVolumeChange}
                volume={volume}
                isLooping={isLooping}
                onToggleLoop={toggleLoop}
                isShuffling={isShuffling}
                onToggleShuffle={toggleShuffle}
                currentTime={currentTime}
                duration={duration}
                onTimeChange={handleTimeChange}
                backgroundImage={''} name={undefined} isActive={undefined}                />
                {currentTrack && (
                    <audio
                        ref={audioRef}
                        src={currentTrack.audio}
                        onError={() => console.error('Audio failed to load')}
                    />
                )}
            </div>
        </div>
    );
};

export default IndexPage;
