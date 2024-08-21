import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import styles from './Header.module.scss';
import Image from 'next/image';

interface Props {
    icon?: string;
}

export default ({icon} : Props) => {

    return(
        <div className={styles.container}>
            <Input />
            <Image src={'icon/user-img.svg'} alt='image' width={32} height={32} className={styles.image} />
        </div>
    )
}



