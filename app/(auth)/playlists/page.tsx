'use client'
import { useEffect, useState } from 'react';
// import Button from '../components/Button/Button';
// import Input from '../components/Input/Input';
// import UserPlaylist from '../components/UserPlaylist/UserPlaylist';
import styles from './page.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Input from '@/app/components/Input/Input';
import Button from '@/app/components/Button/Button';
import CreatePlaylist from '@/app/components/Playlist/CreatePlaylist/CreatePlaylist';
import UserPlaylist from '@/app/components/UserPlaylist/UserPlaylist';
import { useRouter } from 'next/navigation';
import ReusableHeader from '@/app/components/ReusableHeader/ReusableHeader';
import AddPlaylistMain from '@/app/components/AddPlaylistMain/AddPlaylistMain';
// import Table from '../components/Table/Table';
// import CreatePlaylist from '../components/Playlist/CreatePlaylist/CreatePlaylist';
// import Link from 'next/link';


const Playlists = () => {

    const [active, setActive] = useState(false)

    const [tablet, setTablet] = useState<any>(false)

    const router = useRouter()

    


    return (
        <div className={styles.container}>
            <div className={styles.miniContainer}>
                <div className={styles.cellheader}>
                    {/* <div>
                        <div onClick={() => router.push('/')}>
                            <Image className={styles.cursor} src={'./icon/isari.svg'} width={32} height={32} alt='image' />
                        </div>
                    </div>
                    <Image src={'./icon/profile-icon.svg'} width={56} height={56} alt='profile image' /> */}
                    <ReusableHeader />
                </div>
                <div className={styles.cellFont}>
                    {/* <Link href={'/'}>
                        <Image className={styles.tabletCursos} src={'./icon/isari.svg'} width={32} height={32} alt='image' />
                    </Link> */}
                    <div className={styles.mobileGap}>
                        <div className={styles.cellMyPlaylist}>
                            My Playlists
                        </div>
                        <div>
                            <div className={styles.mobileButton}>
                                <Button title={''}
                                    mode={'reusable button'}
                                    imageSrc='plus.svg'
                                    imageHeight={20}
                                    imageWidth={20}
                                    padding='4px'
                                    borderRadius='4px'
                                    onClick={() => setActive(!active)} />
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
                    </div>
                </div>
                {/* <div className={styles.cellInput}>
                </div> */}
                <div className={styles.newPlaylist}>
                    {active &&
                        <AddPlaylistMain  onDelete={() => setActive(false) }/>
                    }
                </div>
            </div>
            <div className={styles.cellPlaylist}>
                <UserPlaylist />
            </div>
        </div>
    );
}

Playlists.displayName = 'Playlists';

export default Playlists;