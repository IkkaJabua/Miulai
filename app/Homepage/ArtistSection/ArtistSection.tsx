import Card from "@/app/components/Card/Card";
import styles from "./ArtistSection.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";



const ArtistSection = () => {
  const [atrist, setArtist] = useState([]);

  useEffect(() => {
    axios.get(`https://interstellar-1-pdzj.onrender.com/author`).then((r) => {
      setArtist(r.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.art}>
        {atrist.map((item: any) => (
          <div className={styles.box} key={item.id}>
            <Card
              header={""}
              key={item.id}
              image={""}
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
