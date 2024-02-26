// Categories.jsx

import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Categories.module.css';

const Categories = () => {
  const categoriesData = [
    { id: 1, name: 'Furniture', image: './images/furniture.jpg' },
    { id: 2, name: 'Kitchen', image: './images/kitchen.jpg' },
    { id: 3, name: 'Bathroom', image: './images/wc.jpg' },
    { id: 4, name: 'Electronics', image: './images/electronics.jpg' },
    { id: 5, name: 'Decor', image: './images/decor.jpg' },
    { id: 6, name: 'Miscellaneous', image: './images/others.jpg' },
  ];
  
  return (
    <div id={styles['category-container']}>
      <div className={styles['category-grid']}>
        {categoriesData.map((category) => (
          <div className={styles['card']} key={category.id}>
            <Link to={`/products?category=${category.name}`} className={styles['product-link']}>
              <img src={category.image} alt={category.name} className={styles['product-img']} />
              <div className={`${styles['card-body']} pb-0`}>
                <h4 className={`${styles['categoryName']} ${styles['mb-0']} ${styles['secondary']}`}>
                  {category.name}
                </h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
