import Card from "../Card/Card";
import Tables from "../Table/Table";
import styles from "./TabbedNav.module.scss";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRecoilState } from "recoil";
import {
  albumidState,
  artistNameState,
  clickFetchState,
  globalAlbumDataState,
  musicState,
  newsImageState,
} from "@/app/state";
import ArtistTable from "../Table/ArtistTable/ArtistTable";

type Props = {
  biographyText: string;
};

const TabbedNav = (props: Props) => {
  const [activeTab, setActiveTab] = useState("topSongs");
  const [albumId, setAlbumId] = useRecoilState(albumidState);
  const [biography, setBiography] = useState();
  const [image, setImage] = useState();
  const [albumData, setAlbumData] = useState<any[]>([]);
  const [music, setMusic] = useState<any[]>([]);

  const [artistPhoto, setArtistPhoto] = useRecoilState(newsImageState);

  const [musicArray, setMusicArray] = useRecoilState(musicState);
  const [globalalbum, setGlobalAlbum] = useRecoilState(globalAlbumDataState);
  const [artistName, setArtistName] = useRecoilState(artistNameState);
  const [clickFetch, setClickFetch] = useRecoilState(clickFetchState)



  const onTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (!!albumId) {
      axios
        .get(`https://interstellar-1-pdzj.onrender.com/author/${albumId}`)
        .then((r: any) => {
          setBiography(r.data.biography);
          setImage(r.data?.files[0]?.url);
          setArtistPhoto(r.data.files[0].url);
          setAlbumData(r.data.albums);
          console.log(r.data)
          setArtistName(r.data.firstName);
          const albumNames = r.data.albums.map((album: any) => album.albumName);
          setGlobalAlbum(albumNames);

          const allMusics = r.data.albums.reduce((acc: any[], album: any) => {
            return acc.concat(album.musics || []);
          }, []);

          setMusicArray(allMusics);
          console.log(allMusics, "2paac");
        });
    }
  }, []);

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
        {activeTab === "topSongs" && <ArtistTable />}

        {activeTab === "albums" && (
          <div className={styles.cards}>
            {albumData?.map((item: any, i) => (
              <Card
                key={i}
                image={item.file?.url}
                title={item.albumName}
                imageStyle={"normal"}
              />
            ))}
          </div>
        )}

        {activeTab === "biography" && (
          <div className={styles.bio}>
            <Image
              src={`${image}`}
              alt="image"
              width={250}
              height={230}
              className={styles.image}
            />
            <div className={styles.bioRightside}>
              <h2></h2>
              <p className={styles.text}>{biography}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedNav;
