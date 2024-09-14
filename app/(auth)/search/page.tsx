'use client'
import Input from '@/app/components/Input/Input'
import styles from './page.module.scss'
import Header from '@/app/components/Header/Header'
import { useEffect, useState } from 'react';
import axios from 'axios'




const search = () => {
    const [inputValue, setInputValue] = useState();

    const inputChange = (e: any) => {
        // const newValue = e.target.value;
        setInputValue(e.target.value);
        console.log(e.target.value);
    };

    const [searchItems, setSearchItems] = useState<[]>()

    useEffect(()=> {
        axios.get(`https://freetestapi.com/api/v1/countries?search=${inputValue}`)
        .then( async (r) => {
            setSearchItems(r.data)
            console.log(r.data)
        })
    }, [inputValue])




    return (

        <div className={styles.container}>
            <Header value={inputValue} onChange={inputChange} />
            <div className={styles.insideContainer}>
                {
                    searchItems?.map((item: any) => (
                        <div className={styles.itemContainer}>
                            <div><h4>{item.name}</h4></div>
                        </div>

                    ))

                }

            </div>


        </div>
    )


}

export default search