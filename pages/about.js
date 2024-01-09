import Head from 'next/head'
import styles from '../styles/about.module.scss'
import AboutImg from '../components/AboutImg/AboutImg';
import fran1 from '../public/franAbout1.jpeg'
import fran2 from '../public/franAbout2.jpeg'

export default function About() {
    return (
    <div className={styles.container}>
      <Head>
        <title>About Francesca</title>
        <meta name="description" content="About Francesca Barker McCormick" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <div className={styles.innerContainer}>
            <div className={styles.bio}>
                <div className={styles.innerbio}>
                  <div className={styles.text}>
                    <h2>About</h2>
                    <p>Francesca Barker McCormick is a Hispanic American actress.</p>
                    <p>Prior to her career in film and television, her inherent eye for fashion influenced her decision to move to New York City to begin work within the luxury fashion industry. She also worked as a Vogue Market Stylist, acting as a representative of the brand and hosting events on their behalf.</p>
                    <p>It was through her hosting of events onscreen and off, that her passion for performing ignited once again. Since 2020, Barker McCormick has landed roles in an upcoming Disney+ series, Amazon Prime&apos;s Falling for the Competition, Mother-In-Law (with Vivica A. Fox), GAC&apos;s Mr. Manhattan (with Alexa and Carlos PenaVega), Amazon Prime&apos;s Christmas at the Amish Bakery, and many more.</p>
                    <p>Outside of acting, Francesca continues her work in the event world as the Project Director for Gina&apos;s Collective, an advisory for tech-enabled nonprofits. She also serves on the Guild for the Princess Grace Kelly Foundation, an organization dedicated to upholding the legacy of Princess Grace of Monaco, and elevating extraordinary emerging artists in theater, dance and film through career-advancing grants.</p>
                  </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
              <AboutImg src={fran1} alt="Fran smiles through hair blowing in the wind." offset="up" />
              <AboutImg src={fran2} alt="Fran serious hair blowing in the wind." offset="down"/>
            </div>
          </div>
      </main>

    </div>
    )
}