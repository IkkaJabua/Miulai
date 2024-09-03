import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import styles from './Header.module.scss';
import Image from 'next/image';

interface Props {
    icon?: string;
}

export default ({ icon }: Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.input}>
                <Input />
            </div>
            <Image src={'icon/userIcon.svg'} alt='image' width={52} height={52} className={styles.image} />
        </div>
    )
}



