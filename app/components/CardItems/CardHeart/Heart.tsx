import { useState } from 'react';
import Icon from '../../Icon/Icon';
import styles from './Heart.module.scss';
import Image from 'next/image';


interface Props {
    onClick?: () => void;
}


const Heart = (props: Props) => {
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
        </div>

    )
}
export default Heart;