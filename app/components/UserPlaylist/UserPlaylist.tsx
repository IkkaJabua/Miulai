"use client";

import styles from "./UserPlaylist.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useRecoilState } from "recoil";
import { clickFetchState, globalPLaylistState } from "@/app/state";
import Cookies from "js-cookie";
import AlbumEditModal from "../AlbumEditModal/AlbumEditModal";

const UserPlaylist = () => {
    const router = useRouter();
    const [playlistData, setPlaylistData] = useState<any[]>([]);
    const [clickFetch, setClickFetch] = useRecoilState(clickFetchState);
    const token = Cookies.get("accessToken");
    const [globalPlst, setGlobalPlst] = useRecoilState(globalPLaylistState);
    const [openModal, setOpenModal] = useState(false);
    const [modalId, setModalId] = useState<number | null>(null); // Tracks which modal to open

    const open = (id: number) => {
        setModalId(id);
        setOpenModal(true);
    };

    const close = (e: any) => {
        e.stopPropagation(); // Stops event bubbling
    };

    useEffect(() => {
        axios.get("https://interstellar-1-pdzj.onrender.com/playlist", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((r) => {
                setPlaylistData(r.data);
                setOpenModal(false)
            })
            .catch((error) => {
                console.error("Error fetching playlists:", error);
            });
    }, [clickFetch, token]);

    const handleCardClick = (id: string) => {
        router.push(`/playlists/${id}`);
    };

    const stopClickPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onDeleteClick = (id: number) => {
        axios
            .delete(`https://interstellar-1-pdzj.onrender.com/playlist/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(() => {
                setPlaylistData((prevData) =>
                    prevData.filter((item) => item.id !== id)
                );
                alert("Playlist deleted successfully");
            })
            .catch((error) => {
                console.error("Error deleting playlist:", error);
                alert("Failed to delete playlist");
            });
    };

    return (
        <>
            {playlistData.map((item) => (
                <div
                    className={styles.container}
                    key={item.id}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(item.id);
                    }}
                >
                    <div className={styles.hoveredImage}>
                        <Image
                            className={styles.cellImage}
                            src={item.files?.url || "/icon/albumicon3.svg"}
                            width={234}
                            height={251}
                            alt="playlist cover"
                        />

                        <div className={styles.buttons}>
                            <div className={styles.cellEdit}>
                                <Image
                                    src={"/icon/edit.svg"}
                                    width={24}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        open(item.id); // Open modal for the clicked item
                                    }}
                                    height={24}
                                    alt="edit button"
                                />
                                {openModal && modalId === item.id && (
                                    <div style={{ position: "relative" }}>
                                        <AlbumEditModal
                                            id={item.id}
                                            closeModal={close} // Properly closes the modal
                                        />
                                    </div>
                                )}
                            </div>
                            <div
                                className={styles.cellDelete}
                                onClick={(e) => {
                                    stopClickPropagation(e);
                                    onDeleteClick(item.id); // Delete the specific playlist
                                }}
                            >
                                <Image
                                    src={"/icon/delete.svg"}
                                    width={24}
                                    height={24}
                                    alt="delete button"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.font}>{item.name}</div>
                </div>
            ))}
        </>
    );
};

UserPlaylist.displayName = "UserPlaylist";
export default UserPlaylist;