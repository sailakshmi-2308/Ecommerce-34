import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.css"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Navbar() {

  const [user, setUser] = useState(null)
  const location = useLocation()
  const navigate=useNavigate()

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"))
    setUser(admin)
  }, [location])

  function logout(){
    localStorage.removeItem("admin")
    navigate("/login")
  }

  return (
    <div className="navbar-container">
      <Link to="/">Home</Link>

      {/* <Link to="/register">Register</Link>
       <Link to="/login">Login</Link>
       <Link to="/products">Products</Link>
    <Link to="/dashboard">Dashboard</Link> */}

      {!user ? (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      ) :
        (
          <>
            <Link to="/products">Products</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/add-product">Add Products</Link>
            <Link to="/admin-products">Admin Products</Link>

            <button onClick={logout}>Logout</button>
          </>
        )
      }
    </div>
  )
}
