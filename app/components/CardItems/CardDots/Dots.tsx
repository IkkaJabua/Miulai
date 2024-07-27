import Playlist from '../../Playlist/Playlist';
import styles from './Dots.module.scss';
import Image from "next/image";


interface Props {
    onClick?: () => void;
}

export default (props: Props) => {


    return(
        <div onClick={props.onClick}>   
            <Image src={'/card-dots.svg'} alt="image" width={32} height={32} />
        </div>
    )
}