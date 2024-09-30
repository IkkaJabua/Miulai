import { useEffect, useState } from 'react';
import PlaylistBox from '../../PlaylistBox/PlaylistBox';
import NewPlaylist from '../NewPlaylist/NewPlaylist';
import PlaylistInput from '../PlaylistInput/PlaylistInput';
import styles from './AddPlaylist.module.scss';
import Image from 'next/image';
import Button from '../../Button/Button';
import { useForm, SubmitHandler } from "react-hook-form";
import Icon from '../../Icon/Icon';
import axios from 'axios';


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
    const [playlist, setPlaylist] = useState<any[]>([])


    useEffect(() => {
        axios.get(`https://interstellar-1-pdzj.onrender.com/playlist`).
            then((r) => {
                console.log(r.data, 'aq ar ia q arii aq ariii')
                setPlaylist(r.data)

            })

    }, [])





    const onSubmit = (values: any) => {

        const data = new NewForm()

        axios.post(`https://interstellar-1-pdzj.onrender.com/playlist`). 
        then((r) => {

        })
    }



    console.log(checkboxValues, Object.values(checkboxValues))

    return (
        <PlaylistBox className={styles.container}>
            <div className={styles.header}>
                <Icon name={'leftsideArrow'} alt='image' width={15} height={15} onClick={onBackward} />
                <span className={styles.title}>
                    Add To Playlist
                </span>
            </div>

            <div onClick={onForward}>
                <NewPlaylist />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.inputWrapper}>
                {
                    playlist.map((item, i) => (<PlaylistInput name={item.name} onClick={() => console.log(item.id,'aesari aidi aid aeesa')}  id={item.id} key={item.id} register={register} />))
                }

                {Object.values(checkboxValues).find((val) => val === true) &&
                    <Button title={'Save'} mode={'reusable button'} width={"225px"} onClick={() => console.log('button clicked')} />
                }

            </form>
        </PlaylistBox>
    )
}


export default AddPlaylist;