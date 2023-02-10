import styles from './MainFooter.module.scss';
import {
  MdMovieFilter,
  MdLocalMovies,
  MdOutlineFileDownload
} from "react-icons/md";
import {
  TiSocialInstagram
} from "react-icons/ti";

export default function MainFooter() {
    return (
      <footer className={styles.footer}>
          <div className={styles.upperFooter}>
            <div className={styles.contactBlock}>
              <div className={styles.contactIcon}><MdLocalMovies /></div>
              <div className={styles.contactItem}>
                <h4 className={styles.contactTitle}>Agent:</h4>
                {/* <p>Sharon Kelly</p>
                <p>American Artists Group Talent Agency</p>
                <p>13321 Ventura Blvd, Suite C-2</p>
                <p>Sherman Oaks, Ca 91423</p>
                <p>(818) 430-8688</p>
                <a href="mailto:AmericanArtistsGroupTalent@gmail.com">AmericanArtistsGroupTalent@gmail.com</a> */}
              </div>
            </div>
            <div className={styles.contactBlock}>
              <div className={styles.contactIcon}><MdMovieFilter /></div>
              <div className={styles.contactItem}>
                <h4 className={styles.contactTitle}>Manager:</h4>
                <p>Erika Finn</p>
                <p>CSP Management/Citizen Skull</p>
                <p>(323) 302-4242 ext 153</p>
                <a href="mailto:erika@citizenskull.com">erika@citizenskull.com</a>
              </div>
            </div>
            <div className={styles.contactBlock}>
              <div className={styles.contactIcon}><TiSocialInstagram/></div>
              <div className={styles.contactItem}>
                <h4 className={styles.contactTitle}>Instagram:</h4>
                <a
                  className={styles.contactLink}
                  href="https://www.instagram.com/francescabmccormick/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  francescabmccormick
                </a>
              </div>
            </div>
            <div className={styles.contactBlock}>
              <div className={styles.contactIcon}><MdOutlineFileDownload/></div>
              <div className={styles.contactItem}>
                <h4 className={styles.contactTitle}>Resume Link:</h4>
                <a
                  className={styles.contactLink}
                  href="/francescamccormickresume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  Francesca Barker McCormick
                </a>
              </div>
            </div>
          </div>
          <div className={styles.lowerFooter}>
            <div className={styles.lowerFooterContent}>
              <div>
                Copyright © 2022 Francesca Barker McCormick.
              </div>
              <a
                href="https://www.leemariomccormick.com/"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by LMM
              </a>
            </div>
          </div>
      </footer>
    )
}