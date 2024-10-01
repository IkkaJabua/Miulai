'use client'
import styles from "./Button.module.scss";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ButtonHelper, { ButtonProps } from "@/app/helpers/ButtonHelper";


const Button = (props: ButtonProps) => {
    const { classes, style } = ButtonHelper(props);


    return (
        <button type="submit" className={classes.join(' ').trim()} style={style} onClick={props.onClick}>
            {props.imageSrc && props.imageWidth && props.imageHeight && (
                <Image
                    src={`../icon/${props.imageSrc}`}
                    width={props.imageWidth}
                    height={props.imageHeight}
                    alt={props.imageAlt || "button-icon"}
                />
            )}
            {props.title}
        </button>
    )
}


export default Button;