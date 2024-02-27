// ProductCard.jsx

import React from "react";
import styles from "../ProductCard/ProductCard.module.css";
import { Button } from 'react-bootstrap';


const ProductCard = ({ product, addToCart }) => {
    const handleAddToCart = () => {
        // Adding product to the cart
        addToCart(product);
    };

    return (
        <a href={`/product/${product._id}`} className={styles.cardLink}>
            <div className={styles.cardContainer}>
                <img className={styles.productImage} src={product.image} alt={product.product_name} />
                <div className={styles.cardBody}>
                    <h1 className={styles.productTitle}> {product.product_name}</h1>
                    <p className={styles.productDescription}>{product.description}</p>
                    <p className={styles.productCategory}>Category: {product.category}</p>
                    <p className={styles.productMaterial}>Material: {product.material}</p>
                    <p className={styles.productManufactured}>Manufactured: {product.manufactured}</p>
                    <p className={styles.productCondition}>Condition: {product.condition}</p>
                    <p className={styles.productOrigin}>Origin: {product.origin}</p>
                    <p className={`${styles.productPrice} card-text d-inline-block mr-3`}>Price: €{product.sale_price}</p>
                    <Button onClick={handleAddToCart} className={styles.addToCartButton} variant="success">Add to Cart</Button> 
                </div>           
            </div>
        </a>
    );
}

export default ProductCard;
