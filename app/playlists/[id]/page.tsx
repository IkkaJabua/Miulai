'use client'
import Button from 'antd/es/button/button'
import styles from './page.module.scss'
import Image from 'next/image'
import News from '@/app/components/News/News'
import Input from '../../components/Input/Input'
import Table from '../../components/Table/Table'
import Link from 'next/link'
import { useRouter } from 'next/navigation'




export default () => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.cellheader}>
                <Image onClick={() => router.back()} className={styles.cursor} src={'../icon/isari.svg'} width={32} height={32} alt='image' />
                <Image src={'../icon/profile-icon.svg'} width={56} height={56} alt='profile image' />
            </div>
            <News title={'Playlist 1'} image={'../frame2.png'} />
            <Input />
            <Table />
        </div>
    )
}

