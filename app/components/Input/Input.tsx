import { useEffect, useState } from 'react';
import styles from './Input.module.scss';

type Props = {
    className?: string;
}

const Input = (props: Props) => {

    return (
        <div className={styles.container + ' ' + props.className}>
            <input type="text" placeholder='Artists,tracks,albums' className={styles.input} />
        </div>
    )
}

export default Input;