// Footer.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';
import ContactForm from '../ContactForm/Contact'; 


const Footer = () => {
  const githubUrl = 'https://github.com/vivignutz/';

  return (
    <footer className={`${styles.footer} mt-auto py-3 ${styles.darkBg}`}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h3 className={styles.textWhite}>About</h3>
            <hr />

            <p className={styles.textWhite}>Made by Viviane Gnutzmann with LOVE</p>
            <p className={styles.textWhite}>A project for ReDi School: Full Stack Web Development Bootcamp.</p>
            <a href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub"
              className={`btn ${styles.btnSignup}`}>
              <FontAwesomeIcon
                icon={faGithub} />
              Visit my GitHub
            </a>
            <p className={styles.textWhite}>This website was made for educational purposes only.</p>
            <hr />

            <p className={`${styles.m0} ${styles.textLinks} ${styles.textWhite}`}>Follow us:
              <a href="http://www.facebook.com" title="Find us on Facebook">
                <i style={{ color: '#fff' }} className={`fab fa-facebook-square ${styles.ms3}`}></i>
              </a>
              <a href="http://www.twitter.com" title="Follow us on Twitter">
                <i style={{ color: '#fff' }} className={`fab fa-twitter-square ${styles.ms3}`}></i>
              </a>
              <a href="http://www.instagram.com" title="Follow us on Instagram">
                <i style={{ color: '#fff' }} className={`fab fa-instagram-square ${styles.ms3}`}></i>
              </a>
              <a href="http://www.youtube.com.com" title="Visit us on YouTube">
                <i style={{ color: '#fff' }} className={`fab fa-youtube-square ${styles.ms3}`}></i>
              </a>
            </p>
          </div>

          <div className={`col d-none d-lg-block ${styles.col}`}>
            <h3 className={styles.textWhite}>Contact</h3>
            <hr />

            <ContactForm />
          </div>
        </div>
      </div>

      <hr />

      {/* Copyright */}
      <div className={`${styles.footerCopyright} ${styles.textWhite} text-center py-3`}>© 2023 Copyright: all rights reserved</div>
    </footer>
  );
};

export default Footer;
