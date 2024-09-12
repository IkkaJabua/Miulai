'use client'
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios'


const Signup = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onLogin = (values: any) => {
        axios.post('https://auth.novatori.ge/auth/login', values)
            .then(r => {
                localStorage.setItem('user', JSON.stringify(r.data))
                console.log(r.data)
            })

    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>
                    <div className={styles.logoWrapper}>
                        <Image src={'/icon/logo.svg'} alt='image' width={97} height={83} className={styles.logo} />
                    </div>
                    <h1 className={styles.header}>
                        <p className={styles.white}>
                            <span>Where</span>
                            <span>Harmony</span>
                        </p>
                        <p className={styles.gradients}>
                            <span>Meets</span>
                            <span>Melody</span>
                        </p>
                    </h1>
                    <p className={styles.subtitle}>
                        The Future Of Music Streaming
                    </p>
                    <span className={styles.signInTitle}>
                        Sign In
                    </span>



                    <form onSubmit={handleSubmit(onLogin)} className={styles.formsWrapper}>
                        <div className={styles.inputWrapper}>
                            <input type="email"
                                placeholder='Email'
                                className={styles.input}
                                {...register('email')}
                            />
                            <input type="password"
                                id="" placeholder='Password'
                                className={styles.input}
                                {...register('password')}
                            />
                        </div>
                        <div className={styles.checkboxWrapper}>
                            <div className={styles.checkboxContainer}>
                                <input type="checkbox" />
                                <span className={styles.remember}>Remember me</span>
                            </div>

                            <Link href={'/'} className={styles.forgot}>
                                Forgot your password?
                            </Link>
                        </div>
                        <Button title={'SIGN IN'}
                            mode={'reusable button'}
                            onClick={() => console.log('button clicked')}
                            width='350px'
                            padding='12px'
                            borderRadius='8px'
                            fontSize='16px'/>
                    </form>
                    <Link href={''} className={styles.signup}>
                        <span>
                            Don’t have an account?
                        </span>
                        <span>
                            Sign up
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Signup;