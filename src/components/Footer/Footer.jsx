// Footer.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../ContactForm/Contact';
import styles from './Footer.module.css';

const Footer = () => {
  const githubUrl = 'https://github.com/vivignutz/';

  const renderContactColumn = (title, extraClass = '') => (
    <div className={`col ${extraClass}`}>
      <h3 className={styles.contactTitle}>{title}</h3>
      <hr />
      <ContactForm />
    </div>
  );

  const renderAboutColumn = () => (
    <div className={`col ${styles.mainColumn}`}>
      <h3 className={styles.aboutTitle}>About</h3>
      <hr />
      <p className={styles.textAbout}>
        Made by Viviane Gnutzmann with LOVE{' '}
        <FontAwesomeIcon icon={faHeart} color="red" />
      </p>
      <p className={styles.textAbout}>A project for ReDi School: <br />
        Full Stack Web Development Bootcamp</p>
      <p className={styles.textAbout}>This website was made for educational purposes only.</p>
      <hr />

        {/* Social links */}
        <p className={`${styles.textLinks}`}>
        Follow me:
        <span className={styles.iconSpacer}></span>
        <a href="http://www.facebook.com" title="Find us on Facebook">
          <i className={`fab fa-facebook-square ${styles.socialIcon}`}></i>
        </a>
        <a href="http://www.twitter.com" title="Follow us on Twitter">
          <i className={`fab fa-twitter-square ${styles.socialIcon}`}></i>
        </a>
        <a href="http://www.instagram.com" title="Follow us on Instagram">
          <i className={`fab fa-instagram-square ${styles.socialIcon}`}></i>
        </a>
        <a href="http://www.youtube.com.com" title="Visit us on YouTube">
          <i className={`fab fa-youtube-square ${styles.socialIcon}`}></i>
        </a>
      </p>

      {/* GitHub button */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my GitHub"
        className={`btn ${styles.customBtn}`}
      >
        <i className={`fab fa-github ${styles.githubIconMargin} ${styles.socialIcon}`}></i>
        Visit my GitHub
      </a>
    </div>
  );

  return (
    <footer className={`${styles.footer} mt-auto py-2`}>
      <div className={`container ${styles.container}`}>
        <div className={`row ${styles.row}`}>
          {/* Smaller screens column */}
          {renderContactColumn('Contact', 'd-lg-none')}

          {/* Second column for desktop */}
          {renderContactColumn('Contact', 'd-none d-lg-block')}

          {/* Main column */}
          {renderAboutColumn()}
        </div>
      </div>

      <hr className={styles.footerHr} />

      {/* Copyright */}
      <div className={`${styles.footerCopyright} text-center py-3`}>
        ©2024 Old Shop: all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
