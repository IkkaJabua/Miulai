'use client'
import Image from "next/image";
import styles from '../components/Button/Button.module.scss'
import { useEffect, useState, type JSX } from "react";


export interface ButtonProps {
    title: string;
    disabled?: boolean;
    mode: 'without icon' | 'long with icon' | 'short with icon' | 'reusable button';
    icon?: boolean;
    onClick: Function;
    width?: string;
    maxWidth?: string;
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

const ButtonHelper = (props: ButtonProps) => {
    const [classes, setClasses] = useState<string[]>([]);

    const style: any = {
        width: props.width || 'auto',
        Height: props.height || 'auto',
        padding: props.padding || 'auto',
        borderRadius: props.borderRadius || 'auto',
        gap: props.gap || 'auto',
        fontSize: props.fontSize || 'auto',
        fontWeight: props.fontWeight || 'auto',
        maxWidth: props.maxWidth || 'auto'

    };

    // ====== names for button icons
    // 'disabled-clip.svg'
    // 'disabled-plus.svg'
    // 'clip.svg'
    // 'plus.svg'


    useEffect(() => {
        const newClasses: string[] = [];
        if (props.disabled && props.mode === 'reusable button') {
            newClasses.push(styles.reusableButtonDisabled)
        } else if (props.mode === 'reusable button') {
            newClasses.push(styles.reusableButton)
        }
        setClasses(newClasses);
    }, [props.mode, props.disabled]);

    return { classes, style };
};


export default ButtonHelper;