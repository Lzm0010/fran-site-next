import NavLink from "../NavLink/NavLink";
import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
    const links = ['about', 'photos', 'video', 'press'];
    const navLinks = links.map((link) =>
        <NavLink key={link} link={link} />
    );

    return (
        <nav className={styles.bar}>
            <div className={styles.logo}>
                <Link href="/">
                    Francesca Barker McCormick
                </Link>
            </div>
            <ul className={styles.navbar}>
                {navLinks}
            </ul>
        </nav>
    )
}