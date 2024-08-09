'use client'
import styles from "./Button.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getButtonStyles } from "@/app/helpers/ButtonHelper";

interface Props {
    title: string;
    className?: string;
    disabled?: boolean;
    mode: 'without icon' | 'long with icon' | 'short with icon' | 'reusable width';
    icon?: boolean;
    width?: string | number;
    onClick: Function;
}

export default (props: Props) => {
    const { classes, clip , style} = getButtonStyles(props);


    return (
        <button type="submit" className={classes.join(' ').trim()} style={style}  onClick={() => props.onClick()}>
            {props.icon && clip}
            {props.title}
        </button>
    )
}