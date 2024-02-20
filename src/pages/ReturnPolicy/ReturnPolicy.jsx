// ReturnPolicy.jsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './ReturnPolicy.module.css';

const ReturnPolicy = () => {
  return (
    <div className={`container-fluid ${styles.returnPolicyContainer}`}>
      <section className={`${styles.returnColumn} mt-auto py-2`}>
        <div className={`order-lg-1 text-start`}>
          <h3 className={styles.returnTitle}>Return Policy</h3>
          <br />
          
          <p className={styles.textReturn}>
            At Oldshop, we want you to be completely satisfied with your purchase. If for any reason you are not entirely satisfied, you may return items within 30 days of purchase for a full refund or exchange.
          </p>
          <br />

          <p className={styles.textReturn}>
            To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
          </p>
          <br />

          <p className={styles.textReturn}>
            To initiate a return, please contact our customer service team at returns@Oldshop.com with your order number and reason for return. Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
          </p>
          <hr />
        </div>
      </section>
    </div>
  );
}

export default ReturnPolicy;
