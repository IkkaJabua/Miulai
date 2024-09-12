'use client';
import Button from '../components/Button/Button';
import styles from './page.module.scss';
import Image from 'next/image';



const signinStartPoint = () => {

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={'/icon/logo.svg'} width={98} height={83} alt={'image'} />
            </div>
            <div className={styles.wrapper}>
                <h1 className={styles.header}>
                    <p className={styles.whiteWords}>
                        <span>WHERE</span>
                        <span>HARMONY</span>

                    </p>
                    <p className={styles.colouredWords}>
                        <span>MEETS</span>
                        <span>MELODY</span>
                    </p>
                </h1>
                <p className={styles.subtitle}>The Future Of Music Streaming</p>

                <Button title={'GET STARTED'}
                    mode={'without icon'}
                    onClick={() => (console.log('button clicked'))}
                    width='300px'
                    padding='16px 40px'
                    borderRadius='8px' />
            </div>

        </div>
    )
}



export default signinStartPoint;