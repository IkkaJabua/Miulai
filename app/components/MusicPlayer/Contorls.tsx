import React from 'react';
import Image from 'next/image';
import style from './Contorls.module.scss';
import { StyleOutlined } from '@mui/icons-material';
import props from './helperProp/prop';
import formatTime from './helperProp/formatTime';
import propsinterFace from './helperProp/prop';
import Icon from '../Icon/Icon';
import HeartShapeBtn from '../heatShapeIcon/HeartShapeIcn';

const Controls = (props: propsinterFace) => {
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
        <>

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
                <div className={style.buttons}>
                    <button onClick={props.onToggleShuffle} className={style.btn}>
                        <Icon name={props.isShuffling ? 'shuffle' : 'shuffleA'} alt="Shuffle" width={24} height={24} />
                    </button>
                    <button onClick={props.onPrevious} className={style.btn}>
                        <Icon name="previous" alt="Previous" width={24} height={24} />
                    </button>
                    <div className={style.likeplaybtn}>
                        <div className={style.likeSet}>
                        <HeartShapeBtn isActive={true} isDisabled={false} onClick={() => console.log('Button clicked!')} />
                        </div>
                        <button onClick={props.onPlayPause} className={`${style.btn} ${style.circle}`}>
                            <Icon name={props.isPlaying ? "pause" : "/play"} alt={props.isPlaying ? "Pause" : "Play"} width={48} height={48} />
                        </button>
                    </div>
                    <button onClick={props.onNext} className={style.btn}>
                        <Icon name="previus-next" alt="Next" width={24} height={24} />
                    </button>
                    <button onClick={props.onToggleLoop} className={style.btn}>
                        <Icon name={props.isLooping ? "/repeat-one.png" : "repeat"} alt="Loop" width={24} height={24} />
                    </button>
                </div>



            </div>


            <div className={style.volume}>
                <Image src="/volume-loud.png" alt="Volume" width={24} height={24} />
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={props.volume}
                    onChange={handleVolumeChange}
                    aria-label="Volume"
                    className={style.volSetting}
                />

            </div>
        </>
    );
};

export default Controls;