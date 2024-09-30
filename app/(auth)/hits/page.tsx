'use client';

import HitsTable from '../../components/Table/HitsTable/HitsTable'
import Input from '../../components/Input/Input';
import News from '../../components/News/News';
import ReusableHeader from '../../components/ReusableHeader/ReusableHeader';
import Table from '../../components/Table/Table';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Hits = () => {

    const [topHit, setTopHIt] = useState<any>()
    useEffect(() => {
        axios
            .get(
                `https://interstellar-1-pdzj.onrender.com/music`
            )
            .then(async (r) => {
                setTopHIt(r.data[0])
                // console.log(r.data[0], 'musikaaa muikaaa ')
            });
    }, []);
    <News title={'Top Hit Of The Week'} image={topHit?.albumCover} plays={topHit?.listenerCount} />



    return (
        <div className={styles.container}>
            <ReusableHeader />
            <News title={'Top Hit Of The Week'} image={topHit?.albumCover} plays={topHit?.listenerCount} />
            <Input />
            <HitsTable />
        </div>
    )
}

Hits.displayName = 'Hits'

export default Hits;