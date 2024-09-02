'use client';
import Input from '../components/Input/Input';
import News from '../components/News/News';
import ReusableHeader from '../components/ReusableHeader/ReusableHeader';
import Table from '../components/Table/Table';
import styles from './page.module.scss';


export default () => {

    return(
        <div className={styles.container}>
            <ReusableHeader href={'/Homepage'} />
            <News title={'Top Chart Of The Week'} image={'/image/testImg.jpg'} />
            <Input />
            <Table />
        </div>
    )
}