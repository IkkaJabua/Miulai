import Image from 'next/image';
import styles from './CreatePlaylist.module.scss';



const CreatePlaylist = () => {

    return(
        <div className={styles.container}>
            <div className={styles.head}>
                <Image src={'/icons/bla.svg'} alt={'image'} width={24} height={24} />
                <span className={styles.header}>Create New Playlist</span>
            </div>
        </div>
    )
}


export default CreatePlaylist;