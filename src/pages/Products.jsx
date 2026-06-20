import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  async function getProducts() {
    try {
      const result = await axios.get(
        "https://ecomflask.duckdns.org/api/products"
      );

      console.log(result.data);

      setProducts(result.data.products);
    } catch (error) {
      console.log("error response:", error.response);
      console.log(error.response?.data || error.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((s) =>
      s.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">
        Products
      </h1>

      {/* Search */}

      <div className="row justify-content-center mb-5">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Products */}

      <div className="row g-4">
        {filteredProducts.length === 0 ? (
          <div className="col-12 text-center">
            <h3>No Products Found</h3>
          </div>
        ) : (
          filteredProducts.map((v) => (
            <div
              className="col-md-4 col-lg-3"
              key={v.itemid}
            >
              <div className="card h-100 shadow-sm">
                <img
                  src={v.image}
                  alt={v.itemname}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">
                  <span className="badge bg-primary mb-2">
                    {v.category}
                  </span>

                  <h5 className="card-title">
                    {v.itemname}
                  </h5>

                  <h4 className="text-success">
                    ₹{v.price}
                  </h4>

                  <p className="text-muted">
                    Quantity: {v.quantity}
                  </p>
                </div>

                <div className="card-footer bg-white border-0">
                  <button className="btn btn-primary w-100">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}