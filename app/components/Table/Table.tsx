'use client'
import { Table } from "antd";
import HeartShapeBtn from "../heatShapeIcon/HeartShapeIcn";
import type { DividerClassKey } from "@mui/material";
import styles from './Table.module.scss'
import { render } from "sass";
import { text } from "stream/consumers";
import Image from "next/image";
import { useWindowSize } from "react-use";
import { useRecoilState } from "recoil";
import { albumMusicFromArtistState, mudicIDState, musicState, oneArrayMusicState } from "@/app/state";
const Tables = () => {
    const [musicArray, setMusicArray] = useRecoilState(musicState);
    const [albumPage, setAlbumPage] = useRecoilState(albumMusicFromArtistState)
    const [musicID, setMusicId] = useRecoilState(mudicIDState)






    const { width, height } = useWindowSize();
    const isMobile = width > 767

    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };



    const columns = [
        {
            title: isMobile ? '#' : '',
            dataIndex: 'id',
            key: 'id',
            width: '1%',
            render: (text: any, item: any, index: number) => (
                <div className={styles.cellId}>
                    {index + 1}
                </div>
            )
        },

        {
            title: isMobile ? 'Song Name' : '',
            dataIndex: 'title',
            key: 'title',
            width: '30%',
            render: (text: any, item: any) => (
                <div className={styles.cellSongname}>
                    <Image src={item.albumCover} width={48} height={48} alt={text} />
                    <div className={styles.fontGap}>
                        <div className={styles.songTitle}>{item.name}</div>
                        <div className={styles.songArtist}>{item.authorName}</div>
                    </div>
                </div>
            ),
        },
        width > 725 ? {
            title: 'Album',
            dataIndex: 'album',
            key: 'album',
            width: '25%',
            render: (text: any, item: any) => (
                <div className={styles.cellAlbumName}>
                    {item.albumName}
                </div>
            )
        } : {
            width: '0.5%',
            render: () => (
                <div>

                </div>
            )
        },
        isMobile ?
            {
                title: 'Time',
                dataIndex: 'time',
                key: 'time',
                width: '15%',
                render: (text: any, item: any) => (
                    <div className={styles.cellTimeName}>
                        {formatDuration(item.duration)}
                    </div>
                )
            } : {
                width: '0.5%',
                render: () => (
                    <div>
                    </div>
                )
            },
        {
            title: '',
            key: 'like',
            width: '10%',
            render: (() =>
                <HeartShapeBtn isActive={true} isDisabled={false} onClick={() => console.log('button clicked')} />
            )
        },
    ];


    return (
        <div className={styles.wrapper}>
            <Table
                className={styles.container}
                dataSource={albumPage}
                columns={columns}
                pagination={false}
                onRow={(record: any) => ({
                    onClick: () => {
                        setMusicId(record.id);
                    },
                })}
                rowClassName={styles.row111111}

            />
        </div>

    )
}

export default Tables;

