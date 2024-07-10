'use client';
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Card from "./components/Card/Card";
import Heart from "./components/CardItems/CardHeart/Heart";
import ItemsUnion from "./components/CardItems/ItemsUnion/ItemsUnion";
import "./page.module.scss";
import News from "./components/News/News";
import image from '../../../public/frame.png'


export default function Home() {
  return (
    <main>
      <News title={"Top Hit  Of the week"} image={"frame.png"} />
    </main>
  );
}
