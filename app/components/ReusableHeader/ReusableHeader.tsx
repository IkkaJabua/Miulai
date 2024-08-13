import styles from './ReusableHeader.module.scss';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    href: string;
}

const ReusableHeader = (props: Props) => {

    return(
        <div className={styles.container}>
            <Link href={props.href} className={styles.img}>
                <Image src={'/icon/arrow-left.svg'} alt={'image'} width={22} height={22} />
            </Link>
            <Image src={'/icon/userIcon.svg'} alt='image' width={45} height={45} className={styles.img} />
        </div>
    )
}

export default ReusableHeader;