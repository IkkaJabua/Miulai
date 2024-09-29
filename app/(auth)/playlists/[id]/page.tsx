'use client'
import Button from 'antd/es/button/button'
import styles from './page.module.scss'
import Image from 'next/image'
import News from '@/app/components/News/News'
import Input from '../../../components/Input/Input'
import Table from '../../../components/Table/Table'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import ReusableHeader from '@/app/components/ReusableHeader/ReusableHeader'




const Id = () => {
    const router = useRouter();
    const pathname = usePathname()

    // useEffect(() => {
    //     if (pathname === )
    // })

    return (
        <div className={styles.container}>
            <div className={styles.cellheader}>
                <ReusableHeader />
            </div>
            <div>
                <Image onClick={() => router.back()} className={styles.tabletCursor} src={'../icon/isari.svg'} width={32} height={32} alt='image' />
                <News title={'Playlist 1'} image={'/image/testImg.jpg'} />
            </div>
            <div className={styles.input}>
                <Input />
            </div>
            <Table />
        </div>
    )
}

Id.displayName = 'Id';

export default Id;