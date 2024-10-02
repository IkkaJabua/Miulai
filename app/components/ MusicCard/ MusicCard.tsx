import { useEffect, useState } from 'react';
import HeartShapeBtn from '../heatShapeIcon/HeartShapeIcn';
import Icon from '../Icon/Icon';
import Image from 'next/image';
import styles from './ MusicCard.module.scss'
import Playlist from '../Playlist/Playlist';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { clickFetchState, globalMusicState, mudicIDState, oneArrayMusicState } from '@/app/state';
import Cookies from 'js-cookie';

const MusicCard = () => {
  const [active, setActive] = useState<number>();
  const [musicID, setMusicId] = useRecoilState(mudicIDState);
  const token = Cookies.get("token");
  const [cardData, setCardData] = useState<any>([]);
  const [clickFetch, setClickFetch] = useRecoilState(clickFetchState);
  const [musicArrayTwo, setMusicArrayTwo] = useRecoilState<any>(oneArrayMusicState);
  const [globalMusic, setGlobalMusic] = useRecoilState<any>(globalMusicState)






  const [fetchMusic, setfetchMusic] = useState()

  // Fetching all music data
  useEffect(() => {
    axios.get("https://interstellar-1-pdzj.onrender.com/music", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((r) => {
        setCardData(r.data);
        console.log(r.data, 'Music list fetched');
        
      })
      .catch((error) => {
        console.error("Error fetching music list:", error);
      });
  }, [clickFetch]);


  return (
    <div className={styles.mainContainer}>
      {cardData.slice(0,6).map((item: any, index: any) => (
        <div
          className={styles.container}
          key={item.id}
          onClick={() => {
            setMusicArrayTwo(cardData)
            setMusicId(item.id)
            setGlobalMusic(item.id)
            console.log(item.id)
          }}
      

        >
          <div className={styles.container_author}>
            <div>
              <Image
                className={styles.img}
                src={item.albumCover}
                alt={"album cover"}
                width={72}
                height={72}
              />
            </div>
            <div className={styles.container_name}>
              <div className={styles.music_name_font_style}>{item.name}</div>
              <div className={styles.music_author_font_style}>
                {item.artistName}
              </div>
            </div>
          </div>
          <div className={styles.container_detals}>
            <div className={styles.time_font_style}>3:58</div>
            <div className={styles.container_like_point}>
              <HeartShapeBtn
                isDisabled={false}
                isActive={true}
                onClick={() => console.log("button clicked")}
              />
              <div
                className={styles.cursor}
                onClick={() => setActive(active === item.id ? undefined : item.id)}
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
