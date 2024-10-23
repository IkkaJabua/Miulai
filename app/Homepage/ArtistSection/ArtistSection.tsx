import Card from "@/app/components/Card/Card";
import styles from "./ArtistSection.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { albumidState, clickFetchState } from "@/app/state";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import ArtistCard from "../../components/ArtistCard/ArtistCard";




const ArtistSection = () => {
  const [atrist, setArtist] = useState([]);
  const [clickFetch, setClickFetch] = useRecoilState(clickFetchState);
  const router = useRouter();
  const [albumId, setAlbumId] = useRecoilState(albumidState);





  useEffect(() => {
    axios.get(`https://interstellar-1-pdzj.onrender.com/author`).then((r) => {
      setArtist(r.data);
    });
  }, [clickFetch]);

  return (
    <div className={styles.container}>
      <div className={styles.art}>
        {atrist.slice(0,5).map((item: any) => (
          <div className={styles.box} key={item.id} onClick={() => router.push(`/artistlist/${item.id}`)}>
            {/* <Card
              header={""}
              key={item.id}
              image={item.files[0]?.url}
              title={item.firstName}
              imageStyle={"round"}
            /> */}

            <ArtistCard 
              header={""}
              key={item.id}
              image={item.files[0]?.url}
              title={item.firstName}
              imageStyle={"round"}
             />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistSection;
