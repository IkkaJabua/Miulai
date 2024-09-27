"use client";

import { useEffect, useState } from "react";
import CardsHeader from "../components/CardsHeader/CardsHeader";
import Header from "../components/Header/Header";
import News from "../components/News/News";
import AlbumSection from "../Homepage/AlbumSection/AlbumSection";
import ArtistSection from "../Homepage/ArtistSection/ArtistSection";
import ChartsSection from "../Homepage/ChartsSection/ChartsSection";
import HitsSection from "../Homepage/HitsSection/HitsSection";
import styles from "./page.module.scss";
import axios from "axios";

export default function Home() {
  const [inputValue, setInputValue] = useState();

  const inputChange = (e: any) => {
    // const newValue = e.target.value;
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const [searchItems, setSearchItems] = useState<any>();

  useEffect(() => {
    axios
      .get(
        `https://interstellar-1-pdzj.onrender.com/search?search=${inputValue}`
      )
      .then(async (r) => {
        setSearchItems(r.data.authors);
        console.log(r.data.authors);
      });
  }, [inputValue]);

  return (
    <main className={styles.main}>
      <div>
        <Header value={inputValue} onChange={inputChange} />
        {
          searchItems?.map((item: any) => (
            <div className={styles.dropDown}>
              {/* <img  src={item.file[0]?.url}  width={100} height={100}/> */}
              {item?.artistName}
            </div>
          ))
        }
      </div>
      <News title={"Top Hit Of The Week"} image={"/image/testImg.jpg"} />
      <CardsHeader title={"Top Hits"} subtitle={""} />
      <HitsSection />
      <CardsHeader title={"Top Charts"} subtitle={""} />
      <ChartsSection />
      <CardsHeader title={"Popular Artists"} subtitle={""} />
      <ArtistSection />
      <CardsHeader title={"Popular Albums"} subtitle={""} />
      <AlbumSection />
    </main>
  );
}
