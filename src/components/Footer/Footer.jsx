// Footer.jsx
import React from "react";
//import styles from './components/Footer.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
  const githubUrl = 'https://github.com/vivignutz/';

  return (
    <footer className="footer mt-auto py-3 dark-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="text-white">About</h3>
            <hr />

            <p className="text-white">Made by Viviane Gnutzmann with LOVE</p>
            <p className="text-white">This website was made for educational purposes only!</p>
              <a href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub"
                className="btn btn-signup">
                <FontAwesomeIcon
                icon={faGithub} /> 
                Visit my GitHub
              </a>
            <hr />

            <p className="m-0 text-links text-white">Follow us:
              <a href="http://www.facebook.com" title="Find us on Facebook">
                <i style={{ color: '#fff' }} className="fab fa-facebook-square ms-3"></i>
              </a>
              <a href="http://www.twitter.com" title="Follow us on Twitter">
                <i style={{ color: '#fff' }} className="fab fa-twitter-square ms-3"></i>
              </a>
              <a href="http://www.instagram.com" title="Follow us on Instagram">
                <i style={{ color: '#fff' }} className="fab fa-instagram-square ms-3"></i>
              </a>
              <a href="http://www.youtube.com.com" title="Visit us on YouTube">
                <i style={{ color: '#fff' }} className="fab fa-youtube-square ms-3"></i>
              </a>
            </p>
          </div>

          <div className="col d-none d-lg-block">
            <h3 className="text-white">Old Shop</h3>
            <hr />

            {/*<ContactForm />*/}
          </div>
        </div>
      </div>

      <hr />

      {/* Copyright */}
      <div className="footer-copyright text-white text-center py-3">© 2023 Copyright: all rights reserved</div>
    </footer>
  );
};

export default Footer;