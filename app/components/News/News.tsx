import styles from './News.module.scss'
import Button from '../Button/Button'

interface Props {
    title: string
    image: string
}


export default (props: Props) => {
    const backImage: object = {
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'left',

    }

    return (
        <div className={styles.container} style={backImage}>
            <div className={styles.container_news}>
                <div className={styles.container_title} >
                    <div className={styles.font_style_news}>{props.title}</div>
                    <div className={styles.font_style_plays}>795,900 Plays</div>
                </div>
                <Button title={'Listen Now'}
                    mode={'reusable button'}
                    padding='12px 24px 12px 20px'
                    borderRadius='8px'
                    gap='4px'
                    width='153px'
                    fontSize='16px'
                    fontWeight='500'
                    imageSrc='clip.svg'
                    imageWidth={20}
                    imageHeight={20}
                    onClick={() => console.log('button clicked')} />
            </div>
        </div>
    )
}