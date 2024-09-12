import Icon from '../../Icon/Icon';
import styles from './Dots.module.scss';
import Image from 'next/image';

interface Props {
    onClick?: () => void;
}

const CreatePlaylist = (props: Props) => {


    return(
        <div onClick={props.onClick}>   
            <Image src={'/icon/card-dots.svg'} alt="image" width={32} height={32} />
        </div>
    )
}

export default CreatePlaylist;