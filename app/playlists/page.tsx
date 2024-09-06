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
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';


export default () => {

    const [active, setActive] = useState(false)

    const [tablet, setTablet] = useState<any>(false)




    return (
        <div className={styles.container}>
            <div className={styles.miniContainer}>
                <div className={styles.cellheader}>
                    <div>
                        <Link href={'/'}>
                            <Image className={styles.cursor} src={'./icon/isari.svg'} width={32} height={32} alt='image' />
                        </Link>
                        {/* <Image className={styles.tabletBurgercursos} src={'../icon/menu-burger.svg'} width={44} height={44} alt='burger-menu-icon' /> */}
                         {/* <div className={styles.tabletBurgercursos}>
                            <BurgerMenu className={''} />
                        </div>  */}
                    </div>
                    <Image src={'./icon/profile-icon.svg'} width={56} height={56} alt='profile image' />
                </div>
                <div className={styles.cellFont}>
                    <Link href={'/'}>
                        <Image className={styles.tabletCursos} src={'./icon/isari.svg'} width={32} height={32} alt='image' />
                    </Link>
                    <div className={styles.mobileGap}>
                        <div className={styles.cellMyPlaylist}>
                            My Playlists
                        </div>
                        <div className={styles.mobileButton}>
                            <Button title={''}
                                mode={'reusable button'}
                                imageSrc='plus.svg'
                                imageHeight={20}
                                imageWidth={20}
                                padding='4px'
                                borderRadius='4px'
                                onClick={() => console.log('button clicked')} />
                        </div>
                    </div>
                </div>
                <div className={styles.cellInput}>
                    <div className={styles.cellReusableinput}>
                        <Input />
                    </div>
                    <div className={styles.screenButton}>
                        <Button
                            title={'New playlist'}
                            mode={'reusable button'}
                            imageSrc='plus.svg'
                            imageHeight={20}
                            imageWidth={20}
                            padding='12px 16px 12px 12px'
                            borderRadius='8px'
                            gap='4px'
                            fontSize='16px'
                            fontWeight='500'
                            onClick={() => setActive(!active)}
                        />
                    </div>
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
