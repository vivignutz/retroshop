// ProductList/Products.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { useLocation } from "react-router-dom";
import styles from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    fetchData();
  }, [location.search]);

  const fetchData = async () => {
    try {
      const category = new URLSearchParams(location.search).get("category");
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/product${
          category ? `?category=${category}` : ""
        }`
      );

      console.log("Dados recebidos do backend:", response.data);


      setProducts(response.data);
      setSelectedCategory(category);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCategoryFilter = async (category) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/products${
          category ? `?category=${category}` : ""
        }`
      );
      setProducts(response.data);
      setSelectedCategory(category);
      setShowDropdown(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const categoriesData = [
    { id: 1, category_name: 'Furniture' },
    { id: 2, category_name: 'Kitchen' },
    { id: 3, category_name: 'Bathroom' },
    { id: 4, category_name: 'Electronics' },
    { id: 5, category_name: 'Decor' },
    { id: 6, category_name: 'Miscellaneous' },
  ];

  return (
    <div id={styles['products-container']}>
      <div className={`container-fluid ${styles.productsContainer}`}>
        <section className={`${styles.container} mt-auto py-2`}>
          <div className={`order-lg-1 text-start ${styles.textProducts}`}>
            <h3 className={styles.productsTitle}>All Products</h3>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Categories
                </button>
                <div className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
                  {categoriesData.map((category) => (
                    <button
                      key={category.id}
                      className={`dropdown-item ${
                        selectedCategory === category.category_name ? "active" : ""
                      }`}
                      onClick={() => handleCategoryFilter(category.category_name)}
                    >
                      {category.category_name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="product">
              <div className="container mt-5">
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1 row-cols-xl-2 g-4">
                  {products.map((product) => (
                    <div key={product._id} className="col mb-4">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;