import { useEffect, useState } from 'react';
import styles from './Input.module.scss';
import Image from 'next/image';

export default () => {


    return (
        <div className={styles.container}>
            <input type="text" placeholder='Artists,tracks,albums' className={styles.input} />
        </div>
    )
}