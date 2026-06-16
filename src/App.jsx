import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import VerifyOtp from './pages/Verifyotp'
import Products from './pages/Products'
import Dashboard from './pages/Dashboard'
import Navbar from './pages/Navbar'

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
      </Routes>
    </BrowserRouter>
  
  )
}
