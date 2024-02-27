// ProductCard.jsx

import React from "react";
import styles from "../ProductCard/ProductCard.module.css";
import { Button } from 'react-bootstrap';


const ProductCard = ({ product }) => {
    return (
        <a href={`/product/${product._id}`} className={styles.cardLink}>
            <div className={styles.cardContainer}>
                <img className={styles.productImage} src={product.image} alt={product.product_name} />
                <div className={styles.cardBody}>
                    <h1 className={styles.productTitle}>{product.product_name}</h1>
                    <p className={styles.productDescription}>{product.description}</p>
                    <p className={styles.productCategory}>{product.category}</p>
                    <p className={styles.productMaterial}>{product.material}</p>
                    <p className={styles.productManufacturedYear}>{product.manufacturedYear}</p>
                    <p className={styles.productCondition}>{product.condition}</p>
                    <p className={styles.productOrigin}>{product.origin}</p>
                    <p className={`${styles.productPrice} card-text d-inline-block mr-3`}>Price: ${product.sale_price}</p>
                    <Button className={styles.addToCartButton} variant="success">Add to Cart</Button> 
                </div>           
            </div>
        </a>
    );
}

export default ProductCard;
