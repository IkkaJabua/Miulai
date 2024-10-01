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
import { accessTokenState, clickFetchState, formusicFetchState } from '@/app/state';



const Playlist = () => {
    const [route, setRoute] = useState(0);
    const [viewArtist, setViewArtist] = useRecoilState(formusicFetchState)

    const token = Cookies.get('token')



    const authorData = () => {

        axios.get(`https://interstellar-1-pdzj.onrender.com/music/${viewArtist}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }). 
        then((r) => {
            console.log(r.data, 'moitana biooo')
        })

    }



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
                <PItem image={'albumIcon'} title={'View to Album'} />
                <PItem image={'artistIcon'} title={'View to Artist'} onClick={authorData}/>
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
            <PItem image={'albumIcon'} title={'View to Album'} />
            <PItem image={'artistIcon'} title={'View to Artist'} />
        </PlaylistBox>
    )
}


export default Playlist;