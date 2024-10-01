
'use client';

import styles from './UserPlaylist.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { clickFetchState, globalPLaylistState } from '@/app/state';
import Cookies from 'js-cookie';

const UserPlaylist = () => {
    const router = useRouter();
    const [playlistData, setPlaylistData] = useState<any[]>([]); // Ensure type safety or adjust accordingly.
    const [clickFetch, setClickFetch] = useRecoilState(clickFetchState);
    const token = Cookies.get('token')

    const [globalPlst, setGlobalPlst] = useRecoilState(globalPLaylistState)




    useEffect(() => {
        axios.get('https://interstellar-1-pdzj.onrender.com/playlist', {
            headers: {
                Authorization: `Bearer ${token}`
            }

        }).
            then((r) => {
                setPlaylistData(r.data);
                console.log(r.data, 'playlist')
                console.log(token, 'token')


            })

    }, [clickFetch]);

    const handleCardClick = (id: string) => {
        router.push(`/playlists/${id}`);
    };


    const stopClickPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    const onDelete = (id: Number) => {
        axios.delete(`https://interstellar-1-pdzj.onrender.com/playlist/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }

        }).
            then((r) => {
                alert('do you Really want to delete?')
                setClickFetch(!clickFetch)
            })

    }

    return (
        <>
            {playlistData.map((item) => (
                <div
                    className={styles.container}
                    key={item.id}
                    onClick={() => {
                        setGlobalPlst(item.id)
                        handleCardClick(item.id)
                    }}
                >
                    <div className={styles.hoveredImage}>
                        <Image
                            className={styles.cellImage}
                            src={item.files?.url || '/icon/albumicon3.svg'}
                            width={234}
                            height={251}
                            alt="playlist cover"
                        />

                        <div className={styles.buttons}>
                            <div className={styles.cellEdit} onClick={stopClickPropagation}>
                                <Image
                                    src={'/icon/edit.svg'}
                                    width={24}
                                    height={24}
                                    alt="edit button"
                                    onClick={() => console.log('Edit button clicked')}
                                />
                            </div>
                            <div className={styles.cellDelete} onClick={() => {
                                onDelete(item.id)
                                stopClickPropagation
                            }}>
                                <Image
                                    src={'/icon/delete.svg'}
                                    width={24}
                                    height={24}
                                    alt="delete button"
                                    onClick={() => console.log('Delete button clicked')}
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

UserPlaylist.displayName = 'UserPlaylist';
export default UserPlaylist;
