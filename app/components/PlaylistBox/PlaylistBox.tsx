import styles from './PlaylistBox.module.scss';

type Props = {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const PlaylistBox = ({children, className, onClick}: Props) => {
    const classes = [styles.container, className]

    return(
        <div className={classes.join(' ').trim()} onClick={onClick}>
            {children}
        </div>
    )
}


export default PlaylistBox;