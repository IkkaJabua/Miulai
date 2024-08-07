import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import styles from './page.module.scss'


export default () => {
    return (
        <div className={styles.container}>
            <div className={styles.miniContainer}>
                <div className={styles.cellheader}>
                    <div>{'<'}</div>
                    <div>image</div>
                </div>
                <div className={styles.cellFont}>My Playlists </div>
                <div className={styles.cellInput}>
                    <Input />
                    <Button title={'Listen Now'} mode={'short with icon'} icon/>
                </div>
            </div>
            <div className={styles.cellPlaylist}>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>

            </div>
        </div>
    );
}