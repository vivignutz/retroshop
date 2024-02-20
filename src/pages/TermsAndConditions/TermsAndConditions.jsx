/* eslint-disable react/no-unescaped-entities */
// TermsConditions.jsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer/Footer.jsx';
import styles from './TermsAndConditions.module.css';

const TermsAndConditions = () => {
    return (
        <div className={`container-fluid ${styles.termsContainer}`}>
            <section className={`${styles.termsColumn} mt-auto py-2`}>
            <div className={`order-lg-1 text-start`}>
                <h3 className={styles.termsTitle}>Terms and Conditions</h3>
                <br />

                <h2  className={styles.termsSubtitle}>Welcome to Oldshop - Your treasure's shop!
                </h2>
                <hr />

                <p className={styles.textTerms}>
                    These terms and conditions outline the rules and regulations for the use of our website.
                </p>
                <br />
                <p className={styles.textTerms}>
                    By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Oldshop' website if you do not accept all of the terms and conditions stated on this page.
                </p>
                <br/>
                <p className={styles.textTerms}>
                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: 
                    <br />
                    <br />
                    "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in accordance with and subject to, prevailing law of. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                </p>
                <hr/>

                <h2  className={styles.termsSubtitle}>Cookies</h2>
                <p className={styles.textTerms}>
                    We employ the use of cookies. By using Vintage Oldshop' website you consent to the use of cookies in accordance with Vintage Oldshop’ privacy policy.
                </p>
                <br />

                <p className={styles.textTerms}>
                    Most of the modern day interactive websites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate/advertising partners may also use cookies.
                </p>
                <hr />
            </div>
        </section>
    </div>
    );
}

export default TermsAndConditions;
