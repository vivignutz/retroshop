// about.jsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './About.module.css';


const About = () => {
    return (
        <div className={`container-fluid ${styles.aboutContainer}`}>
            <section className={`${styles.aboutColumn} mt-auto py-2`}>
                <div className={`order-lg-1 text-start`}>
                    <h3 className={styles.aboutTitle}>Our Story</h3>
                    <br />
                    <p className={styles.textAbout}>
                        Welcome to our vintage haven! Here at Olshop, we believe in the power of <i>nostalgia</i> and the magic of memories. Each piece in our collection is handpicked with love and care, to bring warmth and charm to your modern life.
                    </p>
                    <br />
                    <p className={styles.textAbout}>
                        Crafted by Viviane Gnutzmann with LOVE{' '}
                        <FontAwesomeIcon icon={faHeart} color="red" />
                    </p>
                    <br />
                    <p className={styles.textAbout}>
                        This website was created with passion and dedication. Our journey to Olshop has been a rollercoaster of emotions, driven by a love for all things vintage and a commitment to quality. We hope you'll be as enchanted browsing our collection as we were assembling it.
                    </p>
                    <br />
                    <p className={styles.textAbout}>
                        This website was made for educational purposes only.
                    </p>
                    <hr />
                </div>
            </section>
        </div>
    );
};

export default About;
