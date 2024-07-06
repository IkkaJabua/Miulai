import styles from "./Button.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { classesState, clipState } from "@/app/Recoilstates";
import { getButtonStyles } from "@/app/helpers/ButtonHelper";
interface Props {
    title: string;
    className?: string;
    disabled?: boolean;
    mode: 'without icon' | 'long with icon' | 'short with icon';
    icon?: boolean
    styles?: string
}

export default (props: Props) => {
    const [clip, setClip] = useRecoilState<any>(clipState)
    const [classes, setClasses] = useRecoilState<any>(classesState)

    useEffect(() => {
        const { newClasses, newClip } = getButtonStyles(props);
        setClasses(newClasses);
        setClip(newClip);
    }, [props.mode, props.disabled, setClasses, setClip]);


    return (
        <div className={classes.join(' ').trim()}>
            {props.icon && clip}
            {props.title}
        </div>
    )
}