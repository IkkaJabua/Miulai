import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import styles from './Header.module.scss';
import Image from 'next/image';

interface Props {
    icon?: string;
}

const Header = ({icon} : Props) => {

    return(
        <div className={styles.container}>
            <Input />
            <Image src={'icon/userIcon.svg'} alt='image' width={52} height={52} className={styles.image} />
        </div>
    )
}


export default Header;

