'use client'
import { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import UserPlaylist from '../components/UserPlaylist/UserPlaylist';
import styles from './page.module.scss'
import Image from 'next/image';
import Table from '../components/Table/Table';
import CreatePlaylist from '../components/Playlist/CreatePlaylist/CreatePlaylist';
import Link from 'next/link';


export default () => {
    const [active, setActive] = useState(false)


    return (
        <div className={styles.container}>
            <div className={styles.miniContainer}>
                <div className={styles.cellheader}>
                    <Link href={'./'}>
                        <Image className={styles.cursor} src={'./icon/isari.svg'} width={32} height={32} alt='image' />
                    </Link>
                    <Image src={'./icon/profile-icon.svg'} width={56} height={56} alt='profile image' />
                </div>
                <div className={styles.cellFont}>My Playlists</div>
                <div className={styles.cellInput}>
                    <Input />
                    <Button
                        title={'New playlist'}
                        mode={'short with icon'}
                        icon
                        onClick={() => setActive(!active)}
                    />
                </div>
                {active &&
                    <div className={styles.newPlaylist}><CreatePlaylist /></div>
                }
            </div>
            <div className={styles.cellPlaylist}>
                <UserPlaylist />
            </div>
        </div>
    );
}