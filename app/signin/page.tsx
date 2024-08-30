import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button/Button';

const Signup = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>
                    <Image src={'/icon/logo.svg'} alt='image' width={97} height={83} className={styles.logo} />
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



                    <form action="" className={styles.formsWrapper}>
                        <div className={styles.inputWrapper}>
                            <input type="email" placeholder='Email' className={styles.input} />
                            <input type="password" name="" id="" placeholder='Password' className={styles.input} />
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
                        <Button title={'SIGN IN'} mode={'without icon'} onClick={undefined} />
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