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




// const ProductCard = (params) => {
//     const { product: product } = params;
//     const { _id } = product
//     const id = _id;

//     return (
//         <div className={styles.container}>
//             <div className={styles.cardContainer}>
//                 <img className={styles.productImage} src={product.image} alt={product.name} />
//                 <div>
//                     <h1 className={styles.productTitle}>{product.name}</h1>
//                     <p className={styles.productDescription}>{product.description}</p>
//                     <p className={styles.productCategory}>{product.category}</p>
//                     <p className={styles.productMaterial}>{product.material}</p>
//                     <p className={styles.productManufacturedYear}>{product.manufacturedYear}</p>
//                     <p className={styles.productCondition}>{product.condition}</p>
//                     <p className={styles.productOrigin}>{product.origin}</p>
//                     <p className={styles.productOriginalPrice}>{product.originalPrice}</p>
//                     <p className={styles.productCategory}>{product.category}</p>
//                     <p className={styles.productPrice}>Price: ${product.sale_price}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProductCard;

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


