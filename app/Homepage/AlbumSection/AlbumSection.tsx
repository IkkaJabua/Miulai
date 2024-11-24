import Card from "@/app/components/Card/Card";
import styles from "./AlbumSection.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { albumIdState, clickFetchState } from "@/app/state";
import { useRouter } from "next/navigation";
import ArtistCard from "../../components/ArtistCard/ArtistCard";




const AlbumSection = () => {
  const [cardData, setCardData] = useState<any>([]);
  const [clickFetch, setClickFetch] = useRecoilState(clickFetchState);
  // const [albumIDData, setAlbumIDData] = useRecoilState(albumIdState)
  const router = useRouter();





  useEffect(() => {
    axios.get("https://backend.miulai.ge/album").then((r) => {
      setCardData(r.data);
      // console.log(r.data[0].musics)
      console.log(r.data);
    });
  }, [clickFetch]);

  return (
    <div className={styles.container}>

      <div className={styles.album}>
        {cardData.map((item: any) => (
          <div className={styles.box} key={item.id} onClick={() =>   {
            router.push(`/album/${item.id}`);
            
          }}>
            {/* <Card
              header={""}
              key={item.id}
              image={item.file?.url}
              title={item.albumName}
              subtitle={item.artistName}
              imageStyle={"normal"}
            /> */}
            <ArtistCard 
              header={""}
              key={item.id}
              image={item.file?.url}
              title={item.albumName}
              subtitle={item.artistName}
              imageStyle={"normal"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumSection;

