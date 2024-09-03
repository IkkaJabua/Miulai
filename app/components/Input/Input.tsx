import { useEffect, useState } from 'react';
import styles from './Input.module.scss';

type Props = {
    className?: string;
}
import Image from 'next/image';

export default (props: Props) => {


    return (
        <div className={styles.container + ' ' + props.className}>
            <input type="text" placeholder='Artists,tracks,albums' className={styles.input} />
        </div>
    )
}