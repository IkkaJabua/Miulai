import styles from './CheckPlaylist.module.scss';

interface Props {
    name: string;
}

const CheckPlaylist = (props: Props) => {

    return (
        <div className={styles.container}>
            <input type="checkbox" />
            <span className={styles.name}>
                {props.name}
            </span>
        </div>
    )
}

export default CheckPlaylist;