"use client";
import { Table } from "antd";
import HeartShapeBtn from "../../heatShapeIcon/HeartShapeIcn";
import type { DividerClassKey } from "@mui/material";
import styles from "./HitsTable.module.scss";
import { render } from "sass";
import { text } from "stream/consumers";
import Image from "next/image";
import { useWindowSize } from "react-use";
import { useRecoilState } from "recoil";
import { globalAlbumDataState, musicState } from "@/app/state";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const HitsTable = () => {
  //   const [musicArray, setMusicArray] = useRecoilState(musicState);
  //   const [globalalbum, setGlobalAlbum] = useRecoilState(globalAlbumDataState);

  const [albums, setAlbums] = useState([]);
  const [musics, setMusics] = useState([])


  const accessToken = Cookies.get("accessToken");

  
  useEffect(() => {
    axios.get(`https://interstellar-1-pdzj.onrender.com/album`)
    .then((r) => {
      setAlbums(r.data)
      console.log(r.data, 'albumssss');
      
      
      
    });
  }, []);

  const { width, height } = useWindowSize();
  const isMobile = width > 767;

  //

  const columns = [
    {
      title: isMobile ? "#" : "",
      dataIndex: "id",
      key: "id",
      width: "1%",
      render: (text: any, item: any) => (
        <div className={styles.cellId}>{text}</div>
      ),
    },

    {
      title: isMobile ? "Song Name" : "",
      dataIndex: "title",
      key: "title",
      width: "30%",
      render: (text: any, item: any) => (
        <div className={styles.cellSongname}>
          <Image src={`/`} width={48} height={48} alt={text} />
          <div className={styles.fontGap}>
            <div className={styles.songTitle}>{}</div>
            <div className={styles.songArtist}>{}</div>
          </div>
        </div>
      ),
    },
    width > 725
      ? {
          title: "Album",
          dataIndex: "album",
          key: "album",
          width: "25%",
          render: (text: any, item: any) => (
            <div className={styles.cellAlbumName}>{}</div>
          ),
        }
      : {
          width: "0.5%",
          render: () => <div></div>,
        },
    isMobile
      ? {
          title: "Time",
          dataIndex: "time",
          key: "time",
          width: "15%",
          render: (text: any, item: any) => (
            <div className={styles.cellTimeName}>{}</div>
          ),
        }
      : {
          width: "0.5%",
          render: () => <div></div>,
        },
    {
      title: "",
      key: "like",
      width: "10%",
      render: () => (
        <HeartShapeBtn
          isActive={true}
          isDisabled={false}
          onClick={() => console.log("button clicked")}
        />
      ),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Table
        className={styles.container}
        dataSource={albums}
        columns={columns}
        pagination={false}
        rowClassName={styles.row111111}
      />
    </div>
  );
};

export default HitsTable;
