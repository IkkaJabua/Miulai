import { useState } from 'react';
import Icon from '../../Icon/Icon';
import styles from './Heart.module.scss';
import Image from 'next/image';


interface Props {
    onClick?: () => void;
}

export default (props: Props) => {
    const [imgChange, setImgChange] = useState(false)

    const onImgOnclick = () => {
        setImgChange(!imgChange)
    }

    return (
        <div className={styles.container} onClick={onImgOnclick}>
            {
                imgChange
                    ? <Image src={'/icon/heart-pressed.svg'} alt='image' width={32} height={32} />
                    : <Image src={'/icon/heart-ntr.svg'} alt={'image'} width={32} height={32} />
            }
        </div>
    )
}