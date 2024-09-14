'use client';
import styles from './ReusableHeader.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



const ReusableHeader = () => {
    const router = useRouter();

    return(
        <div className={styles.container}>
            <div onClick={() => router.push('/')} className={styles.img}>
                <Image src={'/icon/arrow-left.svg'} alt={'image'} width={22} height={22} />
            </div>
            <Image src={'/icon/user-img.svg'} alt='image' width={38} height={38} className={styles.img} />
        </div>
    )
}

export default ReusableHeader;