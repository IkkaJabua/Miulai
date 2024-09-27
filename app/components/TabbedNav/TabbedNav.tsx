import Card from "../Card/Card";
import Tables from "../Table/Table";
import styles from "./TabbedNav.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

type Props = {
  biographyText: string;
};


const TabbedNav = (props: Props) => {
  const [activeTab, setActiveTab] = useState("topSongs");

  const onTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get(`https://interstellar-1-pdzj.onrender.com/album`).then((r) => {
      setAlbums(r.data);
      console.log(r.data);
    });
  }, []);

  // useEffect(() => {
  //   axios.get(`https://interstellar-1-pdzj.onrender.com/author`)
  //   .then
  // })

  return (
    <div className={styles.tabbedNav}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === "topSongs" ? styles.active : ""}`}
          onClick={() => onTabClick("topSongs")}
        >
          Top Songs
        </button>

        <button
          className={`${styles.tab} ${activeTab === "albums" ? styles.active : ""}`}
          onClick={() => onTabClick("albums")}
        >
          Albums
        </button>

        <button
          className={`${styles.tab} ${activeTab === "biography" ? styles.active : ""}`}
          onClick={() => onTabClick("biography")}
        >
          Biography
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === "topSongs" && <Tables />}

        {activeTab === "albums" && (
          <div className={styles.cards}>
            {albums.map((item: any, i) => (
              <Card
                key={i}
                image={item?.file.url}
                title={item.firstName}
                imageStyle={"normal"}
              />
            ))}
          </div>
        )}

        {activeTab === "biography" && (
          <div className={styles.bio}>
            <Image
              src={"/image/albumcard-demo-image1.png"}
              alt="image"
              width={250}
              height={230}
              className={styles.image}
            />
            <div className={styles.bioRightside}>
              <h2>{albums[0].firstName}</h2>
              <p className={styles.text}>{albums[0].biography}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedNav;
