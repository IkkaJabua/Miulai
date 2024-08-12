import Link from 'next/link';
import styles from './CardsHeader.module.scss';

type Props = {
    title: string;
    subtitle: string;
}


const   CardsHeader = ({title, subtitle}: Props) => {

    return(
        <div className={styles.container}>
            <h3 className={styles.firstChild}>
                {title}
            </h3>
            <span className={styles.lastChild}>
                <span>See All</span>
                <Link href={subtitle} />
            </span>
        </div>
    )
}


export default CardsHeader;