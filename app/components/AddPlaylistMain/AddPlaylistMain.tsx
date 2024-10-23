import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import PlaylistBox from '../PlaylistBox/PlaylistBox';
import styles from './AddPlaylistMain.module.scss';
import Image from 'next/image';
import { useForm, SubmitHandler } from "react-hook-form"
import { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'
import { useRecoilState } from 'recoil';
import { clickFetchState } from '@/app/state';





type Props = {
    onClick?: () => void;
    onDelete?: () => void
}

type Form = {
    name: string
}


const AddPlaylistMain = ( props: Props) => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm<Form>()
    const [userId, setUserId] = useState()
    const token = Cookies.get('token');
    const [clickFetch, setClickFetch] = useRecoilState(clickFetchState);
    const [isPopupVisible, setIsPopupVisible] = useState(true);




    useEffect(() => {
        axios.get(`https://interstellar-1-pdzj.onrender.com/user/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).
            then((r) => {
                setUserId(r.data.id)
            })
    }, [])

    const onSubmit = async (values: any) => {
        try {
            const response = await axios.post('https://interstellar-1-pdzj.onrender.com/playlist', {
                'name': String(values.name),
                'userId': String(userId)
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                    // Ensure JSON content type
                }
            });
            setClickFetch(!clickFetch)
            setIsPopupVisible(false);
        } catch (error) {
        }
    };


    // return (
    //     <PlaylistBox className={styles.container}>
    //         <div className={styles.header}>
    //             <div className={styles.title}>Create New Playlist</div>
    //             <Icon
    //                 name={"X_delete"}
    //                 alt="image"
    //                 width={20}
    //                 height={20}
    //                 onClick={props.onDelete}
    //             />

    //         </div>
    //         <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    //             <input
    //                 type="text"
    //                 placeholder="Playlist name"
    //                 className={styles.inp}
    //                 {...register("name", {
    //                     required: {
    //                         value: true,
    //                         message: 'Name is required'
    //                     },
    //                     minLength: {
    //                         value: 2,
    //                         message: "Name must be at least 2 characters"
    //                     }
    //                 })}
    //             />
    //               {errors.name && <span className={styles.error}>{errors.name.message}</span>}
    //             <Button
    //                 title={"Save"}
    //                 mode={"reusable button"}
    //                 padding='10px'
    //                 borderRadius='8px'
    //                 width={"220px"}
    //                 height="100px"
    //                 onClick={props.onClick}
    //             />
    //         </form>
    //     </PlaylistBox>
    // );
    return isPopupVisible ? (
        <PlaylistBox className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>Create New Playlist</div>
                <Icon
                    name={"X_delete"}
                    alt="image"
                    width={20}
                    height={20}
                    onClick={props.onDelete}
                />
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Playlist name"
                    className={styles.inp}
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is required'
                        },
                        minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters"
                        }
                    })}
                />
                {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                {/* <Button
                    title={"Save"}
                    mode={"reusable button"}
                    padding='10px'
                    borderRadius='8px'
                    width={"220px"}
                    height="100px"
                    type="submit" // Make sure this button submits the form
                /> */}
                <input className={styles.save}
                    value={"Save"}
                    type="submit" 
                />
            </form>
        </PlaylistBox>
    ) : null;
}

export default AddPlaylistMain;
