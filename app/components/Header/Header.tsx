import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import styles from './Header.module.scss';
import Image from 'next/image';



const Header = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Input className={styles.input} />
                <Image src={'/icon/userHeaderIcon.svg'} alt='image' width={32} height={32} className={styles.image} />
            </div>
        </div>
    )
}


export default Header;