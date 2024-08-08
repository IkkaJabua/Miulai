import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import UserPlaylist from '../components/UserPlaylist/UserPlaylist';
import styles from './page.module.scss'
import Image from 'next/image';


export default ()  => {
    return (
        <div className={styles.container}>
            <div className={styles.miniContainer}>
                <div className={styles.cellheader}>
                    <Image src={'./icon/isari.svg'}   width={32}  height={32}  alt='image' />
                    <Image src={'./icon/profile-icon.svg'}  width={56} height={56} alt='profile image'/>
                </div>
                <div className={styles.cellFont}>My Playlists </div>
                <div className={styles.cellInput}>
                    <Input />
                    <Button title={'Listen Now'} mode={'short with icon'} icon/>
                </div>
            </div>
            <div className={styles.cellPlaylist}>
                <UserPlaylist />

            </div>
        </div>
    );
}