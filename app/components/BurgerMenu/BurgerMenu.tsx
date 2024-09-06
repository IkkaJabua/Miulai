'use client';
import Image from "next/image";
import styles from './BurgerMenu.module.scss';
import { useState } from "react";
import Menu from "../Menu/Menu";


const BurgerMenu = () => {
    const [menu, setMenu] = useState(false);

    const onMenuClick = () => {
        setMenu(!menu)
    }

    return (
        <div className={styles.container} onClick={onMenuClick}>
            {
                menu ?
                    <div className={styles.menu}>
                        <Menu />
                    </div> :
                    <Image src={"/icon/burgerMenu.svg"} alt={"image"} width={44} height={44} />
            }
        </div>
    )
}

export default BurgerMenu;