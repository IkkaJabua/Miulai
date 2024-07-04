import styles from './ItemsUnion.module.scss'
import Dots from "../CardDots/Dots";
import Heart from "../CardHeart/Heart";


export default () => {

    return(
        <div className={styles.container}>
            <Heart />
            <Dots />
        </div>
    )
}