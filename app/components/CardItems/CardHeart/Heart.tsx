import Icon from '../../Icon/Icon';
import styles from './Heart.module.scss';
import Image from 'next/image';


interface Props {
    onClick?: () => void;
}

const Heart = (props: Props) => {
    
    return(
        <div className={styles.container} onClick={props.onClick}>
            <Image src={'/icon/heart-ntr.svg'} alt={'image'} width={32} height={32} />
        </div>
    )
}

export default Heart;