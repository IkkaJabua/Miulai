
import styles from './UserPlaylist.module.scss'
import Image from 'next/image'


export default () => {
    






    
    return (
        <div className={styles.container}>
            <Image src={'./album.svg'} width={234}  height={251} alt='image'/>
            <div className={styles.font}>Playlist name 1</div>
        </div>
    )
}