import { useState } from 'react';
import styles from './NewPlaylist.module.scss';
import Image from 'next/image';

type Props = {
    onclick?: () => void;
}

const NewPlaylist = ({onclick} : Props) => {
    const [show, setShow] = useState(false);
    const showing = () => {
        setShow(!show)
    }

    return(
        <div className={styles.container} onClick={showing}>
            <Image src={'/icons/plust.svg'} alt='image' width={13} height={13} />
            <span className={styles.playlist}>New Playlist</span>
            {
                show && 
            }

        </div>
    )
}

export default NewPlaylist;