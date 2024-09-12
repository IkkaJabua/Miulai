import React from 'react';
import Image from 'next/image';
import formatTime from '../helperProp/formatTime';
import propsinterFace from '../helperProp/prop';
import style from './slider.module.scss';


const SliderMobile = (props: propsinterFace) => {
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseInt(e.target.value, 10);
        props.onVolumeChange(newVolume);
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        props.onTimeChange(newTime);
    };

    const currentTimeInPrcnt = (props.currentTime / props.duration) * 100
    return (
        <div className={style.container}>
            <div className={style.time} >

                <span className={style.timing}>{formatTime(props.currentTime)}</span>

                <div className={style.progressMain}>
                    <input
                        type="range"
                        min="0"
                        max={props.duration}
                        value={props.currentTime}
                        onChange={handleTimeChange}
                        className={style.load}
                    />
                    <div style={{ width: `${currentTimeInPrcnt}%` }} className={style.progressDiv}>
                    </div>
                </div>

                <span className={style.timing}>{formatTime(props.duration)}</span>
            </div>
        </div>
    );
};
export default SliderMobile;