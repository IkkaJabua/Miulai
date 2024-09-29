'use client';
import { useState } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Input from '@/app/components/Input/Input';
import Button from '@/app/components/Button/Button';
import CreatePlaylist from '@/app/components/Playlist/CreatePlaylist/CreatePlaylist';
import UserPlaylist from '@/app/components/UserPlaylist/UserPlaylist';
import { useRouter } from 'next/navigation';
import ReusableHeader from '@/app/components/ReusableHeader/ReusableHeader';

const Playlists = () => {
    const [active, setActive] = useState(false);
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.miniContainer}>
                <div className={styles.cellheader}>
                    <ReusableHeader />
                </div>
                <div className={styles.cellFont}>
                    <Link href={'/'}>
                        <Image
                            className={styles.tabletCursos}
                            src={'/icon/isari.svg'}
                            width={32}
                            height={32}
                            alt='image'
                        />
                    </Link>
                    <div className={styles.mobileGap}>
                        <div className={styles.cellMyPlaylist}>My Playlists</div>
                        <div className={styles.mobileButton}>
                            <Button
                                title={''}
                                mode={'reusable button'}
                                imageSrc='plus.svg'
                                imageHeight={20}
                                imageWidth={20}
                                padding='4px'
                                borderRadius='4px'
                                onClick={() => console.log('button clicked')}
                            />
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
                    {active && <CreatePlaylist />}
                </div>
            </div>
            <div className={styles.cellPlaylist}>
                <UserPlaylist />
            </div>
        </div>
    );
};

Playlists.displayName = 'Playlists';

export default Playlists;
