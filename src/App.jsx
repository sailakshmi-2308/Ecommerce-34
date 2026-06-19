import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import VerifyOtp from './pages/Verifyotp'
import Products from './pages/Products'
import Dashboard from './pages/Dashboard'
import Navbar from './pages/Navbar'
import AddProduct from './pages/AddProduct'
import AdminProducts from './pages/AdminProducts'
import SingleProduct from './pages/SingleProduct'
import EditProduct from './pages/EditProduct'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/verify-otp" element={<VerifyOtp/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>
        <Route path="/admin-products" element={<AdminProducts/>}/>
        <Route path="/single/:id" element={<SingleProduct/>}/>
        <Route path="/edit/:id" element={<EditProduct/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}
