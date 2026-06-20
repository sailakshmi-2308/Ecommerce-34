import React from "react";

export default function Home() {
  const categories = [
    "📱 Smartphones",
    "💻 Laptops",
    "🎮 Gaming",
    "🎧 Audio",
    "⌚ Smart Watches",
    "🔌 Accessories",
  ];

  const products = [
    {
      name: "iPhone 16 Pro",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      name: "Gaming Laptop",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      name: "Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="text-white py-5"
        style={{
          background: "linear-gradient(135deg, #005F73, #0A9396)",
        }}
      >
        <div className="container">
          <div
            className="d-flex flex-column justify-content-center align-items-center text-center"
            style={{ minHeight: "80vh" }}
          >
            <h1 className="display-2 fw-bold mb-3">
              Future Of Electronics
            </h1>

            <p className="lead col-md-8">
              Discover premium gadgets, innovative devices, and cutting-edge
              technology designed for your lifestyle.
            </p>

            <div className="mt-4">
              <button
                className="btn btn-lg me-3"
                style={{
                  backgroundColor: "#EE9B00",
                  color: "white",
                  border: "none",
                }}
              >
                Shop Now
              </button>

              <button
                className="btn btn-lg"
                style={{
                  border: "2px solid white",
                  color: "white",
                }}
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-5 text-white"
        style={{ backgroundColor: "#003845" }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <h1 className="fw-bold">50K+</h1>
              <p>Happy Customers</p>
            </div>

            <div className="col-md-3">
              <h1 className="fw-bold">10K+</h1>
              <p>Products</p>
            </div>

            <div className="col-md-3">
              <h1 className="fw-bold">100+</h1>
              <p>Top Brands</p>
            </div>

            <div className="col-md-3">
              <h1 className="fw-bold">24/7</h1>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section
        className="py-5"
        style={{ backgroundColor: "#F8FFFE" }}
      >
        <div className="container">
          <h2
            className="text-center fw-bold mb-5"
            style={{ color: "#005F73" }}
          >
            Trending Products
          </h2>

          <div className="row g-4">
            {products.map((product, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="card border-0 shadow h-100"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body text-center">
                    <h5>{product.name}</h5>

                    <p className="text-muted">
                      Premium quality electronics for modern lifestyles.
                    </p>

                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#005F73",
                        color: "white",
                      }}
                    >
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        className="py-5"
        style={{ backgroundColor: "#E9F5F2" }}
      >
        <div className="container">
          <h2
            className="text-center fw-bold mb-5"
            style={{ color: "#005F73" }}
          >
            Shop By Category
          </h2>

          <div className="row g-4">
            {categories.map((category, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="card border-0 shadow h-100 text-center"
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "white",
                  }}
                >
                  <div className="card-body py-5">
                    <h4 style={{ color: "#005F73" }}>
                      {category}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="text-white py-5"
        style={{
          background:
            "linear-gradient(135deg, #0A9396, #005F73)",
        }}
      >
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Why Choose ElectroShop?
          </h2>

          <div className="row text-center g-4">
            <div className="col-md-4">
              <div
                className="p-4"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                }}
              >
                <h1>⚡</h1>
                <h4>Latest Technology</h4>
                <p>
                  Explore the newest gadgets and innovative
                  electronic products.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="p-4"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                }}
              >
                <h1>🚚</h1>
                <h4>Fast Delivery</h4>
                <p>
                  Quick and reliable shipping right to your
                  doorstep.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="p-4"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                }}
              >
                <h1>🛡️</h1>
                <h4>Trusted Quality</h4>
                <p>
                  Genuine products from the world's leading
                  brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section
        className="text-center text-white py-5"
        style={{ backgroundColor: "#EE9B00" }}
      >
        <div className="container">
          <h2 className="fw-bold">
            Upgrade Your Tech Experience Today
          </h2>

          <p className="lead">
            Exclusive deals on premium electronics and
            accessories.
          </p>

          <button
            className="btn btn-light btn-lg mt-2"
            style={{ color: "#005F73" }}
          >
            Start Shopping
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-white py-5"
        style={{ backgroundColor: "#003845" }}
      >
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-md-4 mb-4">
              <h4>ElectroShop</h4>

              <p>
                Your trusted destination for premium
                electronics and modern technology.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>

              <ul className="list-unstyled">
                <li>Home</li>
                <li>Products</li>
                <li>Categories</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <h5>Contact Us</h5>

              <p>support@electroshop.com</p>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <hr />

          <p className="text-center mb-0">
            © 2026 ElectroShop. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}