import Image from 'next/image';
import styles from './PressCard.module.scss';

export default function PressCard({link, img, title, subtitle}) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
            <div className={styles.pressCard}>
                <div className={styles.cardHeader}>
                    <Image className={styles.cardHeaderImage} src={img} alt={title}/>
                </div>
                <div className={styles.cardBody}>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.subtitle}>
                        {subtitle}
                    </div>
                </div>
            </div>
        </a>

    )
}