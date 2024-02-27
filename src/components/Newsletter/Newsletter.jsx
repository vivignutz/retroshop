// Newsletter.jsx

import React, { useState } from 'react';
import axios from 'axios';
import styles from "./Newsletter.module.css";


const NewsletterComponent = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Sending email to backend
            const response = await axios.post(`${process.env.VITE_BACKEND_URL}/newsletter`, { email });
            console.log(response.data.message);
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error submitting email:', error);
            setMessage('Failed to subscribe. Please try again later.');
        }
    };

    return (
        <div className={`${styles.newsletterContainer}`}>
            <h2 className={`${styles.newsletterTitle} text-start`}>Subscribe to our Newsletter</h2>
            <hr className={styles.footerHr} />
            <form className='newsletterForm' onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Subscribe</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default NewsletterComponent;
