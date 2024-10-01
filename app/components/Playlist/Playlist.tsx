import { useEffect, useState } from 'react';
import PlaylistBox from '../PlaylistBox/PlaylistBox';
import PItem from './PItem/PItem';
import styles from './Playlist.module.scss';
import Image from 'next/image';
import AddPlaylist from './AddPlaylist/AddPlaylist';
import CreatePlaylist from './CreatePlaylist/CreatePlaylist';
import axios from 'axios';


const Playlist = () => {
    const [route, setRoute] = useState(0);



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
                <PItem image={'artistIcon'} title={'View to Artist'}/>
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