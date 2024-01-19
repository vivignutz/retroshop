import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './Contact.module.css';

const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <form>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="name">Name:</label>
          <input className={styles.formControl} type="text" id="name" name="name" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="email">Email:</label>
          <input className={styles.formControl} type="email" id="email" name="email" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="message">Message:</label>
          <textarea className={styles.formControl} id="message" name="message" rows="4"></textarea>
        </div>

        <button className={styles.submitButton} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;