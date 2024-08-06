import Icon from '../../Icon/Icon';
import styles from './Dots.module.scss';


interface Props {
    onClick?: () => void;
}

export default (props: Props) => {


    return(
        <div onClick={props.onClick}>   
            <Icon name={'/card-dots.svg'} alt="image" width={32} height={32} />
        </div>
    )
}