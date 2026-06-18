import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    username: "",
    useremail: "",
    useraddress: "",
    userpassword: "",
    useragree: false
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setRegisterData({
      ...registerData,
      [name]: type === "checkbox" ? checked : value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const result = await axios.post(
        "https://ecomflask.duckdns.org/api/admin/register",
        registerData
      );

      console.log(result.data);
      alert("OTP sent successfully");

      navigate("/verify-otp", {
        state: {
          token: result.data.token
        }
      });
    } catch (error) {
      console.log("error response:", error.response);
      console.log(error.response?.data || error.message);
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Register Here</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your username"
                    name="username"
                    value={registerData.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    name="useremail"
                    value={registerData.useremail}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your address"
                    name="useraddress"
                    value={registerData.useraddress}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    name="userpassword"
                    value={registerData.userpassword}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agree"
                    name="useragree"
                    checked={registerData.useragree}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="agree">
                    I agree to the Terms & Conditions
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}