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
                <div>
                    <Image onClick={() => router.back()} className={styles.cursor} src={'../icon/isari.svg'} width={32} height={32} alt='image' />
                    {/* <Image className={styles.tabletBurgercursos} src={'../icon/menu-burger.svg'} width={44} height={44} alt='burger-menu-icon' /> */}
                </div>
                <Image src={'../icon/profile-icon.svg'} width={56} height={56} alt='profile image' />
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

