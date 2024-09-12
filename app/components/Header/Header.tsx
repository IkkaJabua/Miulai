import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import styles from './Header.module.scss';
import Image from 'next/image';



const Header = () => {

    return(
        <div className={styles.container}>
            <Input />
            <Image src={'icon/userHeaderIcon.svg'} alt='image' width={33} height={33} className={styles.image} />
        </div>
    )
}


export default Header;

