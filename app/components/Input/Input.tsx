import { useEffect, useState } from 'react';
import styles from './Input.module.scss';

type Props = {
    className?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

const Input = (props: Props) => {

    return (
        <div className={styles.container + ' ' + props.className}>
            <input onChange={props.onChange} type="text" value={props.value} placeholder='Artists,tracks,albums' className={styles.input} />
        </div>
    )
}

export default Input;