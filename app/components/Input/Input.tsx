import { useEffect, useState } from 'react';
import styles from './Input.module.scss';
import Image from 'next/image';

const Input = () => {


    return (
        <div className={styles.container}>
            <input type="text" placeholder='Artists,tracks,albums' className={styles.input} />
        </div>
    )
}

export default Input;