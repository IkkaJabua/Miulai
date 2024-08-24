'use client';
import Image from "next/image";
import styles from './BurgerMenu.module.scss';
import { useState } from "react";
import Menu from "../Menu/Menu";

type Props = {
    className: string;
}

const BurgerMenu = (props: Props) => {
    const [menu, setMenu] = useState(false);

    const onMenuClick = () => {
        setMenu(!menu)
    }

    return (
        <div className={`${styles.container} ${props.className}`} onClick={onMenuClick}>
            {
                    menu
                    ? <Menu />
                    : <Image src={"/icon/burgerMenu.svg"} alt={"image"} width={44} height={44} />
            }
        </div>
    )
}

export default BurgerMenu;