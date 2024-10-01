import React from 'react';
import Image from 'next/image'
import Button from '../Button/Button';
import style from './fullscreen.module.scss';
import HeartShapeBtn from '../heatShapeIcon/HeartShapeIcn';
import { musicState } from '@/app/states';
import { useRecoilState } from 'recoil';

const Fullscreen = () => {
    const [music, setMusic] = useRecoilState<any>(musicState)

    return (
        <div className={style.container}>
            <img src={music?.coverImgUrl || '/defaultAlbumArt.jpg'} alt="Album Art" width={80} height={80} className={style.img} />
            <div className={style.like}>
                <div className={style.text}>
                    <div className={style.flexing}>
                        <span className={style.title}>{music?.title || 'Unknown Title'}</span>
                        <span className={style.artist}>{music?.artistName || 'Unknown Artist'}</span>
                        <div className={style.likebtn}>
                        </div></div>
                </div>

            </div>

        </div>
    );
};

export default Fullscreen;
