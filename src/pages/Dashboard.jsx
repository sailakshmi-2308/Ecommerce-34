import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate=useNavigate()

  const admin=JSON.parse(localStorage.getItem("admin"))
  return (
    <div>
     <h1>Admin Dashboard</h1>
     <h2><b>Welcome:</b>{admin?.adminemail}</h2>
     <p><b>Admin ID:</b>{admin?.adminid}</p>
      <p><b>Admin Name:</b>{admin?.adminname}</p>
     <button onClick={()=>navigate("/admin-products")}>Go to Admin Products</button>
    </div>
  )
}
