import Icon from '../../Icon/Icon';
import styles from './NewPlaylist.module.scss';
import Image from 'next/image';

type Props = {
    onClick?: () => void;
}


const NewPlaylist = ({onClick}: Props) => {

    return(
        <div className={styles.container} onClick={onClick}>
            <Icon name={'plusIcon'} alt='image' width={18} height={18} />
            <span className={styles.title}>
                New Playlist
            </span>
        </div>
    )
}

export default NewPlaylist;