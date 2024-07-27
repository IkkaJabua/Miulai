import styles from './PItem.module.scss';
import Image from 'next/image';

type Props = {
    image: string;
    title: string;
    onClick?: () => void;
}

const PItem = ({image, title, onClick}: Props) => {

    return(
        <div className={styles.container} onClick={onClick}>
            <Image src={image} alt='image' width={24} height={24} />
            <span className={styles.title}>
                {title}
            </span>
        </div>
    )
}

export default PItem;