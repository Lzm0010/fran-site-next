import Head from 'next/head'
import styles from '../styles/photos.module.scss'
import Image from 'next/image'
import fran1 from '../public/franPhoto1.jpeg'
import fran2 from '../public/franPhoto2.jpeg'
import fran3 from '../public/franPhoto3.jpeg'
import fran4 from '../public/franPhoto4.jpeg'
import fran5 from '../public/franPhoto5.jpeg'
import fran6 from '../public/franPhoto6.jpeg'
import fran7 from '../public/franPhoto7.jpeg'
import fran8 from '../public/franPhoto8.jpeg'
import fran9 from '../public/franPhoto9.jpeg'
import fran10 from '../public/franPhoto10.jpeg'
import fran11 from '../public/franPhoto11.jpeg'
import fran12 from '../public/franPhoto12.jpeg'
import fran13 from '../public/franPhoto13.jpeg'
import fran14 from '../public/franPhoto14.jpeg'
import fran15 from '../public/franPhoto15.jpeg'
import fran16 from '../public/franPhoto16.jpeg'
import fran17 from '../public/franPhoto17.jpeg'
import fran18 from '../public/franPhoto18.jpeg'
import fran19 from '../public/franPhoto19.jpeg'
import fran20 from '../public/franPhoto20.jpeg'
import fran21 from '../public/franPhoto21.jpeg'
import fran22 from '../public/franPhoto22.jpeg'
import fran23 from '../public/franPhoto23.jpeg'
import fran25 from '../public/franPhoto25.jpeg'
import fran26 from '../public/franPhoto26.jpeg'
import fran27 from '../public/franPhoto27.jpeg'
import fran28 from '../public/franPhoto28.jpeg'
import fran29 from '../public/franPhoto29.jpeg'
import fran30 from '../public/franPhoto30.jpeg'
import fran31 from '../public/franPhoto31.jpeg'
import fran32 from '../public/franPhoto32.jpeg'


export default function Home() {
    return (
    <div className={styles.container}>
        <Head>
        <title>Francesca Barker McCormick</title>
        <meta name="description" content="Francesca Barker McCormick" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <div className={styles.photoTitleContainer}> 
                <div className={styles.photoTitleInnerContainer}>
                    <div className={styles.photoTitle}>
                        <h4 className={styles.photoText}>Photos</h4>
                    </div>
                </div>
            </div>
            <div className={styles.innerContainer}>
                <div className={styles.image}>
                    <Image src={fran1} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran26} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran2} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran18} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran3} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran4} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran28} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran5} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran6} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran7} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran15} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran27} alt="fran " fill/>
                </div>
            
                <div className={styles.image}>
                    <Image src={fran8} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran9} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran22} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran29} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran30} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran10} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran11} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran31} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran12} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran23} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran13} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran25} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran14} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran19} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran32} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran16} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran20} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran21} alt="fran " fill/>
                </div>
                <div className={styles.image}>
                    <Image src={fran17} alt="fran " fill/>
                </div>
            </div>
        </main>

    </div>
    )
}