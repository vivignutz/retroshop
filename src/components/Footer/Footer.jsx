// Footer.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../../pages/ContactForm/Contact';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

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
    <div className={`col-lg-6 ${styles.aboutColumn}`}>
      <h3 className={styles.aboutTitle}>About</h3>
      <hr />
      <p className={styles.textAbout}>
        Made by Viviane Gnutzmann with LOVE{' '}
        <FontAwesomeIcon icon={faHeart} color="red" />
      </p>
      <br />

      <p className={styles.textAbout}>A project for ReDi School: <br />
        Full Stack Web Development Bootcamp</p>
      <br />

      <p className={styles.textAbout}>This website was made for educational purposes only.</p>
      <hr />

        {/* Social links */}
        <p className={`${styles.textLinks}`}>
        Follow me:
        <span className={styles.iconSpacer}></span>

        <Link to="http://www.facebook.com" title="Find us on Facebook" className={styles.iconLink}>
          <i className={`fab fa-facebook-square ${styles.socialIcon}`}></i>
        </Link>

        <Link to="http://www.twitter.com" title="Follow us on Twitter" className={styles.iconLink}>
          <i className={`fab fa-twitter-square ${styles.socialIcon}`}></i>
        </Link>
        <Link to="http://www.instagram.com" title="Follow us on Instagram" className={styles.iconLink}>
          <i className={`fab fa-instagram-square ${styles.socialIcon}`}></i>
        </Link>
        <Link to="http://www.youtube.com" title="Visit us on YouTube" className={styles.iconLink}>
          <i className={`fab fa-youtube-square ${styles.socialIcon}`}></i>
        </Link>
      </p>

      {/* GitHub button */}
      <Link to={githubUrl} className={`btn customBtn ${styles.customBtn}`} target="_blank" rel="noopener noreferrer">
        <i className={`fab fa-github ${styles.githubIconMargin}`}></i>
        Visit my GitHub
      </Link>
    </div>
  );

  return (
    <footer className={`${styles.footer} mt-auto py-2`}>
      <div className={`container ${styles.container}`}>
        <div className={`row ${styles.row}`}>

          {/* About column */}
          <div className={`col-lg-6 order-lg-1 text-start`}>
            {renderAboutColumn()}
          </div>
  
          {/* Contact column */}
          <div className={`col-lg-6 order-lg-2 ${styles.contactColumn}`}>
            {renderContactColumn('Contact', 'd-none d-lg-block')}
            {renderContactColumn('Contact', 'd-lg-none')}
          </div>
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
