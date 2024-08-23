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

    const [tablet, setTablet] = useState<any>(false)

    useEffect(() => {

        const mediaQuery = window.matchMedia('(max-width: 744px)');
        if (window.innerWidth <= 744) {
            setTablet(mediaQuery.matches);
        }
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.miniContainer}>
                <div className={styles.cellheader}>
                    <div>
                        <Link href={'/'}>
                            <Image className={styles.cursor} src={'./icon/isari.svg'} width={32} height={32} alt='image' />
                        </Link>
                        <Image className={styles.tabletBurgercursos} src={'../icon/menu-burger.svg'} width={44} height={44} alt='burger-menu-icon' />
                    </div>
                    <Image src={'./icon/profile-icon.svg'} width={56} height={56} alt='profile image' />
                </div>
                <div className={styles.cellFont}>
                    <Link href={'/'}>
                        <Image className={styles.tabletCursos} src={'./icon/isari.svg'} width={32} height={32} alt='image' />
                    </Link>
                    <div>
                        My Playlists
                    </div>
                </div>
                <div className={styles.cellInput}>
                    <div className={styles.cellReusableinput}>
                        <Input />
                    </div>
                    <Button
                        title={'New playlist'}
                        mode={'short with icon'}
                        icon
                        onClick={() => setActive(!active)}
                    />
                </div>
                <div className={styles.newPlaylist}>
                    {active &&
                        <CreatePlaylist />
                    }
                </div>
            </div>
            <div className={styles.cellPlaylist}>
                <UserPlaylist />
            </div>
        </div>
    );
}
