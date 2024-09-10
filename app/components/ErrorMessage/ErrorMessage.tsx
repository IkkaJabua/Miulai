import styles from './ErrorMessage.module.scss';

interface Props {
    children?: React.ReactNode;
}

const ErrorMessage = (props: Props) => {

    return(
        <>
            {props.children}
        </>
    )
}

export default ErrorMessage;