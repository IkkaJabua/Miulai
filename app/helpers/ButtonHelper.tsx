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

    useEffect(() => {
        const newClasses: string[] = [];
        if (props.disabled && props.mode === 'without icon') {
            newClasses.push(styles.without_icon_disabled);
        } else if (props.disabled && props.mode === 'long with icon') {
            newClasses.push(styles.long_with_icon_disabled);
            setClip(<Image src='../icon/disabled-clip.svg' alt='clip logo' width={20} height={20} />);
        } else if (props.disabled && props.mode === 'short with icon') {
            newClasses.push(styles.short_with_icon_disabled);
            setClip(<Image src='../icon/disabled-plus.svg' alt='clip logo' width={20} height={20} />);
        } else if (props.disabled && props.mode === 'reusable button') {
            newClasses.push(styles.reusableWidthDisabled)
        } else if (props.mode === 'without icon') {
            newClasses.push(styles.WithoutIcon);
        } else if (props.mode === 'long with icon') {
            newClasses.push(styles.LongWithIcon);
            setClip(<Image src='../icon/clip.svg' alt='clip logo' width={20} height={20} />);
        } else if (props.mode === 'short with icon') {
            newClasses.push(styles.ShortWithIcon);
            setClip(<Image src='../icon/plus.svg' alt='plus' width={20} height={20} />);
        } else if (props.mode === 'reusable button') {
            newClasses.push(styles.reusableButton)
        }
        setClasses(newClasses);
    }, [props.mode, props.disabled]);

    return { classes, clip, style };
};


