// pages/index.tsx
"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Controls from "./Contorls";
import style from "./IndexPage.module.scss";
import TrackDisplay from "./TrackDisplay";
import SliderMobile from "./Slider/Slider";
import axios from "axios";

const tracks = [
  {
    title: "Sugar (feat. Francesco)",
    artist: "By Robin Schulz",
    albumArt: "/music/RobinSchluz.png",
    audio: "/music/RobinSchulz.mp3",
  },
  {
    title: "Kinetic Cyclone",
    artist: "Sample",
    albumArt: "/music/toko.png",
    audio: "/music/TokosTrack.mp3.mp3",
  },
  {
    title: "Starboy",
    artist: "by Weekend",
    albumArt: "/music/starBoy.png",
    audio: "/music/Starboy.mp3",
  },
  {
    title: "Not like Us",
    artist: "by Kendrick lamar",
    albumArt: "/music/notlikeus.jpg",
    audio: "/music/NotLikeUs.mp3",
  },
  {
    title: "SDEQ",
    artist: "Mechanical Reinbow,Kordz",
    albumArt: "/music/SDEQ.jpg",
    audio:
      "/music/Kordz & Mechanical Rainbow - SDEQ (feat. Stephane) [OFFICIAL LYRIC VIDEO].mp3",
  },
  {
    title: "A$AP Rocky-Sundress",
    artist: "A$AP Rocky",
    albumArt: "/music/AsapRocky.jpg",
    audio: "/music/A$AP Rocky - Sundress (Official Video).mp3",
  },
];

const IndexPage: React.FC = () => {
  const [currentTrackId, setCurrentTrackId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = tracks[currentTrackId];

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
      : (currentTrackId + 1) % tracks.length;
    setCurrentTrackId(newIndex);
    setCurrentTime(0);
    setIsPlaying(true);
  }, [isShuffling, currentTrackId]);

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

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleTrackEnded);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleTrackEnded);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [playNextTrack]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((error) => console.error("Playback failed:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackId]);

  const playPause = useCallback(() => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  }, []);

  const playPrevious = useCallback(() => {
    const newIndex = (currentTrackId - 1 + tracks.length) % tracks.length;
    setCurrentTrackId(newIndex);
    setCurrentTime(0);
    setIsPlaying(true);
  }, [currentTrackId]);

  const handleVolumeChange = useCallback((newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  }, []);

  const toggleLoop = useCallback(() => {
    setIsLooping((prevIsLooping) => !prevIsLooping);
  }, []);

  const toggleShuffle = useCallback(() => {
    setIsShuffling((prevIsShuffling) => !prevIsShuffling);
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
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const [music, setMusic] = useState<any>();

  useEffect(() => {
    axios.get("https://interstellar-1-pdzj.onrender.com/music/1").then((r) => {
      console.log(r.data.files[0].url);
      setMusic(r.data.files[0].url);
    });
  }, []);

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
        backgroundImage={""}
        name={undefined}
        isActive={undefined}
      />
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
          backgroundImage={""}
          name={undefined}
          isActive={undefined}
        />

        <audio
          ref={audioRef}
          src={music}
          onError={() => console.error("Audio failed to load")}
        />
      </div>
    </div>
  );
};

export default IndexPage;
