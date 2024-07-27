import Button from '../../Button/Button';
import PlaylistBox from '../../PlaylistBox/PlaylistBox';
import styles from './CreatePlaylist.module.scss';
import Image from 'next/image';

type Props = {
    onClick?: () => void;
}

const CreatePlaylist = ({ onClick }: Props) => {

    return (
        <PlaylistBox className={styles.container}>
            <div className={styles.header}>
                <Image src={'./icons/left.svg'} alt='image' width={20} height={20} onClick={onClick} />
                <span className={styles.title}>Create New Playlist</span>
            </div>
            <input type="text" placeholder='Playlist name' className={styles.inp} />
            <div className={styles.filesWrapper}>
                <input type="file" className={styles.files} />
                <Image src={'./icons/photo.svg'} alt='image' width={88} height={80} className={styles.image} />
            </div>
            <Button title={'Save'} mode={'reusable width'} width={290} />
        </PlaylistBox>
    )
}

export default CreatePlaylist;