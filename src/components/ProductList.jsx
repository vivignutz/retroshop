// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function ProductList() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: "", price: 0 });

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/products');
            setProducts(response.data);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };

    fetchData();
  }, []);

        const addProduct = async () => {
            try {
            const response = await axios.post('/products', newProduct);

            // Adding product to the list
            setProducts([...products, response.data]);

            // Cleaning form fields
            setNewProduct({ name: "", price: 0 });
            } catch (error) {
            console.error('Error fetching products:', error);
            }
        };

        const deleteProduct = async (productId) => {
            try {
            const response = await axios.delete(`/products/${productId}`);
        
            if (response.status === 200) {
                // Remove product of the list
                setProducts(products.filter(product => product.id !== productId));
            } else {
                console.error('Error deleting product:', response.statusText);
            }
            } catch (error) {
            console.error('Error deleting product:', error);
            }
        };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - R${product.price}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <div>
        <h3>New Product</h3>
        <input
          type="text"
          placeholder="Product name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Product price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
        />
        <button onClick={addProduct}>Add product</button>
      </div>
    </div>
  );
}

export default ProductList;
