// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Sending GET request');
        const response = await axios.get ('/api/products'); // GET
        console.log('GET response:', response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  // Adding product to the list
  const addProduct = async () => {
    if (newProduct.name.trim() === "" || newProduct.price <= 0) {
      console.error('Name and price are required fields.');
      return;
    }

    try {
      console.log('Sending POST request');
      const response = await axios.post('/api/products', newProduct); // POST
      console.log('POST response:', response.data);

      // Adding product
      setProducts([...products, response.data]);

      // Cleaning form fields
      setNewProduct({ name: "", price: 0 });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Deleting product of the list
  const deleteProduct = async (productId) => {
    try { 
      console.log('Sending DELETE request', productId);  
      const response = await axios.delete(`/api/products/${productId}`); //DELETE
      console.log('DELETE response:', response);
        
      if (response.status === 204) {
        // Delete product
        setProducts(products.filter(product => product.id !== productId));
      } else {
        console.error('Error deleting product:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Editing product of the list
  const editProduct = async (productId, updatedProduct) => {
    try {
      console.log('Sending PUT request', productId);
      const response = await axios.put(`/api/products/${productId}`, updatedProduct); // PUT
      console.log('PUT response:', response);
        
      if (response.status === 200) {
        // List upload
        setProducts(products.map(product => (product.id === productId ? response.data : product)));
      } else {
        console.error('Error editing product:', response.statusText);
      }
    } catch (error) {
      console.error('Error editing product:', error);
    }
  };

        // "Edit" button to products
        {products.map(product => (
          <li key={product.id}>
            {product.name} - €{product.price}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
            <button onClick={() => editProduct(product.id, { name: "New product", price: 99.99 })}>Edit</button>

          </li>
        ))}

        return (
          <div>
            <h2>Products</h2>
            <ul>
              {products.map(product => (
                <li key={product.id}>
                  {product.name} - €{product.price}
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
