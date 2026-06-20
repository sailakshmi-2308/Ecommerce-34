import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const result = await axios.post(
        "https://ecomflask.duckdns.org/api/admin/login",
        formData,
        {
          withCredentials: true,
        }
      );

      console.log(result.data);

      localStorage.setItem(
        "admin",
        JSON.stringify(result.data.admin)
      );

      navigate("/dashboard");
    } catch (error) {
      console.log("error response:", error.response);
      console.log(error.response?.data || error.message);
    }
  }

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-header text-center bg-primary text-white">
              <h3 className="mb-0">Admin Login</h3>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Login
                </button>
              </form>
            </div>

            <div className="card-footer text-center">
              <small className="text-muted">
                Admin Access Only
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}