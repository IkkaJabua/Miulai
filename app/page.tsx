'use client';
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Card from "./components/Card/Card";
import Heart from "./components/CardItems/CardHeart/Heart";
import ItemsUnion from "./components/CardItems/ItemsUnion/ItemsUnion";
import "./page.module.scss";
import MusicCard from "./components/ MusicCard/ MusicCard";

export default function Home() {
  return (
    <main>
      <MusicCard title="Illusion" author="By Dua Lipa" />
    </main>
  );
}
