
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import styles from './Header.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import UserPopup from '../UserPopup/UserPopup';
import { useRouter } from 'next/router';


const Header = () => {

    const [showPopup, setShowPopup] = useState(false);
    // const router = useRouter();

    // toggle - ს პრინციპია ამ ფუნქციაში
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    
    
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Input className={styles.input} />
               
                <div className={styles.userIconWrapper} onClick={togglePopup}>
                    <Image
                        src={'/icon/userHeaderIcon.svg'}
                        alt='User Icon'
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                </div>
                {showPopup && (
                    <div className={styles.popupWrapper}>
                        <UserPopup
                            userName={'george'}
                            userGmail={'no@gmail.com'}      
                        />
                    </div>
                )}
            </div>
        </div>
    )
}


export default Header;