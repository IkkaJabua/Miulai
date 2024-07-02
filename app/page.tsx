'use client'
import TrackDisplay from "./components/Musicplayer/Trackdisplay";
import "./page.module.scss";
import { Bentham } from "next/font/google";
import Controls from "./components/Musicplayer/progressBar";

export default function Home() {
  return (
    <main>
      <button>▶️</button>
      <Controls 
      isPlaying={false}
      isLooping={false}
      isShuffling={false}
      currentTime={10}
      duration={20}
       />
    </main>
  );
}
