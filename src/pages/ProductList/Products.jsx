// src/components/ProductList.jsx

import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import Categories from "../../components/Categories/Categories.jsx"
import styles from "./Products.module.css"


const Products = () => {
  const [products, setProducts] = useState ([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products'); 

      localStorage.setProduct('favoriteProducts', JSON.stringify(response.data)); 
      const lsProducts = JSON.parse(localStorage.getProduct('favoriteProducts')) ;
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
              <Categories />
              <div className='product'>
                <div className='container mt-5'>
                  <div className="container">
                      <div className='row'>
                        {products.map((product) => (
                          <div  className='col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 mb-3'>
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
    
    
    {/* ">All Products</h2>
      <Categories />
      <div className='product'>
        <div className='container mt-5'>
          <div className="container">
            <div className='row'>
              {products.map((product) => (
                <div  className='col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 mb-3'>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
 */}

export default Products;








// const generateNumericId = () => {
//   const randomId = Math.floor(Math.random() * 1000000).toString();
//   return randomId;
// };


// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({ name: "", description: "", category: "", price: 0 });
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [editFields, setEditFields] = useState({ name: "", description: "", category: "", price: 0 });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/products', { headers: { 'Cache-Control': 'no-cache' } });
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const addProduct = async () => {
//     if (newProduct.name.trim() === "" || newProduct.price <= 0) {
//       console.error('Name and price are required fields.');
//       return;
//     }

//     try {
//       // const newProductId = generateNumericId();
//       const response = await axios.post('/api/products', { ...newProduct });
//       setProducts([...products, response.data]);
//       setNewProduct({ name: "",({ name: "", description: "", category: "", price: 0 });
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   const deleteProduct = async (productId) => {
//     try {
//       const response = await axios.delete(`/api/products/${productId}`);
//       if (response.status === 204) {
//         setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
//       } else {
//         console.error('Error deleting product:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   const editProduct = async (productId, updatedProduct) => {
//     try {
//       const response = await axios.put(`/api/products/${productId}`, updatedProduct);
//       if (response.status === 200) {
//         setProducts(products.map(product => (product.id === productId ? { ...product, ...updatedProduct } : product)));
//         setEditingProduct(null);
//       } else {
//         console.error('Error editing product:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error editing product:', error);
//     }
//   };

//   const handleEditFieldsChange = (e) => {
//     setEditFields(prevFields => ({ ...prevFields, [e.target.name]: e.target.value }));
//   };

//   const openEditForm = (product) => {
//     setEditingProduct(product.id);
//     setEditFields({
//       name: product.name,
//       price: product.price,
//       description: product.description || "",
//     });
//   };

//   const closeEditForm = () => {
//     setEditingProduct(null);
//   };

//   return (
//     <div>
//       <h2>Products</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {editingProduct === product.id ? (
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Product Name"
//                   value={editFields.name}
//                   onChange={handleEditFieldsChange}
//                 />
//                 <input
//                   type="number"
//                   name="price"
//                   placeholder="Product Price"
//                   value={editFields.price}
//                   onChange={handleEditFieldsChange}
//                 />
//                 <input
//                   type="text"
//                   name="description"
//                   placeholder="Product Description"
//                   value={editFields.description}
//                   onChange={handleEditFieldsChange}
//                 />
//                 <button className='saveButton' onClick={() => editProduct(product.id, editFields)}>Save</button>
//                 <button className='cancelButton' onClick={closeEditForm}>Cancel</button>
//               </div>
//             ) : (
//               <div id='products'>
//                 <strong>{product.name}</strong> - € {product.price}
//                 <p>{product.description}</p>
//                 <button className='editButton' onClick={() => openEditForm(product)}>Edit</button>
//                 <button className='deleteButton' onClick={() => deleteProduct(product.id)}>Delete</button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>

//       <div>
//         <h3>New Product</h3>
//         <input
//           type="text"
//           placeholder="Product name"
//           value={newProduct.name}
//           onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Product price"
//           value={newProduct.price}
//           onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
//         />
//         <input
//           type="text"
//           placeholder="Product description"
//           value={newProduct.description}
//           onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
//         />
//         <button className='addButton' onClick={addProduct}>Add product</button>
//       </div>
//     </div>
//   );
// }

// export default ProductList;
