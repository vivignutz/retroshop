// src/components/ProductList.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
// import Categories from "../../components/Categories/Categories.jsx"
import styles from "./Products.module.css"


const Products = () => {
  const [products, setProducts] = useState ([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/product`); 

        localStorage.setItem('favoriteProducts', JSON.stringify(response.data));
        const lsProducts = JSON.parse(localStorage.getItem('favoriteProducts'));
        setProducts(lsProducts);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div className={`container-fluid ${styles.productsContainer}`}>
        <section className={`${ styles.container}mt-auto py.2`}>
          <div className={`order-lg-1 text-start`}>
            <h3 className={styles.productsTitle}>All Products</h3>
            <br />
            
              {/* <Categories /> */}
              <div className='product'>
                <div className='container mt-5'>
                  <div className="container">
                      <div className='row'>
                        {products.map((product) => (
                          <div key={product._id} className='col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 mb-3'>
                            <ProductCard product={product} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
