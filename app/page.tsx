'use client';
import Card from "./components/Card/Card";
import Heart from "./components/CardItems/CardHeart/Heart";
import ItemsUnion from "./components/CardItems/ItemsUnion/ItemsUnion";
import "./page.module.scss";

export default function Home() {
  return (
    <main>
      <Card header={"Song Card"} image={"/song-card.svg"} subtitle={"Anyma"} title={"Genesys II"} imageStyle={'normal'}  />
    </main>
  );
}
