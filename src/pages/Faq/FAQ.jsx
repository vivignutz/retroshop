/* eslint-disable react/no-unescaped-entities */
// Faq.jsx

import styles from './FAQ.module.css';

const FAQ = () => {
  return (
    <div className={`container-fluid ${styles.faqContainer}`}>
        <section className={`${styles.faqColumn} mt-auto py-2`}>
            <div className={`order-lg-1 text-start`}>
                <h3 className={styles.faqTitle}>FAQ</h3>
                <br />

                <p className={styles.textFaq}>
                  <strong>
                    1. How can I contact Oldshop?
                  </strong>
                  <br />
                  You can contact us by emailing support@oldshop.com or by filling out the contact form on our website. Our customer service team is available to assist you Monday through Friday from 9am to 5pm EST.
                </p>
                <br />

                <p className={styles.textFaq}>
                  <strong>
                    2. Do you offer gift wrapping?
                  </strong>
                  <br />
                  No, we don't offer gift wrapping since our products are mostly too big, and wrapping can be very challenging.
                </p>
                <br />

                <p className={styles.textFaq}>
                  <strong>
                    3. Can I cancel or modify my order after it has been placed?
                  </strong>
                  <br />
                  Once your order has been shipped, you will receive a shipping confirmation email with tracking information. You can use this information to track your package online.
                </p>
                <br />

                <p className={styles.textFaq}>
                  <strong>
                    5. What payment methods do you accept?
                  </strong>
                  <br />
                  We accept all major credit cards, PayPal, and Apple Pay for online orders. If you would like to pay by check or money order, please contact our customer service team for assistance.
                </p>
                <br />

                <p className={styles.textFaq}>
                  <strong>
                    6. Do you offer international shipping?
                  </strong>
                  <br />
                  Yes, we offer shipping to most destinations worldwide. Shipping costs and delivery times may vary depending on your location.
                </p>
                <br />

                <p className={styles.textFaq}>
                  <strong>
                    7. What is your return policy?
                  </strong>
                  <br />
                  We offer a 14-day return policy for all purchases made on our website. Items must be unused and with original label and packaging to be eligible for a refund or exchange. Please have a look at our Return Policy here.
                </p>
                <br />
                
                <p className={styles.textFaq}>
                  <strong>
                    8. How can I sign up for your newsletter?
                  </strong>
                  <br />
                  You can sign up for our newsletter by entering your email address in the subscription box located at the bottom of our website. Subscribers will receive exclusive discounts, promotions, and product updates.
                </p>
                <hr />
                </div>
            </section>
        </div>
    );
}


export default FAQ;
