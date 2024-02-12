// about.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import styles from './About.module.css';

const About = () => {

    {/*
    const githubUrl = 'https://github.com/vivignutz/';

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
            {/*
            <p className={`${styles.textLinks}`}>
                Follow me:
                <span className={styles.iconSpacer}></span>
                <a href="http://www.facebook.com" title="Find us on Facebook" className={styles.iconLink}>
                    <i className={`fab fa-facebook-square ${styles.socialIcon}`}></i>
                </a>        
                
                <a href="http://www.twitter.com" title="Follow us on Twitter" className={styles.iconLink}>
                    <i className={`fab fa-twitter-square ${styles.socialIcon}`}></i>
                </a>
                
                <a href="http://www.instagram.com" title="Follow us on Instagram" className={styles.iconLink}>
                    <i className={`fab fa-instagram-square ${styles.socialIcon}`}></i>
                </a>    

                <a href="http://www.youtube.com" title="Visit us on Facebook" className={styles.iconLink}>
                    <i className={`fab fa-youtube-square ${styles.socialIcon}`}></i>
                </a>  
            </p>  

            {/* GitHub button */}
            {/*
            <a href={githubUrl} className={`btn customBtn ${styles.customBtn}`} target="_blank" rel="noopener noreferrer">
                <i className={`fab fa-github ${styles.githubIconMargin}`}></i>
                Visit my GitHub
            </a>
        </div>
    );
    */}

    return (
        <div>
            <Header />
            <section className={`${styles.aboutColumn} mt-auto py-2`}>    
                <div className={`col-lg-6 order-lg-1 text-start`}>
                    <h3 className={styles.aboutTitle}>About Us</h3>
                    <br />

                    <p className={styles.textAbout}>
                        Made by Viviane Gnutzmann with LOVE{' '}
                        <FontAwesomeIcon icon={faHeart} color="red" />
                    </p>
                    <br />
                    <p className={styles.textAbout}>This website was made for educational purposes only.</p>
                    <hr />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default About;
