'use client';

import AddPlaylist from "./components/AddPlaylist/AddPlaylist";
import CreatePlaylist from "./components/AddPlaylist/CreatePlaylist/CreatePlaylist";
import NewPlaylist from "./components/AddPlaylist/NewPlaylist/NewPlaylist";
import ModuleList from "./components/ModuleList/ModuleList";
import IndexPage from "./components/MusicPlayer/IndexPage";
import "./page.module.scss";

export default function Home() {
  return (
    <main>
        <AddPlaylist />
        <CreatePlaylist />
    </main>
  );
}
