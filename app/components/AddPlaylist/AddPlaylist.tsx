import styles from './AddPlaylist.module.scss';
import Image from 'next/image';
import PlaylistItem from './PlaylistItem/PlaylistItem';


const AddPlaylist =  () => {

    return(
        <div className={styles.container}>
            <PlaylistItem icon={'user-image.svg'} title={'Add to Playlist'} />
            <PlaylistItem icon={'user-image.svg'} title={'View Album'} />
            <PlaylistItem icon={'user-image.svg'} title={'View Artist'} />
        </div>
    )
}


export default AddPlaylist;