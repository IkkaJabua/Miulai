import { useState } from 'react';
import styles from './PlaylistItem.module.scss';
import Image from 'next/image';

type Props = {
    icon: string;
    title: string;
    onclick?: () => void;
}

const PlaylistItem = ({ icon, title}: Props) => {
    const [showList, setShowList] = useState(false);

    const showing = () => {
        setShowList(!showList)
    }

    return (
        <div className={styles.container} onClick={showing}>
            <Image src={icon} alt='image' width={24} height={24} />
            <span className={styles.title}>
                {title}
            </span>
        </div>
    )
}


export default PlaylistItem;