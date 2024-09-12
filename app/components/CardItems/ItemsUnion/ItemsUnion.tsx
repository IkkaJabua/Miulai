import styles from './ItemsUnion.module.scss'
import Dots from "../CardDots/Dots";
import Heart from "../CardHeart/Heart";
import { useEffect, useRef, useState } from 'react';
import Playlist from '../../Playlist/Playlist';
import Card from '../../Card/Card';


const ItemsUnion = () => {
   
        const [isPlaylistVisible, setIsPlaylistVisible] = useState(false);
      
        const changeOnDotsClick = () => {
          setIsPlaylistVisible(prev => !prev)
        }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Heart />
                <div onClick={changeOnDotsClick}>
                    <Dots />
                </div>
            </div>
            <div className={isPlaylistVisible ? styles.playlistVisible : styles.playlistHidden}>
                <Playlist />
            </div>
        </div>
    )
}

export default ItemsUnion;