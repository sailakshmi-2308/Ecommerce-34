import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  async function getData() {
    try {
      const result = await axios.get(
        "https://ecomflask.duckdns.org/api/admin/items",
        {
          withCredentials: true,
        }
      );

      console.log(result.data);
      setProducts(result.data.products);
    } catch (error) {
      console.log("error response:", error.response);
      console.log(error.response?.data || error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function deleteProduct(id) {
    try {
      await axios.delete(
        `https://ecomflask.duckdns.org/api/admin/delete-item/${id}`,
        {
          withCredentials: true,
        }
      );

      setProducts(products.filter((item) => item.itemid !== id));
      alert("Product deleted successfully");
    } catch (error) {
      console.log("error response:", error.response);
      console.log(error.response?.data || error.message);
    }
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Admin Products</h2>

      <div className="row">
        {products.map((item) => (
          <div className="col-md-4 mb-4" key={item.itemid}>
            <div className="card h-100 shadow">
              <img
                src={item.image}
                alt={item.itemname}
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title">{item.itemname}</h5>
                <p className="card-text">{item.item_desc}</p>
                <h6 className="text-primary">₹{item.price}</h6>
              </div>

              <div className="card-footer d-flex justify-content-between">
                <Link
                  to={`/single/${item.itemid}`}
                  className="btn btn-primary"
                >
                  View
                </Link>

                <Link
                  to={`/edit/${item.itemid}`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteProduct(item.itemid)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}