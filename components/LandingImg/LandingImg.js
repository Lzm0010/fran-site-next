import styles from './LandingImg.module.scss';
import { useState } from 'react';
import Image from 'next/image';

export default function LandingImg({src, alt, offset, linkname, href}) {
    const [up] = useState(offset === 'up' ? true : false);

    return (
      <div className={styles.imageContainer}>
        <div className={`${styles.imageOffset} ${up ? styles.offsetUp: styles.offsetDown}`}></div>
        <a href={href} target="_blank" rel="noreferrer">
          <div>
            <div className={`${styles.landingImage} ${up ? styles.up: styles.down}`}>
              <Image className={styles.image} src={src} alt={alt} layout="fill" />
            </div>
            <div className={`${styles.actingLink} ${up ? styles.linkUp: styles.linkDown}`}>
              <span className={styles.linkSpan}>
                {linkname}
              </span>
            </div>
          </div>
        </a>
      </div>
    )
}