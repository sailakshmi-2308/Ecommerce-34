import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
       <Link to="/login">Login</Link>
       <Link to="/products">Products</Link>
    <Link to="/dashboard">Dashboard</Link>
    </div>
  )
}
