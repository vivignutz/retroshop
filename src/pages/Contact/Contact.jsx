import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactInfo = () => {
  return (
    <div className={`container-fluid ${styles.contactInfoContainer}`}>
      <section className={`${styles.infoColumn} mt-auto py-2`}>
        <div className={`order-lg-1 text-start`}>
        <h3 className={`${styles.formTitle} text-start`}><FontAwesomeIcon icon={faMapMarkerAlt } /><b> Contact Us</b></h3>
          <h2 className={styles.infoSubtitle}>Oldshop - Your vintage stuffs!</h2>
          <br />
          <p className={styles.textInfo}>Postal Code 1234</p>
          <p className={styles.textInfo}>12345</p>
          <p className={styles.textInfo}>Berlin</p>
          <p className={styles.textInfo}>Germany</p>
          <br />
        
          <hr />

          <br />
          <p className={styles.textInfo}>Contact us through one of our communication channels. Our customer service team will be glad to help you!</p>
          <br />

          <p className={styles.textInfo}><FontAwesomeIcon icon={faEnvelope} /> Email: contact@oldshop.com</p>

          <p className={styles.textInfo}><FontAwesomeIcon icon={faPhone} /> Phone number: +49 030 1234 5678</p>

          <p className={styles.textInfo}><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp: +49 1763 0000 000</p>
        </div>
      </section>
    </div>
  );
}

const ContactForm = () => {
  return (
    <div className={`container-fluid ${styles.contactFormContainer}`}>
      <section className={`${styles.contactColumn} mt-auto py-2`}>
        <div id="form">
        <h3 className={`${styles.formTitle} text-start`}><FontAwesomeIcon icon={faPaperPlane} /><b> Send us a message</b></h3>
          <form>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="name-field">Name</label>
              <input className={styles.formControl} id="name-field" type="text" name="full_name" placeholder="Your name" required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="email-field">Email</label>
              <input className={styles.formControl} id="email-field" type="email" name="email" placeholder="Your email" required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="message">Message</label>
              <textarea className={styles.formControl} id="message" placeholder="Your message" name="message" rows="8" required></textarea>
            </div>
            <button className={styles.submitButton} type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <ContactInfo />
        </div>
        <div className="col-lg-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;