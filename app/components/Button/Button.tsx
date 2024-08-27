'use client'
import styles from "./Button.module.scss";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getButtonStyles } from "@/app/helpers/ButtonHelper";

interface Props {
    title: string;
    disabled?: boolean;
    mode: 'without icon' | 'long with icon' | 'short with icon' | 'reusable button';
    icon?: boolean;
    onClick: Function;



    width?: string;
    padding?: string;
    borderRadius?: string;
    height?: string;
    gap?: string;
    fontSize?: string;
    fontWeight?: string;


    imageSrc?: string | undefined;
    imageWidth?: number | undefined;
    imageHeight?: number | undefined;
    imageAlt?: string;

}

export default (props: Props) => {
    const { classes, clip, style } = getButtonStyles(props);


    return (
        <button type="submit" className={classes.join(' ').trim()} style={style} onClick={() => props.onClick()}>
            {props.imageSrc && props.imageWidth && props.imageHeight && (
                <Image
                    src={`./icon/${props.imageSrc}`}
                    width={props.imageWidth}
                    height={props.imageHeight}
                    alt={props.imageAlt || "button-icon"}
                />
            )}
            {props.title}
        </button>
    )
}

