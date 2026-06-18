import React from 'react'

export default function Dashboard() {

  const admin=JSON.parse(localStorage.getItem("admin"))
  return (
    <div>
     <h1>Admin Dashboard</h1>
     <h2><b>Welcome:</b>{admin?.adminemail}</h2>
     <p><b>Admin ID:</b>{admin?.adminid}</p>
      <p><b>Admin Name:</b>{admin?.adminname}</p>
     <button>Go to Admin Products</button>
    </div>
  )
}
