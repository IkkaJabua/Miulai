import { useEffect, useState } from "react";
import HeartShapeBtn from "../heatShapeIcon/HeartShapeIcn";
import Icon from "../Icon/Icon";
import styles from "./ MusicCard.module.scss";
import Image from "next/image";
import Playlist from "../Playlist/Playlist";
import axios from "axios";

const MusicCard = () => {
  const [active, setActive] = useState<number>();

  const [cardData, setCardData] = useState<any>([]);

  useEffect(() => {
    axios.get("https://interstellar-1-pdzj.onrender.com/music").then((r) => {
      setCardData(r.data);
      console.log(r.data);
    });
  }, []);

  return (
    <div className={styles.mainContainer}>
      {cardData.map((item: any, index: any) => (
        <div className={styles.container} key={item.id}>
          <div className={styles.container_author}>
            <div>
              <Image
                src={item.file?.url}
                alt={"foto ar ari "}
                width={72}
                height={72}
              />
            </div>
            <div className={styles.container_name}>
              <div className={styles.music_name_font_style}>{item.name}</div>
              <div className={styles.music_author_font_style}>
                {item.artistName} Daft Punk
              </div>
            </div>
          </div>
          <div className={styles.container_detals}>
            <div className={styles.time_font_style}>3.58</div>
            <div className={styles.container_like_point}>
              <HeartShapeBtn
                isDisabled={false}
                isActive={true}
                onClick={() => console.log("button clicked")}
              />
              <div
                className={styles.cursor}
                onClick={() =>
                  setActive(active === item.id ? undefined : item.id)
                }
              >
                <Image
                  src={"./Dots.svg"}
                  alt="Dots button"
                  width={24}
                  height={24}
                />
              </div>
              <div className={styles.cellPlaylist}>
                {active === item.id && (
                  <div className={styles.playlist}>
                    <Playlist />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicCard;
