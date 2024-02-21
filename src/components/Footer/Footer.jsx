// Footer.jsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcAmex, faBitcoin, faPaypal, faStripe } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={`${styles.footer} mt-auto py-2`}>
      <div className={`container ${styles.container}`}>
        <div className={`row ${styles.row}`}>

          {/* Legal pages and links */}
          <div className={`col-lg-6 order-lg-1 text-start`}>
            <h3 className={`${styles.footerTitle} text-start`}>Legal Pages</h3>
            <hr className={styles.footerHr} />

            <ul className={styles.linkList}>
              <li>
                <Link to="/about" className={styles.footerLink}>About us</Link>
              </li>
              <li>
                <Link to="/contact" className={styles.footerLink}>Contact</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className={styles.footerLink}>Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link>
              </li>
              <li>
                <Link to="/return-policy" className={styles.footerLink}>Return and Refund Policy</Link>
              </li>
              <li>
                <Link to="/shipping-policy" className={styles.footerLink}>Shipping Policy</Link>
              </li>
              <li>
                <Link to="/faq" className={styles.footerLink}>FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Social media links */}
          <div className={`col-lg-6 order-lg-2 text-start`}>
            <h3 className={`${styles.footerTitle} text-start`}>Follow us</h3>
            <hr className={styles.footerHr} />

            <div className={styles.socialIconContainer}>
              <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookSquare} className={styles.socialIcon} />
              </Link>
              <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitterSquare} className={styles.socialIcon} />
              </Link>
              <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagramSquare} className={styles.socialIcon} />
              </Link>
              <Link to="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutubeSquare} className={styles.socialIcon} />
              </Link>
            </div>
            <br />

            {/* Payment methods */}
            <div className={`col-lg-12 order-lg-3 text-start`}>
              <h3 className={`${styles.footerTitle} text-start`}>Payment Methods</h3>
              <hr className={styles.footerHr} />

              <div className={styles.paymentIconsContainer}>
                <FontAwesomeIcon icon={faCcVisa} className={styles.paymentIcon} />
                <FontAwesomeIcon icon={faCcAmex} className={styles.paymentIcon} />
                <FontAwesomeIcon icon={faBitcoin} className={styles.paymentIcon} />
                <FontAwesomeIcon icon={faPaypal} className={styles.paymentIcon} />
                <FontAwesomeIcon icon={faStripe} className={styles.paymentIcon} />
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Copyright */}
      <div className={`container ${styles.container} ${styles.footerCopyright}`}>
        <div className={`row ${styles.row}`}>
          <div className={`col text-center`}>
            ©2024 Old Shop: all rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
