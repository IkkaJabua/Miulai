'use client';
import ReusableHeader from '@/app/components/ReusableHeader/ReusableHeader';
import styles from './page.module.scss';
import News from '@/app/components/News/News';
import Input from '@/app/components/Input/Input';
import Tables from '@/app/components/Table/Table';
import Header from '@/app/components/Header/Header';
import ChartsTable from '../../components/Table/chartTable/chartTable'



const Charts = () => {

    return(
        <div className={styles.container}>
            <ReusableHeader />
            <News 
            title={'Top Chart Of The Week'} 
            image={'/image/chart-background.png'} 
            plays={'509,678'} />
            <Input />
            <ChartsTable />
        </div>
    )
}

export default Charts;