// Cart.jsx
import React from 'react';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Cart.module.css";

const Cart = ({ cartItems }) => {

    {/* Calculate total price */}
    const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div>
      <Header />
        <div className={styles.cartContainer}>
          <h1 className={styles.cartHeader}>Your Cart</h1>
          <div className={styles.cartItems}>
            {cartItems.map((item, index) => (
              <div key={index} className={styles.cartItem}>
                <h3 className={styles.productName}>{item.name}</h3>
                <p className={styles.productPrice}>Price: ${item.price}</p>
                <p className={styles.productQuantity}>Quantity: {item.quantity}</p>
              </div>
            ))}
          </div>

          {/* Shows total price of the cart */}
          <p className={styles.totalPrice}>Total: ${calculateTotalPrice()}</p>

          {/* Checkout button */}
          <button className={styles.checkoutButton}>Checkout</button>
        </div>
      <Footer />
    </div>
  );
}
export default Cart;
