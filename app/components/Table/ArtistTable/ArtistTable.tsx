"use client";
import { Table } from "antd";
import HeartShapeBtn from "../../heatShapeIcon/HeartShapeIcn";
import type { DividerClassKey } from "@mui/material";
import styles from "./ArtistTable.module.scss";
import { render } from "sass";
import { text } from "stream/consumers";
import Image from "next/image";
import { useWindowSize } from "react-use";
import { useRecoilState } from "recoil";
import { albumCoverState, globalAlbumDataState, musicState, newsImageState } from "@/app/state";
import { useEffect } from "react";
import axios from "axios";
const ArtistTable = () => {
  const [musicArray, setMusicArray] = useRecoilState(musicState);
  const [globalalbum, setGlobalAlbum] = useRecoilState(globalAlbumDataState);
  const [albumCover, setAlbumcover] = useRecoilState<any>(albumCoverState)
  const [artistPhoto, setArtistPhoto] = useRecoilState(newsImageState);

  const { width, height } = useWindowSize();
  const isMobile = width > 767;

  const columns = [
    {
      title: isMobile ? "#" : "",
      dataIndex: "id",
      key: "id",
      width: "1%",
      render: (text: any, record: any) => (
        <div className={styles.cellId}>{record.id}</div>
      ),
    },

    {
      title: isMobile ? "Song Name" : "",
      dataIndex: "title",
      key: "title",
      width: "30%",
      render: (text: any, record: any,item: any) => (
        <div className={styles.cellSongname}>
          <img src={`${artistPhoto}`} 
          width={48} height={48} alt={text}
          className={styles.img}
           />
          <div className={styles.fontGap}>
            <div className={styles.songTitle}>{item.name}</div>
            <div className={styles.songArtist}>{item.artistName}</div>
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
            <div className={styles.cellAlbumName}>{globalalbum}</div>
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
            <div className={styles.cellTimeName}>{text}</div>
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
        dataSource={musicArray}
        columns={columns}
        pagination={false}
        rowClassName={styles.row111111}
      />
    </div>
  );
};

export default ArtistTable;
