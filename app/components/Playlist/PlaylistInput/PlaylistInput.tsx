import { useState } from 'react';
import styles from './PlaylistInput.module.scss';
import Button from '../../Button/Button';

type Props = {
    name: string;
    id: number;
    onClick?: () => void;
    register?: any;
}

const PlaylistInput = ({ name, id , onClick, register}: Props) => {
    
    

    return (
        <div className={styles.container} >
            <div className={styles.wrapper}>
                <input type="checkbox" className={styles.inp} onClick={onClick} {...register(`${name}`)}/>
                <span className={styles.name}>{name}</span>
            </div>
            
        </div>
    )
}


export default PlaylistInput;