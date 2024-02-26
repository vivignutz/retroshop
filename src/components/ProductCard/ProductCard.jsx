// ProductCard.jsx

import React from "react";
import styles from "../ProductCard/ProductCard.module.css";
// import React, { useState, useEffect } from "react";
// import { Spinner } from 'react-bootstrap';
// import axios from "axios";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

const ProductCard = ({ product }) => {

    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <img className={styles.productImage} src={product.image} alt={product.name} />
                <div>
                    <h1 className={styles.productTitle}>{product.name}</h1>
                    <p className={styles.productDescription}>{product.description}</p>
                    <p className={styles.productPrice}>Price: ${product.sale_price}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;

    // const [product, setProduct] = useState(null);

    // const fetchProductDetails = async () => {
    //     try {
    //         const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/product/${id}`);

    //         setProduct(response.data);
    //     } catch (error) {
    //         console.error("Error loading product details:", error);
    //     }
    // };

    // useEffect(() => {
    //     fetchProductDetails();
    // }, [id]);

    // if (!product) {
    //     return <Spinner animation="border" role="status">
    //         <span className="sr-only">Loading...</span>
    //     </Spinner>;
    // }

//     return (
//         <>
//             <div>
//                 <h1>{product.name}</h1>
//                 <p>{product.slug}</p>
//                 <p>{product.description}</p>
//                 <p>{product.category}</p>
//                 <p>{product.material}</p>
//                 <p>{product.manufactured_year}</p>
//                 <p>{product.condition}</p>
//                 <p>{product.origin}</p>
//                 <p>{product.original_price}</p>
//                 <p>{product.sale_price}</p>  
//                 <p>{product.image}</p>
//             </div>
//         </>
//     );
// }

// export default ProductCard;


