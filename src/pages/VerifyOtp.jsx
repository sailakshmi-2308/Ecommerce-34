import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function VerifyOtp() {

  const navigate=useNavigate()
const location=useLocation();
const tokenFromRegister=location.state?.token||""

  const [otpData,setOtpData]=useState({
    otp:"",
    token:tokenFromRegister
  })

  function handleChange(e){

    setOtpData(

      {
        ...otpData,
        [e.target.name]:e.target.value
      }
    )
  }

  async function handleSubmit(e){
    e.preventDefault();
    try{

     const resp= await axios.post("https://ecomflask.duckdns.org/api/admin/verify-otp",otpData,
      {
        headers:{
          "Content-Type":"application/json"
        }
      }
     )
      console.log(resp.data)
      alert("admin registerd successfully")
      navigate("/login")

    }
    catch (error) {
      console.log("error response:", error.response);
      console.log(error.response?.data || error.message);
    }

  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input type="text"
        placeholder="enter your otp"
        name="otp"
        value={otpData.otp}
        onChange={handleChange}
        />
       
       <button>verify OTP</button>
      </form>
    </div>
  )
}
