import React from 'react';
import Image from 'next/image'
import Button from '../Button/Button';
import style from './fullscreen.module.scss';
import HeartShapeBtn from '../heatShapeIcon/HeartShapeIcn';
import { useRecoilState } from 'recoil';
import { musicState , playerDisplayState} from '@/app/state';

const Fullscreen = () => {
    const [music, setMusic] = useRecoilState<any>(musicState)
    const [playerDisplay, setPlayerDisplay] = useRecoilState<any>(playerDisplayState)
    return (
        <div className={style.container}>
            <img src={playerDisplay?.albumCover || '/defaultAlbumArt.jpg'} alt="Album Art" width={80} height={80} className={style.img} />
            <div className={style.like}>
                <div className={style.text}>
                    <div className={style.flexing}>
                        <span className={style.title}>{playerDisplay?.name || 'Unknown Title'}</span>
                        <span className={style.artist}>{playerDisplay?.artistName || 'Unknown Artist'}</span>
                        <div className={style.likebtn}>
                        </div></div>
                </div>

            </div>

        </div>
    );
};

export default Fullscreen;
