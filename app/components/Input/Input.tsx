import { useEffect, useState } from 'react';
import styles from './Input.module.scss';

type Props = {
    className?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: () => void


}

const Input = (props: Props) => {

    return (
        <div className={styles.container + ' ' + props.className}>
            <input onChange={props.onChange} onFocus={props.onFocus} onBlur={props.onBlur} type="text" value={props.value} placeholder='Artists,tracks,albums' className={styles.input} />
        </div>
    )
}

export default Input;