import { useState } from 'react';
import Icon from '../../Icon/Icon';
import styles from './Heart.module.scss';
import Image from 'next/image';


interface Props {
    onClick?: () => void;
}


export default (props: Props) => {
    const [heartChange, setHeartChange] = useState(false);

    const onHeartClick = () => {
        setHeartChange(!heartChange)
    }

    return (
        <div className={styles.container} onClick={props.onClick}>
            <div onClick={onHeartClick}>
                {
                        heartChange
                        ?
                        <Image src={'/icon/heart-pressed.svg'} alt='image' width={32} height={32} />
                        :
                        <Image src={'/icon/heart-ntr.svg'} alt='image' width={32} height={32} />
                }
            </div>
        
const Heart = (props: Props) => {
    
    return(
        <div className={styles.container} onClick={props.onClick}>
            <Image src={'/icon/heart-ntr.svg'} alt={'image'} width={32} height={32} />

            <Image src={'/icon/heart-ntr.svg'} alt='image' width={32} height={32} />

        </div>
    )
}

export default Heart;