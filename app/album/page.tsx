'use client'
import Header from '../components/Header/Header'
import Input from '../components/Input/Input'
import News from '../components/News/News'
import Table from '../components/Table/Table'
import styles from './page.module.scss'
import Link from 'next/link'


export default () => {

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <Header />
                <div className={styles.bodyContainer}>
                    <News title={'Seek For Marktoop'} image={'/image/albumpage.jpeg'} />
                    <Table />
                </div>
            </div>

        </div>

    )

}