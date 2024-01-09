import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import LandingImg from '../components/LandingImg/LandingImg'
import fran1 from '../public/fran1.jpeg'
import fran2 from '../public/fran2.jpeg'
import fran3 from '../public/fran3.jpeg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Francesca Barker McCormick</title>
        <meta name="description" content="Francesca Barker McCormick" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <div className={styles.innerContainer}>
            <LandingImg src={fran3} alt="francesca stands near a pipe on the beach" offset="up" linkname="IMDb" href="https://www.imdb.com/name/nm11906396/" />
            <LandingImg src={fran1} alt="francesca sits on beach" offset="down" linkname="Actors Access" href="https://resumes.actorsaccess.com/francescabarkermccormick"/>
            <LandingImg src={fran2} alt="francesca looks out on to the beach" offset="up" linkname="LA Casting" href="https://app.castingnetworks.com/talent/public-profile/b9b305d6-35e3-11ec-9c45-2b5241d49a43"/>
          </div>
      </main>

    </div>
  )
}
