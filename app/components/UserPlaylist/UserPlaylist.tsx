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
  const open = () => setOpenModal(true);
  const close = () => setOpenModal(false);

  useEffect(() => {
    axios
      .get("https://interstellar-1-pdzj.onrender.com/playlist", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((r) => {
        setPlaylistData(r.data);
      })
      .catch((error) => {
        console.error("Error fetching playlists:", error);
      });
  }, [clickFetch, token]); // Add token as a dependency to ensure it's up to date.

  const handleCardClick = (id: string) => {
    console.log('dsadsadasdasdasda')
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
        // Remove the deleted item from the state
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
                    setOpenModal((prevState) => !prevState);
                  }}
                  height={24}
                  alt="edit button"
                />
                {openModal && (
                  <AlbumEditModal
                    id={item.id}
                    closeModal={() => {
                      close;
                    }}
                  />
                )}
              </div>
              <div
                className={styles.cellDelete}
                onClick={(e) => {
                  stopClickPropagation(e);
                  onDeleteClick(item.id); // Pass the correct ID here
                }}
              >
                <Image
                  src={"/icon/delete.svg"}
                  width={24}
                  height={24}
                  alt="delete button"
                  onClick={() => console.log("Delete button clicked")}
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
