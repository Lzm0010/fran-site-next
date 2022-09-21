import styles from './AboutImg.module.scss';
import { useState } from 'react';
import Image from 'next/image';

export default function AboutImg({src, alt, offset}) {
    const [up] = useState(offset === 'up' ? true : false);

    return (
      <div className={styles.imageContainer}>
        <div className={`${styles.imageOffset} ${up ? styles.offsetUp : styles.offsetDown}`}></div>
        <div>
            <div className={`${styles.aboutImage} ${up ? styles.up: styles.down}`}>
                <Image className={styles.image} src={src} alt={alt} layout="fill" />
            </div>
        </div>
        <div className={`${styles.imageBlock} ${up ? styles.blockUp : styles.blockDown}`}></div> 
      </div>
    )
}