import Link from 'next/link';
import styles from './CardsHeader.module.scss';

type Props = {
    title: string;
    subtitle: string;
    onClick?: () => void;
}


const CardsHeader = ({title, subtitle, onClick}: Props) => {

    return(
        <div className={styles.container}>
            <h3 className={styles.firstChild}>
                {title}
            </h3>
            <span className={styles.lastChild}>
                <button onCanPlay={onClick}>See All</button>
                <Link href={subtitle} />
            </span>
        </div>
    )
}


export default CardsHeader;