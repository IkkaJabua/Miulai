import { useState } from 'react'
import HeartShapeBtn from '../heatShapeIcon/HeartShapeIcn'
import Icon from '../Icon/Icon'
import styles from './ MusicCard.module.scss'
import Image from 'next/image'

interface Props {
    title: string
    author: string
}

export default (props: Props) => {
    

    return (
        <div className={styles.container}>
            <div className={styles.container_author}>
                <div><Image src={'./MusicCover.svg'} alt='music cover' width={72} height={72} /></div>
                <div className={styles.container_name}>
                    <div className={styles.music_name_font_style}>{props.title}</div>
                    <div className={styles.music_author_font_style}>{props.author}</div>
                </div>
            </div>
            <div className={styles.container_detals}>
                <div className={styles.time_font_style}>3:45</div>
                <div className={styles.container_like_point}>
                    <HeartShapeBtn isDisabled={false} isActive={true} onClick={() => (console.log('button clicked'))} />
                    <div>
                        <Image src={'./Dots.svg'} alt='Dots button' width={24} height={24} />
                    </div>
                </div>
            </div>
        </div>
    )
}