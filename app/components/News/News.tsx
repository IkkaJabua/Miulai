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
        backgroundPosition: 'center'
    }

    return (
        <div className={styles.container} style={backImage}>
            <div className={styles.container_news}>
                <div className={styles.container_title} >
                    <div className={styles.font_style_news}>{props.title}</div>
                    <div className={styles.font_style_plays}>795,900 Plays</div>
                </div>
                <Button title={'Listen Now'} mode={'long with icon'} icon />
            </div>
        </div>
    )
}