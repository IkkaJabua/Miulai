import { useEffect, useState } from 'react';
import PlaylistBox from '../PlaylistBox/PlaylistBox';
import PItem from './PItem/PItem';
import styles from './Playlist.module.scss';
import Image from 'next/image';
import AddPlaylist from './AddPlaylist/AddPlaylist';
import CreatePlaylist from './CreatePlaylist/CreatePlaylist';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import Cookies from 'js-cookie';
import { accessTokenState, albumidState, clickFetchState, formusicFetchState } from '@/app/state';
import { useRouter } from "next/navigation";




const Playlist = () => {
    const [route, setRoute] = useState(0);
    const [viewArtist, setViewArtist] = useRecoilState(formusicFetchState)

    const [albumId, setAlbumId] = useRecoilState(albumidState);
    const router = useRouter();
    const token = Cookies.get('accessToken')







    const onForward = () => {
        setRoute(route + 1)
    }

    const onBackward = () => {
        setRoute(route - 1)
    }

    if (route === 0)
        return (
            <PlaylistBox className={styles.container}>
                <PItem image={'playlistIcon'} title={'Add to Playlist'} onClick={onForward} />
                <PItem image={'albumIcon'} title={'View to Album'} onClick={() => {
                    router.push(`/album`)
                }}/>
                <PItem image={'artistIcon'} title={'View to Artist'} onClick={() => {
                    router.push(`/artistlist/${albumId}`)
                }}/>
            </PlaylistBox>
        )

    else if (route === 1)
        return (
            <AddPlaylist onForward={onForward} onBackward={onBackward} />
        )

    else if (route === 2)
        return (
            <CreatePlaylist onClick={onBackward} />
        )





        
    return (
        <PlaylistBox className={styles.container}>
            <PItem image={'playlistIcon'} title={'Add to Playlist'} onClick={onForward} />
            <PItem image={'albumIcon'} title={'View to Album'} onClick={() => {
                router.push(`/album`)
            }} />
            <PItem image={'artistIcon'} title={'View to Artist'} onClick={() => {
                router.push(`/artistlist/${albumId}`)
            }} /> 
        </PlaylistBox>
    )
}


export default Playlist;