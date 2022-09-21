import MainFooter from '../MainFooter/MainFooter';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.scss';

export default function Layout({children}) {
    return (
        <>
            <Navbar/>
            <main className={styles.pageWrapper}>{children}</main>
            <MainFooter />
        </>
    )
}