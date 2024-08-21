import styles from './ReusableHeader.module.scss';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    href: string;
}

const ReusableHeader = (props: Props) => {

    return(
        <div className={styles.container}>
            <Link href={'/'} className={styles.img}>
                <Image src={'/icon/arrow-left.svg'} alt={'image'} width={22} height={22} />
            </Link>
            <Image src={'/icon/user-img.svg'} alt='image' width={32} height={32} className={styles.img} />
        </div>
    )
}

export default ReusableHeader;