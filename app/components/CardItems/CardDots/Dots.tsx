import styles from './Dots.module.scss';
import Image from 'next/image';

interface Props {
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Dots = (props: Props) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {

        if (props.onClick) {
            props.onClick(event); 
        }
    };

    return (
        <div className={styles.dots} onClick={handleClick}>
            <Image src={'/icon/card-dots.svg'} alt="dots icon" width={32} height={32} />
        </div>
    );
};

export default Dots;
