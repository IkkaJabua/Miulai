import { useState } from 'react';
import PlaylistBox from '../PlaylistBox/PlaylistBox';
import PItem from './PItem/PItem';
import styles from './Playlist.module.scss';
import Image from 'next/image';
import AddPlaylist from './AddPlaylist/AddPlaylist';
import CreatePlaylist from './CreatePlaylist/CreatePlaylist';


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
                <PItem image={'./icons/playlist-icon.svg'} title={'Add to Playlist'} onClick={onForward} />
                <PItem image={'./icons/album-icon.svg'} title={'Add to Album'} />
                <PItem image={'./icons/artist-icon.svg'} title={'Add to Artist'} />
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
            <PItem image={'./icons/playlist-icon.svg'} title={'Add to Playlist'} onClick={onForward} />
            <PItem image={'./icons/album-icon.svg'} title={'Add to Album'} />
            <PItem image={'./icons/artist-icon.svg'} title={'Add to Artist'} />
        </PlaylistBox>
    )
}


export default Playlist;