import styles from "./Button.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
interface Props {
    title: string;
    className?: string;
    disabled?: boolean;
    mode: 'without icon' | 'long with icon' | 'short with icon';
    icon?: boolean

}

export default (props: Props) => {
    const [clip, setClip] = useState<any>()
    const [classes, setClasses] = useState<any>([]);

    useEffect(() => {
        const newClasses: any = [];
        if (props.disabled && (props.mode === 'without icon')) {
            newClasses.push(styles.without_icon_disabled)
        }
        else if (props.disabled && (props.mode === 'long with icon')) {
            newClasses.push(styles.long_with_icon_disabled)
            setClip(<Image src='../Images/Button Images/disabled-clip.svg' alt='clip logo' width={20} height={20} />)
        }
        else if (props.disabled && (props.mode === 'short with icon')) {
            newClasses.push(styles.short_with_icon_disabled)
            setClip(<Image src='../Images/Button Images/disabled-plus.svg' alt='clip logo' width={20} height={20} />)
        }
        else if (props.mode === 'without icon') {
            newClasses.push(styles.WithoutIcon)
        }
        else if (props.mode === 'long with icon') {
            newClasses.push(styles.LongWithIcon)
            setClip(<Image src='../Images/Button Images/clip.svg' alt='clip logo' width={20} height={20} />);
        } else if (props.mode === 'short with icon') {
            newClasses.push(styles.ShortWithIcon)
            setClip(<Image src='../Images/Button Images/plus.svg' alt='plus' width={20} height={20} />);
        }
        setClasses(newClasses);
    }, [props.mode, props.disabled]);
    console.log(classes)


    return (
        <div className={classes.join(' ').trim()}>
            {props.icon && clip}
            {props.title}
        </div>
    )
}