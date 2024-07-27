'use client';


import ModuleList from "./components/ModuleList/ModuleList";
import IndexPage from "./components/MusicPlayer/IndexPage";
import "./page.module.scss";
import Button from "./components/Button/Button";
import Playlist from "./components/Playlist/Playlist";
import AddPlaylist from "./components/Playlist/AddPlaylist/AddPlaylist";
import Input from "./components/Input/Input";
import CreatePlaylist from "./components/Playlist/CreatePlaylist/CreatePlaylist";
import Card from "./components/Card/Card";
import TrackDisplay from "./components/MusicPlayer/Trackdisplay";
import Controls from "./components/MusicPlayer/Contorls";



export default function Home() {
  return (
    <main>
      <Card header={""} image={"/test-man-image.svg"} title={"Genesys ||"} subtitle={"Anyma"} imageStyle={"normal"} />
      
     
    </main>
  );
}
