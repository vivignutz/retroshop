// src/components/ProductList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

// To generate only numeric ID's
const generateNumericId = () => {
  const randomId = Math.floor(Math.random() * 1000000).toString();
  return randomId;
};

function ProductList() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: 0, description: "" });
  const [editingProduct, setEditingProduct] = useState(null); 
  const [editFields, setEditFields] = useState({ name: "", price: 0, description: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Sending GET request');
        const response = await axios.get('/api/products', { header: { 'Cache-Control': 'no-cache' } }); // GET
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
      const newProductId = generateNumericId();
      const response = await axios.post('/api/products', 
      { ...newProduct, id: newProductId });
      console.log('POST response:', response.data);

      // Adding product
      setProducts([...products, response.data]);

      // Cleaning form fields
      setNewProduct({ name: "", price: 0, description: "" });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Deleting product of the list
  const deleteProduct = async (productId) => {
    try {
      console.log('Sending DELETE request', productId);
  
      const response = await axios.delete(`/api/products/${productId}`);
      console.log('DELETE response:', response);
  
      if (response.status === 204) {
        console.log('Product deleted successfully');

        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
        console.log('After updating state');
        console.log('Updated products:', products);
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
      const response = await axios.put(`/api/products/${productId}`, updatedProduct);
  
      if (response.status === 200) {
        // Product upload
        setProducts(products.map(product => (product.id === productId ? { ...product, ...updatedProduct } : product)));
        setEditingProduct(null);
      } else {
        console.error('Error editing product:', response.statusText);
      }
    } catch (error) {
      console.error('Error editing product:', error);
    }
  };

  const handleEditFieldsChange = (e) => {
    setEditFields({ ...editFields, [e.target.name]: e.target.value });
  };

  const openEditForm = (product) => {
    setEditingProduct(product.id);
    setEditFields({
      name: product.name,
      price: product.price,
      description: product.description || "",
    });
  };

  const closeEditForm = () => {
    setEditingProduct(null);
  };

        // "Edit" and "Delete" button
        {products.map(product => (
          <li key={product.id}>
          {product.name} - € {product.price}
          <button className="editButton" onClick={() => editProduct(product.id, { name: "New Product", price: 99.99 })}>Edit</button>
          <button className="deleteButton" onClick={() => deleteProduct(product.id)}>Delete</button>
        </li>
        ))}

        console.log('Rendering with updated status:', products);

        return (
          <div>
            <h2>Products</h2>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  {editingProduct === product.id ? (
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={editFields.name}
                        onChange={handleEditFieldsChange}
                      />
                      <input
                        type="number"
                        name="price"
                        placeholder="Product Price"
                        value={editFields.price}
                        onChange={handleEditFieldsChange}
                      />
                      <input
                        type="text"
                        name="description"
                        placeholder="Product Description"
                        value={editFields.description}
                        onChange={handleEditFieldsChange}
                      />
                      <button className='saveButton' onClick={() => editProduct(product.id, editFields)}>Save</button>
                      <button className='cancelButton' onClick={closeEditForm}>Cancel</button>
                    </div>
                  ) : (
                    <div id='products'>
                      <strong>{product.name}</strong> - € {product.price}
                      <p>{product.description}</p>
                      <button className='editButton' onClick={() => openEditForm(product)}>Edit</button>
                      <button className='deleteButton' onClick={() => deleteProduct(product.id)}>Delete</button>
                    </div>
                  )}
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
              <input
                type="text"
    placeholder="Product description"
    value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              />
              <button className='addButton' onClick={addProduct}>Add product</button>
            </div>
          </div>
        );
}

export default ProductList;
