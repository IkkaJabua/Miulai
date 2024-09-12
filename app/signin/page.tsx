'use client'
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { setCookie } from '../cookies';


type SignIn = {
    email: string;
    password: string;
    remember: boolean;
}

const Signup = () => {
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<SignIn>();

    const onLogin = (values: any) => {
        axios.post('https://interstellar-1-pdzj.onrender.com/auth', values)
            .then(r => {
                // localStorage.setItem('user', JSON.stringify(r.data))
                // console.log(r.data)
                setCookie('token', r.data.accesToken, 60)
                router.push('/')
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
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Entered value does not match email format",
                                    },
                                })}
                            />

                            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                            <input type="password"
                                id="" placeholder='Password'
                                className={styles.input}
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'min length of password should be 8 character'
                                    }
                                })}
                            />
                            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                        </div>
                        <div className={styles.checkboxWrapper}>
                            <div className={styles.checkboxContainer}>
                                <input type="checkbox" {...register('remember')} />
                                <span className={styles.remember}>Remember me</span>
                            </div>

                            <Link href={'/'} className={styles.forgot}>
                                Forgot your password?
                            </Link>
                        </div>
                        <Button title={'SIGN IN'}
                            mode={'reusable button'}
                            onClick={() => console.log('button clicked')}
                            width='340px'
                            padding='12px'
                            borderRadius='8px'
                            fontSize='16px'/>
                    </form>
                    <div onClick={() => router.push('/singup')} className={styles.signup}>
                        <span>
                            Don’t have an account?
                        </span>
                        <span>
                            Sign up
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;

