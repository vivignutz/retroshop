// Newsletter.jsx

import React, { useState } from 'react';
import styles from "./Newsletter.module.css";


const NewsletterComponent = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted email:', email);
        // Add a logica para enviar o email pro backend
    };

    return (
        <div className={`${styles.newsletterContainer}`}>
            <h2 className={`${styles.newsletterTitle} text-start`}>Subscribe to our Newsletter</h2>
            <hr className={styles.footerHr} />
            <form className='newsletterForm' onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
}

export default NewsletterComponent;
