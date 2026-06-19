import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  async function getProduct() {
    try {
      const result = await axios.get(
        `https://ecomflask.duckdns.org/api/admin/item/${id}`,
        {
          withCredentials: true,
        }
      );

      console.log(result.data);
      setProduct(result.data.product);
    } catch (error) {
      console.log("error response:", error.response);
      console.log(error.response?.data || error.message);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  if (!product) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border" role="status"></div>
        <h3 className="mt-3">Loading...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={product.image}
              alt={product.itemname}
              className="img-fluid rounded-start w-100"
              style={{ height: "450px", objectFit: "cover" }}
            />
          </div>

          <div className="col-md-7">
            <div className="card-body p-4">
              <h2 className="card-title mb-3">
                {product.itemname}
              </h2>

              <p className="card-text">
                <strong>Description:</strong> {product.item_desc}
              </p>

              <p className="card-text">
                <strong>About Product:</strong> {product.item_about}
              </p>

              <h4 className="text-success mb-3">
                ₹{product.price}
              </h4>

              <p>
                <strong>Available Quantity:</strong>{" "}
                {product.quantity}
              </p>

              <button className="btn btn-primary me-2">
                Edit Product
              </button>

              <button className="btn btn-danger">
                Delete Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}