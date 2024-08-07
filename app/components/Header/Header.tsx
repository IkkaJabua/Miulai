import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import styles from './Header.module.scss';
import Image from 'next/image';

interface Props {
    icon: string;
}

export default ({icon} : Props) => {

    return(
        <div className={styles.container}>
            <Input />
            <Image src={icon} alt='image' width={56} height={56} className={'image'} />
        </div>
    )
}



