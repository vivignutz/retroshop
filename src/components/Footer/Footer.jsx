// Footer.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';
import ContactForm from '../ContactForm/Contact'; 


const Footer = () => {
  const githubUrl = 'https://github.com/vivignutz/';

  return (
    <footer className={`${styles.footer} mt-auto py-3 ${styles.darkBg}`}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`col d-lg-none ${styles.col}`}>
            <h3 className={styles.textWhite}>Contact</h3>
            <hr />

            <ContactForm />
          </div>

          <div className={`col d-none d-lg-block ${styles.col}`}>
            <h3 className={styles.textWhite}>About</h3>
            <hr />

            <p className={styles.textWhite}>
              Made by Viviane Gnutzmann with LOVE{' '}
              <FontAwesomeIcon icon={faHeart} color="red" />
            </p>

            <p className={styles.textWhite}>A project for ReDi School: <br />
            Full Stack Web Development Bootcamp</p>

            <p className={styles.textWhite}>This website was made for educational purposes only.</p>
            <hr />

            {/* Social links */}
            <p className={`${styles.m0} ${styles.textLinks} ${styles.textWhite}`}>
              Follow me:
              <span className={styles.iconSpacer}></span>
              <a href="http://www.facebook.com" title="Find us on Facebook">
                <i className={`fab fa-facebook-square ${styles.ms3} ${styles.socialIcon}`}></i>
              </a>
              <a href="http://www.twitter.com" title="Follow us on Twitter">
                <i className={`fab fa-twitter-square ${styles.ms3} ${styles.socialIcon}
                `}></i>
              </a>
              <a href="http://www.instagram.com" title="Follow us on Instagram">
                <i className={`fab fa-instagram-square ${styles.ms3} ${styles.socialIcon}`}></i>
              </a>
              <a href="http://www.youtube.com.com" title="Visit us on YouTube">
                <i className={`fab fa-youtube-square ${styles.ms3} ${styles.socialIcon}
                `}></i>
              </a>
            </p>

            {/* GitHub button */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub"
              className={`${styles.customBtn} btn`}
            >
              <i className={`fab fa-github ${styles.ms3} ${styles.socialIcon}`}></i>
              Visit my GitHub
            </a>
          </div>

          <div className={`col d-none d-lg-block ${styles.col}`}>
            <h3 className={styles.textWhite}>Contact</h3>
            <hr />

            <ContactForm />
          </div>
        </div>
      </div>

      <hr className={styles.footerHr} />

      {/* Copyright */}
      <div className={`${styles.footerCopyright} ${styles.textWhite} text-center py-3`}>
        ©2024 Old Shop: all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
