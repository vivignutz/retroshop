// PrivacyPolicy.jsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
    return (
      <div className={`container-fluid ${styles.privacyPolicyContainer}`}>
        <section className={`${styles.privacyColumn} mt-auto py-2`}>        
          <div className={`order-lg-1 text-start`}>
            <h3 className={styles.privacyTitle}>Privacy Policy</h3>
            <br />
            
            <p className={styles.textPrivacy}>
              Your privacy is important to us at Oldshop. This Privacy Policy outlines the types of personal information we receive and collect when you use our website, as well as how we safeguard your information.
            </p>
            <br />

            <p className={styles.textPrivacy}>
              We may collect personal information such as your name, email address, shipping address, and payment information when you place an order or sign up for our newsletter. We use this information to fulfill your orders, communicate with you about your purchases, and improve our products and services.
            </p>
            <br />

            <p className={styles.textPrivacy}>
              We may also collect non-personal information such as your IP address, browser type, and operating system to analyze trends, administer the site, track user movements, and gather demographic information.
            </p>
            <br />

            <p className={styles.textPrivacy}>
              We are committed to protecting the security of your personal information and use industry-standard encryption technologies to safeguard your data. We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to fulfill orders.
            </p>
            <br />

            <p className={styles.textPrivacy}>
              By using our website, you consent to the terms of this Privacy Policy.
            </p>
            <hr />
          </div>
        </section>
      </div>
    );
  }
  
  export default PrivacyPolicy;
