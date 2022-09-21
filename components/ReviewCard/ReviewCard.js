import Image from 'next/image';
import styles from './ReviewCard.module.scss';

export default function ReviewCard({reviewer, img, title, review}) {
    return (
        <div className={styles.reviewCard}>
            <div className={styles.cardHeader}>
                <Image className={styles.cardHeaderImage} src={img} alt={title}/>
            </div>
            <div className={styles.cardBody}>
                <div className={styles.tag}>
                    {title}
                </div>
                <div className={styles.review}>
                    {review}
                </div>
                <div className={styles.reviewer}>
                    <span>-</span> {reviewer}
                </div>
            </div>
        </div>

    )
}