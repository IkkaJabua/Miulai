import styles from './ErrorMessage.module.scss'

interface Props {
    children?: React.ReactNode;
}

const ErrorMessage = (props: Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {props.children}
            </div>
        </div>
    )
}

export default ErrorMessage;