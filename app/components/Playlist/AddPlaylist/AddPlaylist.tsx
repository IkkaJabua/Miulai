import { useState } from 'react';
import PlaylistBox from '../../PlaylistBox/PlaylistBox';
import NewPlaylist from '../NewPlaylist/NewPlaylist';
import PlaylistInput from '../PlaylistInput/PlaylistInput';
import styles from './AddPlaylist.module.scss';
import Image from 'next/image';
import Button from '../../Button/Button';
import { useForm, SubmitHandler } from "react-hook-form";


type Props = {
    onForward: () => void;
    onBackward?: () => void;
}

const data = [
    {
        name: 'Playlist 1',
        id: 1
    },

    {
        name: 'Playlist 2',
        id: 2
    },

    {
        name: 'Playlist 3',
        id: 3
    }
]




const AddPlaylist = ({ onForward, onBackward }: Props) => {
    const { register, handleSubmit, watch } = useForm();

    const checkboxValues = watch();

    const onSubmit = (values: any) => {
        console.log('Values', values)
    }


    console.log(checkboxValues, Object.values(checkboxValues))

    return (
        <PlaylistBox className={styles.container}>
            <div className={styles.header}>
                <Image src={'./icons/left.svg'} alt='image' width={20} height={20} onClick={onBackward} />
                <span className={styles.title}>
                    Add To Playlist
                </span>
            </div>

            <div onClick={onForward}>
                <NewPlaylist />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.inputWrapper}>
                {
                    data.map((item, i) => (<PlaylistInput name={item.name} id={item.id} key={i} register={register} />))
                }

                {Object.values(checkboxValues).find((val) => val === true) &&
                    <Button title={'Save'} mode={'reusable width'} width={225} />
                }

            </form>
        </PlaylistBox>
    )
}


export default AddPlaylist;