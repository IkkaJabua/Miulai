'use client'
import axios from 'axios';
import Button from '../components/Button/Button'
import styles from './page.module.scss'
import Image from 'next/image'
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { error } from 'console';


interface RegisterForm {
    name: string,
    email: string,
    password: string,
    currentPassword: string,
}


const Registracion = () => {
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterForm>();

    const onSubmit = (values: RegisterForm) => {

        axios.post('https://interstellar-1-pdzj.onrender.com/user', values).
            then(r => {
                router.push('/signin')
            })
        console.log('values', values)


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
                        <input
                            className={styles.input}
                            type='text'
                            placeholder='name'
                            {...register('name', {
                                required: true,
                                minLength: 2,
                            })}
                        />
                        {
                            errors.name && <div className={styles.errorMassage}>Enter your name</div>
                        }

                        <input className={styles.input}
                            type='email'
                            placeholder='Email'
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Enter correct Email'
                                }
                            })}
                        />
                        {
                            errors.email &&
                            <div className={styles.errorMassage}>{errors.email.message}</div>
                        }


                        <input className={styles.input}
                            type='text'
                            placeholder='Password'
                            {...register('password', {
                                required: true,
                                minLength: 8,

                            })}
                        />

                        <div className={styles.registrationErors}>
                            <div>Password must contain:</div>
                            <div>*8 or more characters</div>
                            <div>*at least one capital letter  </div>
                            <div>*at least one number</div>
                        </div>

                        <input className={styles.input}
                            type='text'
                            placeholder='current Password'
                            {...register('currentPassword', {
                                required: true
                            })}
                        />
                        {
                            errors.currentPassword && <span className={styles.errorMassage}>This is required</span>
                        }


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

export default RegisterForm
