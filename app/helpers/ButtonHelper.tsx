'use client'
import Image from "next/image";
import styles from '../components/Button/Button.module.scss'
import { useEffect, useState, type JSX } from "react";
import { Height, Padding } from "@mui/icons-material";

interface Props {
    fontWeight: string;
    fontSize: string;
    gap: string;
    height: string;
    borderRadius: string;
    padding: string;
    disabled?: boolean;
    mode: 'without icon' | 'long with icon' | 'short with icon' | 'reusable button';
    width?: number | string
}

export const getButtonStyles = (props: Props) => {
    const [clip, setClip] = useState<React.ReactElement>();
    const [classes, setClasses] = useState<string[]>([]);

    const style: any = {
        width: props.width || 'auto',
        Height: props.height || 'auto',
        padding: props.padding || 'auto',
        borderRadius: props.borderRadius || 'auto',
        gap: props.gap || 'auto',
        fontSize: props.fontSize || 'auto',
        fontWeight: props.fontWeight || 'auto',

    };

    // ====== names for button icons
    // 'disabled-clip.svg'
    // 'disabled-plus.svg'
    // 'clip.svg'
    // 'plus.svg'


    useEffect(() => {
        const newClasses: string[] = [];
        if (props.disabled && props.mode === 'reusable button') {
            newClasses.push(styles.reusableWidthDisabled)
        } else if (props.mode === 'reusable button') {
            newClasses.push(styles.reusableButton)
        }
        setClasses(newClasses);
    }, [props.mode, props.disabled]);

    return { classes, clip, style };
};


