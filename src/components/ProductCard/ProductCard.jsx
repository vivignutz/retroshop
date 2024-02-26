// ProductCard.jsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ProductCard = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);

    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/product/${id}`);

            setProduct(response.data);
        } catch (error) {
            console.error("Error loading product details:", error);
        }
    };

    useEffect(() => {
        fetchProductDetails();
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Header />
            <div>
                <h1>{product.name}</h1>
                <p>{product.slug}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <p>{product.material}</p>
                <p>{product.manufactured_year}</p>
                <p>{product.condition}</p>
                <p>{product.origin}</p>
                <p>{product.original_price}</p>
                <p>{product.sale_price}</p>  
                <p>{product.image}</p>
            </div>
            <Footer />
        </>
    );
}

export default ProductCard;
