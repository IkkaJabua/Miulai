import { url } from 'inspector'
import styles from './News.module.scss'
import image from '../../../public/frame.png'

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
                <div className={styles.button}>
                    listen now
                </div>
            </div>
        </div>
    )
}