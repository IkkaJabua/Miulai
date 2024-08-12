// pages/index.tsx
'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Controls from './Contorls';
import TrackDisplay from './Trackdisplay';
import style from './IndexPage.module.scss';

const tracks = [
    {
        title: 'Sugar (feat. Francesco)',
        artist: 'By Robin Schulz',
        albumArt: '/music/RobinSchluz.png',
        audio: '/music/RobinSchulz.mp3',
    },
    {
        title: 'Starboy',
        artist: 'by Weekend',
        albumArt: '/music/starBoy.png',
        audio: '/music/Starboy.mp3',
    },
    {
        title: 'Not like Us',
        artist: 'by Kendrick lamar',
        albumArt: '/music/notlikeus.jpg',
        audio: '/music/NotLikeUs.mp3',
    },
    {
        title: 'SDEQ',
        artist: 'Mechanical Reinbow,Kordz',
        albumArt: '/music/SDEQ.jpg',
        audio: '/music/Kordz & Mechanical Rainbow - SDEQ (feat. Stephane) [OFFICIAL LYRIC VIDEO].mp3',
    },
    {
        title: 'A$AP Rocky-Sundress',
        artist: 'A$AP Rocky',
        albumArt: '/music/AsapRocky.jpg',
        audio: '/music/A$AP Rocky - Sundress (Official Video).mp3',
    },
    
];

const IndexPage: React.FC = () => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(50);
    const [isLooping, setIsLooping] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    const currentTrack = tracks[currentTrackIndex];

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = volume / 100;
            audio.loop = isLooping;
        }
    }, [volume, isLooping]);

    const playNextTrack = useCallback(() => {
        const newIndex = isShuffling
            ? Math.floor(Math.random() * tracks.length)
            : (currentTrackIndex + 1) % tracks.length;
        setCurrentTrackIndex(newIndex);
        setCurrentTime(0);
        setIsPlaying(true);
    }, [isShuffling, currentTrackIndex]);

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

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(error => console.error("Playback failed:", error));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentTrackIndex]);

    const playPause = useCallback(() => {
        setIsPlaying(prevIsPlaying => !prevIsPlaying);
    }, []);

    const playPrevious = useCallback(() => {
        const newIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        setCurrentTrackIndex(newIndex);
        setCurrentTime(0);
        setIsPlaying(true);
    }, [currentTrackIndex]);

    const handleVolumeChange = useCallback((newVolume: number) => {
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume / 100;
        }
    }, []);

    const toggleLoop = useCallback(() => {
        setIsLooping(prevIsLooping => !prevIsLooping);
    }, []);

    const toggleShuffle = useCallback(() => {
        setIsShuffling(prevIsShuffling => !prevIsShuffling);
    }, []);

    const handleTimeChange = useCallback((newTime: number) => {
        setCurrentTime(newTime);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
        }
    }, []);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className={style.main}>

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

                <audio
                    ref={audioRef}
                    src={currentTrack.audio}
                    onError={() => console.error('Audio failed to load')}
                />

            </div>

        </div>
    );
};

export default IndexPage;