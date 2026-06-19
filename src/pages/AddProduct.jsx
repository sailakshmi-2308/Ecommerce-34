import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    Description: "",
    About_item: "",
    quantity: "",
    price: "",
    category: ""
  });

  const [file, setFile] = useState(null);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("title", formData.title);
      data.append("Description", formData.Description);
      data.append("About_item", formData.About_item);
      data.append("quantity", formData.quantity);
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("file", file);

      const result = await axios.post(
        "https://ecomflask.duckdns.org/api/admin/add-item",
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      console.log(result.data);
      alert("Product added successfully");

      setFormData({
        title: "",
        Description: "",
        About_item: "",
        quantity: "",
        price: "",
        category: ""
      });

      setFile(null);
    } catch (error) {
      console.log("error response:", error.response);
      console.log(error.response?.data || error.message);
    }
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Add Product</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Product Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter product title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Product Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter product description"
              name="Description"
              value={formData.Description}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">About Item</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter about item"
              name="About_item"
              value={formData.About_item}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter product quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter product price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter product category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Upload Product Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}