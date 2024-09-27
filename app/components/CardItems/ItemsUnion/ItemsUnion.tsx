import styles from './ItemsUnion.module.scss';
import Dots from "../CardDots/Dots";
import Heart from "../CardHeart/Heart";
import { useState } from 'react';
import Playlist from '../../Playlist/Playlist';

const ItemsUnion = () => {
    const [isPlaylistVisible, setIsPlaylistVisible] = useState(false);

    const changeOnDotsClick = () => {
        setIsPlaylistVisible(prev => !prev); // This should toggle the playlist visibility
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {/* Pass changeOnDotsClick as a prop to Dots */}
                <Dots onClick={changeOnDotsClick} />
            </div>
            <div className={isPlaylistVisible ? styles.playlistVisible : styles.playlistHidden}>
                <Playlist />
            </div>
        </div>
    );
};

export default ItemsUnion;
