import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import PlaylistBox from '../../PlaylistBox/PlaylistBox';
import styles from './CreatePlaylist.module.scss';
import Image from 'next/image';
import { useForm, SubmitHandler } from "react-hook-form"
import { useEffect, useState } from 'react'
import axios from 'axios';



type Props = {
    onClick?: () => void;


}

const CreatePlaylist = ({ onClick }: Props) => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm<any>()

    const onSubmit = async (values: any) => {
        const data: any = new FormData()
        data.append('name', values.Playlistname)
        data.append('file', values.file[0])

        axios.post('', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((r) => {
            console.log(r)
        })

        // console.log('=====>>>>', values.Playlistname)
        // console.log('=====>>>>', values.file[0])
    }

    return (
        <PlaylistBox className={styles.container}>
            <div className={styles.header}>
                <Icon name={'leftsideArrow'} alt='image' width={20} height={20} onClick={onClick} />
                <span className={styles.title}>Create New Playlist</span>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Playlist name' className={styles.inp}
                    {...register('Playlistname')}

                />
                <div className={styles.filesWrapper}>
                    <input type='file' className={styles.files}
                        {...register('file')}

                    />
                    <Image src={'/icon/camera.png'} alt='image' width={88} height={80} className={styles.image} />
                </div>
                <Button title={'Save'} mode={'reusable button'} width={"290px"} height='100px' onClick={() => console.log('button clicked')} />
            </form>

        </PlaylistBox>
    )
}

export default CreatePlaylist;
