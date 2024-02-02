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
                <h4 className={styles.contactTitle}>LA Agent:</h4>
                <p>Stuart Alexander</p>
                <p>Eris Talent Agency</p>
                <p>(310) 302-7711</p>
                <a href="mailto:stuart@eristalentagency.com">stuart@eristalentagency.com</a>
              </div>
            </div>
            <div className={styles.contactBlock}>
              <div className={styles.contactIcon}><MdLocalMovies /></div>
              <div className={styles.contactItem}>
                <h4 className={styles.contactTitle}>Southeast Agent:</h4>
                <p>Carol Shaginaw</p>
                <p>Carol Shaginaw Talent Agency</p>
                <p>770-868-7162</p>
                <a href="mailto:carol@carolshaginawtalent.com">carol@carolshaginawtalent.com</a>
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