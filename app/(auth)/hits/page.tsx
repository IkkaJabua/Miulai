'use client';

import Input from '../../components/Input/Input';
import News from '../../components/News/News';
import ReusableHeader from '../../components/ReusableHeader/ReusableHeader';
import Table from '../../components/Table/Table';
import styles from './page.module.scss';


const Hits = () => {

    return(
        <div className={styles.container}>
            <ReusableHeader href={'/Homepage'} />
            <News title={'Top Hit Of The Week'} image={'/image/testImg.jpg'} />
            <Input />
            <Table />
        </div>
    )
}

Hits.displayName = 'Hits'

export default Hits;