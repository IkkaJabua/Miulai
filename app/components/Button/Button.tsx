import styles from "./Button.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { getButtonStyles } from "@/app/helpers/ButtonHelper";

interface Props {
    title: string;
    className?: string;
    disabled?: boolean;
    mode: 'without icon' | 'long with icon' | 'short with icon';
    icon?: boolean
}

export default (props: Props) => {
    const { classes, clip } = getButtonStyles(props);

    return (
        <div className={classes.join(' ').trim()}>
            {props.icon && clip}
            {props.title}
        </div>
    )
}