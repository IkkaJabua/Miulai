'use client'
import axios from 'axios';
import Button from '../components/Button/Button'
import styles from './page.module.scss'
import Image from 'next/image'
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';



const Registracion = () => {
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (values: any) => {

        axios.post('https://interstellar-1-pdzj.onrender.com/user', values).
            then(r => {
                router.push('/signin')
                console.log(r)
            })

    }

    return (
        <div className={styles.container}>
            <div className={styles.cellStructure}>
                <div>
                    <Image src={'/icon/logo.svg'} alt='image' width={97} height={83} />
                </div>
                <div className={styles.subtitle}>
                    <div className={styles.firstFont}>
                        Where <span>Harmony</span>
                    </div>
                    <div className={styles.secondFont}>
                        <span>Meets</span> Melody
                    </div>
                    <div className={styles.thirdFont}>The Future Of Music Streaming</div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.registracion}>
                        {/* <input
                            className={styles.input}
                            type='text'
                            placeholder='name'
                            {...register('name')}
                        /> */}

                        <input className={styles.input}
                            type='email'
                            placeholder='Email'
                            {...register('email')}
                        />


                        <input className={styles.input}
                            type='text'
                            placeholder='Password'
                            {...register('password')}
                        />
                        <div className={styles.registrationErors}>
                            <div>Password must contain: </div>
                            <div>*8 or more characters </div>
                            <div>*at least one capital letter  </div>
                            <div>*at least one number</div>
                        </div>

                        <input className={styles.input}
                            type='text'
                            placeholder='current Password'
                            {...register('currentpassword')}
                        />


                    </div>
                    <div className={styles.button}>
                        <Button title={'SIGN IN'}
                            mode={'reusable button'}
                            onClick={() => console.log('button clicked')}
                            width='350px'
                            padding='12px'
                            borderRadius='8px'
                            fontSize='16px'
                        />
                    </div>

                </form>
            </div>
            <Image className={styles.sokrate} src={'/image/sokrate4.svg'} height={711} width={700} alt='sokrate' />

        </div>



    )

}

export default Registracion
