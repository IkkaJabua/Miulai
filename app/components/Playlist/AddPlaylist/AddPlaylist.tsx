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
import { useRecoilState } from 'recoil';
import { globalMusicState } from '@/app/state';
import Cookies from 'js-cookie';


type Props = {
    onForward: () => void;
    onBackward?: () => void;
}



const AddPlaylist = ({ onForward, onBackward }: Props) => {
    const { register, handleSubmit, watch } = useForm();
    const checkboxValues = watch();
    const [playlist, setPlaylist] = useState<any[]>([])
    const [playlsID, setPlaylstId] = useState()
    const [globalMusic, setGlobalMusic] = useRecoilState<any>(globalMusicState)


    const token = Cookies.get('token')

    useEffect(() => {
        axios.get(`https://interstellar-1-pdzj.onrender.com/playlist`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((r) => {
            setPlaylist(r.data)
        })
    }, [])


    const onSubmit = (value: any) => {
        console.log(token, 'sad dailoga aba ')
        axios.post(`https://interstellar-1-pdzj.onrender.com/playlist/${playlsID}/${globalMusic}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((r) => {
            console.log(r, 'gaigzavnaaa')

        })
    }

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
                    playlist.map((item, i) => (<PlaylistInput name={item.name} onClick={() => setPlaylstId(item.id)} id={item.id} key={item.id} register={register} />))
                }


                <button className={styles.button}>
                    save
                </button>

            </form>
        </PlaylistBox>
    )
}


export default AddPlaylist;