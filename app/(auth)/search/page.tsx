'use client'
import Input from '@/app/components/Input/Input'
import styles from './page.module.scss'
import Header from '@/app/components/Header/Header'
import { useEffect, useState } from 'react';
import axios from 'axios'




const search = () => {
    const [inputValue, setInputValue] = useState('');

    const inputChange = (e: any) => {
        // const newValue = e.target.value;
        setInputValue(e.target.value);
        console.log(e.target.value);
    };

    const [searchItems, setSearchItems] = useState<[]>()

    useEffect(() => {
        axios.get('https://interstellar-1-pdzj.onrender.com/search?search=pink')
    })




    return (

        <div className={styles.container}>
            <Header value={inputValue} onChange={inputChange} />
            {

            }

        </div>
    )


}

export default search