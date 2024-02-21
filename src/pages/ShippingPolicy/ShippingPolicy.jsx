// ShippingPolicy.jsx

import styles from './ShippingPolicy.module.css';

const ShippingPolicy = () => {
    return (
        <div className={`container-fluid ${styles.shippingPolicyContainer}`}>
            <section className={`${styles.shippingColumn} mt-auto py-2`}>
                <div className={`order-lg-1 text-start`}>
                    <h3 className={styles.shippingTitle}>Shipping Policy</h3>
                    <br />

                    <p className={styles.textShipping}>
                        Oldshop offers shipping to most destinations worldwide. We strive to process and ship all orders within 1-3 business days of purchase.
                    </p>
                    <br />

                    <p className={styles.textShipping}>
                        Shipping costs are calculated at checkout based on the weight and dimensions of your order, as well as your location. We offer several shipping options to choose from, including standard and expedited shipping.
                    </p>
                    <br />

                    <p className={styles.textShipping}>
                        Once your order has been shipped, you will receive a shipping confirmation email with tracking information, so you can track your package every step of the way.
                    </p>
                    <br />

                    <p className={styles.textShipping}>
                        Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the buyer. Oldshop is not responsible for any delays or additional charges incurred due to customs clearance processes.    
                    </p>
                    <hr />
                </div>
            </section>
        </div>
    );
}

export default ShippingPolicy;
