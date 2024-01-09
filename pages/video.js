import Head from 'next/head'
import styles from '../styles/video.module.scss'

export default function Video() {
    return  (
    <div className={styles.container}>
        <Head>
            <title>Francesca&apos;s 2024 Reel</title>
            <meta name="description" content="Francesca Barker McCormick's 2024 video reel" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <div className={styles.videoContainer}>
                <div className={styles.innerContainer}>
                    <div className={styles.videoTitleContainer}> 
                        <div className={styles.videoTitleInnerContainer}>
                            <div className={styles.videoTitle}>
                                <h4 className={styles.videoText}>2024 Reel</h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.frameContainer}>
                        <div className={styles.videoOffset}></div>
                        <iframe
                        className={styles.videoIframe}
                        src="https://www.youtube.com/embed/dxExmJg57w0"
                        frameBorder="0"
                        allowFullScreen
                        />
                    </div>
                    <div className={styles.videoBlock}></div>
                </div>
            </div>
        </main>

    </div>
  )
}