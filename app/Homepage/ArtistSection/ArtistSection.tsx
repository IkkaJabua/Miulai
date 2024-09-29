import Card from "@/app/components/Card/Card";
import styles from "./ArtistSection.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { clickFetchState } from "@/app/state";
import Cookies from 'js-cookie';




const ArtistSection = () => {
  const [atrist, setArtist] = useState([]);
  const [clickFetch, setClickFetch] = useRecoilState(clickFetchState);



  useEffect(() => {
    axios.get(`https://interstellar-1-pdzj.onrender.com/author`).then((r) => {
      setArtist(r.data);
    });
  }, [clickFetch]);

  return (
    <div className={styles.container}>
      <div className={styles.art}>
        {atrist.map((item: any) => (
          <div className={styles.box} key={item.id}>
            <Card
              header={""}
              key={item.id}
              image={item.files[0]?.url}
              title={item.title}
              imageStyle={"round"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistSection;
