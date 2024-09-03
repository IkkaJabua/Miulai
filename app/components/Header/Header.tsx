import Input from '../Input/Input';
import styles from './Header.module.scss';
import Image from 'next/image';

interface Props {
    icon: string;
}

export default ({icon} : Props) => {

    return(
        <div className={styles.container}>
            <Input className={styles.input} />
            <Image src={icon} alt='image' width={56} height={56} className={styles.image} />
        </div>
    )
}



