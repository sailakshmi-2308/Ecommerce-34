import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  const admin = JSON.parse(localStorage.getItem("admin"))

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">

          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h2 className="mb-0">Admin Dashboard</h2>
            </div>

            <div className="card-body">
              <h4 className="mb-4">
                Welcome:{" "}
                <span className="text-primary">
                  {admin?.adminemail}
                </span>
              </h4>

              <div className="mb-3">
                <strong>Admin ID:</strong> {admin?.adminid}
              </div>

              <div className="mb-4">
                <strong>Admin Name:</strong> {admin?.adminname}
              </div>

              <button
                className="btn btn-success"
                onClick={() => navigate("/admin-products")}
              >
                Go to Admin Products
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}