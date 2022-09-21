import Link from 'next/link';
import styles from './NavLink.module.scss';

export default function NavLink({link}) {
    return (
        <li className={styles.navItem}>
            <Link href={`/${link}`}>
                {link == 'press' ? <a>Press & Reviews</a>  : <a>{link}</a> }
            </Link>
        </li>
    )
}