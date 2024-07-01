import { useEffect, useState } from 'react';
import styles from './Input.module.scss';
import Image from 'next/image';


export default () => {
    const [showIcon, setShowIcon] = useState(true);

    const showing = () => {
        setShowIcon(!showIcon);
    }

    return(
        <div className={styles.container} id={styles.c} onFocus={showing} onBlur={showing}>
            { showIcon && <Image src={'./searchIconBlur.svg'} alt='image' width={24} height={24} className={styles.img} />}
            <input type="text" placeholder='Artists,tracks,albums' className={styles.input} />
        </div>
    )
}